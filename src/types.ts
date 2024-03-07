import QueryString from "querystring";

/**
 * The type for checkbox inputs
 */
export type InputCheckbox = string | string[] | QueryString.ParsedUrlQuery | QueryString.ParsedUrlQuery[] | undefined;

/* Queries */

/**
 * The type for the results of processing the RSS feed URL endpoint.
 */
export type RssFeedResults = unknown;

/**
 * Query parameters for the /api/${rss_feed_url} endpoint.
 * @param rss_feed_url - The URL of the RSS feed to convert
 * @param check_to_download - Whether to download the feed or not
 */
export interface RssFeedQueryArgsShape {
  rss_feed_url: string,
  download_file?: InputCheckbox,
}

/**
 * The type for QueryArgsShape interface.
 * @interface RssFeedQueryArgsShape
 * @type RssFeedQueryArgs
 */
export type RssFeedQueryArgs = RssFeedQueryArgsShape;

/**
 * Options for the JSON conversion process.
 * @param replacer - The replacer to use
 * @param space - The space to use
 * @param toDownload - Whether to download the feed or not
 */
export interface JsonOptionsShape {
  replacer: null,
  space: number,
  toDownload?: boolean | undefined,
}

/**
 * The type for JsonOptionsShape interface.
 * @interface JsonOptionsShape
 * @type JsonOptions
 */
export type JsonOptions = JsonOptionsShape;

