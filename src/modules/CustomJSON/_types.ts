import {JsonOptions, RssFeedResults} from "../../types";

interface CustomJsonShape {
  fn: {
    handleGetJsonOptions: (replacer: null, space: number, toDownload: boolean) => JsonOptions
  },
  actions: {
    dispatchWriteJsonFile: (filepath: string, content: RssFeedResults) => void,
  }
}

type CustomJsonModule = CustomJsonShape;

export {CustomJsonShape, CustomJsonModule}