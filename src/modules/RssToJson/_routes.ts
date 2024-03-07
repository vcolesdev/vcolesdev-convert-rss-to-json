import path from "path";
import paths from "../../paths";
import RssToJson from "./index";
import CustomJSON from "../CustomJSON";
import ServerMsg from "../ServerMsg";
import {createTimeStamp} from "../../utils";
import {RssToJsonModule} from "./_types";
import {CustomJsonModule} from "../CustomJSON/_types";
import {NextFunction, Request, Response} from "express";
import {JsonOptions, RssFeedQueryArgs, RssFeedResults} from "../../types";

const customJson: CustomJsonModule = CustomJSON;
const rssToJson: RssToJsonModule = RssToJson;

const {handleGetJsonOptions}  = customJson.fn;
const {dispatchWriteJsonFile} = customJson.actions;

const {handleCheckRssFeedUrl, handleGetRssFeedQueryArgs} = rssToJson.fn;
const {dispatchConsumeRssUrl} = rssToJson.actions;

/**
 * getRouteRssToJsonConverter()
 * Handle the route that converts an RSS feed to JSON.
 * @param req
 * @param res
 * @param next
 */
async function getRouteRssToJsonConverter (req: Request, res: Response, next: NextFunction) {
  let feed: RssFeedResults;

  const queryArgs: RssFeedQueryArgs = {
    rss_feed_url: req.query.rss_feed_url as string,
    download_file: req.query.download_file as string,
  };

  const args: RssFeedQueryArgs = handleGetRssFeedQueryArgs({...queryArgs});
  const options: JsonOptions = handleGetJsonOptions(null, 2, args.download_file === "on");
  const optsToDownload = options.toDownload;

  try {
    // Check if RSS feed url is valid and consume the feed
    handleCheckRssFeedUrl(queryArgs.rss_feed_url, res);

    // Consume the feed
    feed = await dispatchConsumeRssUrl(args.rss_feed_url, options)
      .then((json) => {
        return json;
      })

    // If the feed is to be downloaded, send it as a file
    if (optsToDownload) {
      const timestamp = createTimeStamp(true);
      const filename = `rss-feed_${timestamp}.json`;
      const filepath = path.join(paths.jsonDir, filename);

      // Write the file to the file system.
      dispatchWriteJsonFile(filepath, feed);
      if (feed) {
        ServerMsg.convertRss.onSuccess(filepath);
      }
    }
  } catch (error: unknown) {
    ServerMsg.convertRss.onError(error);
  } finally {
    ServerMsg.convertRss.onComplete();
  }

  // Return the results
  const result = res.json(feed);
  if (next) next();
  return result;
}

export {getRouteRssToJsonConverter};