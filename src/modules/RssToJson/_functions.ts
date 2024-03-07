import path from "path";
import paths from "../../paths";
import CustomJSON from "../CustomJSON";
import {Response} from "express";
import {createTimeStamp} from "../../utils";
import {JsonOptions, RssFeedQueryArgs} from "../../types";

const {dispatchWriteJsonFile} = CustomJSON.actions;

/**
 * handleCheckRssFeedUrl()
 * Check a given RSS feed URL for validity and return an error if it's invalid.
 * @param rssFeedUrl
 * @param res
 */
function handleCheckRssFeedUrl(rssFeedUrl: string, res: Response) {
  if (!rssFeedUrl || rssFeedUrl === "") {
    return res.status(400).json({ error: "No RSS feed URL provided!" });
  }
}

/**
 * handleGetRssFeedQueryArgs()
 * Get the query parameters from our field inputs.
 * @param args - The query parameters
 */
function handleGetRssFeedQueryArgs (args: RssFeedQueryArgs) {
  const { rss_feed_url, download_file } = args;
  return {
    rss_feed_url: rss_feed_url,
    download_file: download_file,
  }
}

/**
 * handleConvertRssToJson()
 * Converts an RSS feed to JSON.
 * @param content
 * @param options
 * @cb - The callback to execute after the conversion is complete
 */
async function handleConvertRssToJson(content: unknown, options: JsonOptions, cb?: () => Response) {
  const {replacer, space, toDownload} = options;

  try {
    const jsonContent = JSON.stringify(content, replacer, space);

    // If the feed is to be downloaded, save it to the file system
    if (toDownload) {
      const timestamp = createTimeStamp(true);
      const filename = `rss-feed_${timestamp}.json`;
      const filepath = path.join(paths.jsonDir, filename);

      console.log(`Feed was converted to JSON and saved to file system.  Check your project's ./src/_json folder! ^_^`);

      // Save the JSON to the file system
      dispatchWriteJsonFile(filepath, jsonContent);

      if (cb) cb();
    }

    return JSON.parse(jsonContent);
  }
  catch (error) {
    // @TODO - Error handling here
    console.error(`Error converting feed to JSON: `, error);
  }
}

export {
  handleCheckRssFeedUrl,
  handleGetRssFeedQueryArgs,
  handleConvertRssToJson,
};