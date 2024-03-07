import {RssToJsonModule} from "./_types";
import {dispatchConsumeRssFile, dispatchConsumeRssUrl} from "./_actions";
import {getRouteRssToJsonConverter} from "./_routes";
import {
  handleConvertRssToJson,
  handleCheckRssFeedUrl,
  handleGetRssFeedQueryArgs
} from "./_functions";

/**
 * RSS to JSON conversion module with utility functions.
 * @module RssToJson
 */
const RssToJson: RssToJsonModule = {
  fn: {
    handleCheckRssFeedUrl: handleCheckRssFeedUrl,
    handleGetRssFeedQueryArgs: handleGetRssFeedQueryArgs,
    handleConvertRssToJson: handleConvertRssToJson,
  },
  actions: {
    dispatchConsumeRssUrl: dispatchConsumeRssUrl,
    dispatchConsumeRssFile: dispatchConsumeRssFile,
  },
  routes: {
    /**
     * Handle the route that converts an RSS feed to JSON.
     * @param req
     * @param res
     * @param next
     */
    getRouteRssToJsonConverter: getRouteRssToJsonConverter,
  }
};
export default RssToJson;