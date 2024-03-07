import {handleGetJsonOptions} from "./_functions";
import {dispatchWriteJsonFile} from "./_actions";
import {CustomJsonModule} from "./_types";

/**
 * Custom JSON module with utility functions.
 * @module CustomJSON
 */
const CustomJSON: CustomJsonModule = {
  fn: {
    handleGetJsonOptions: handleGetJsonOptions,
  },
  actions: {
    dispatchWriteJsonFile: dispatchWriteJsonFile,
  }
}

export default CustomJSON;