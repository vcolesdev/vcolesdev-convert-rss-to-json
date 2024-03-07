import {JsonOptions} from "../../types";

/**
 * Returns the options for the JSON conversion process.
 * @param replacer
 * @param space
 * @param toDownload
 * @returns {JsonOptions}
 */
function handleGetJsonOptions(replacer: null, space: number, toDownload: boolean): JsonOptions {
  return {
    replacer: replacer,
    space: space,
    toDownload: toDownload,
  };
}

export {handleGetJsonOptions}