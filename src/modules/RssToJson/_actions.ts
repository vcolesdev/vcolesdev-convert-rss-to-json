import fs from "fs";
import parse from "rss-to-json";
import {response} from "express";
import {JsonOptions} from "../../types";
import {handleConvertRssToJson} from "./_functions";

/**
 * handleConsumeFeed()
 * Consumes an RSS feed from a URL and returns it.
 * @param url
 * @param options
 */
async function dispatchConsumeRssUrl (url: string, options: JsonOptions) {
  if (!url) {
    return new Error("No URL provided! Exiting...");
  }
  const content = await parse(url);
  return await handleConvertRssToJson(content, options)
    .then((data: unknown) => {
      return response.json(data);
    });
}

/**
 * handleConsumeRssFile()
 * Consumes an RSS feed from a file and returns it.
 * @param filepath
 * @param options
 */
async function dispatchConsumeRssFile(filepath: string, options: JsonOptions) {
  if (!filepath) {
    return new Error("Invalid filepath!  Exiting...");
  }
  try {
    const data = fs.readFileSync(filepath, "utf-8");
    const content = await parse(data);
    return await handleConvertRssToJson(content, options);
  } catch (error) {
    console.error(`Error consuming feed: `, error);
  } finally {
    console.log("Feed consumed!");
  }
}

export {dispatchConsumeRssUrl, dispatchConsumeRssFile};