import fs from "fs";
import {RssFeedResults} from "../../types";

/**
 * Write a JSON file to the file system.
 * @param filepath
 * @param content
 */
function dispatchWriteJsonFile(filepath: string, content: RssFeedResults) {
  return fs.writeFileSync(filepath, JSON.stringify(content, null, 2));
}

export {dispatchWriteJsonFile};