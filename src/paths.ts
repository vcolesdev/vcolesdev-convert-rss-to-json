import path from "path";

const absoluteIndexFile = path.resolve(__dirname, "../src/views/index.html");

/** Add paths here to access from anywhere in application. */
export default {
  absoluteIndexFile: absoluteIndexFile,
  indexFile: process.env.INDEX_FILE || absoluteIndexFile,
  successTemplate: path.resolve(__dirname, "./views/success.html"),

  jsonDir: path.resolve(__dirname, "_json"),
};
