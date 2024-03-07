import mongoose from "mongoose";

const Schema = mongoose.Schema;

/**
 * Feed Result Schema
 * @description Schema for capturing a single FeedResult.
 */
const FeedResultSchema = new Schema({
  id: {
    type: String
  },
  title: {
    type: String
  },
  description: {
    type: String
  },
  link: {
    type: String
  },
  published: {
    type: Date
  },
  created: {
    type: Date
  },
  category: {
    type: typeof Array<string>
  },
  content: {
    type: String
  },
  enclosures: {
    type: typeof Array<string>
  },
  content_encoded: {
    type: String
  },
  media: {
    type: Object
  },
});

const FeedResult = mongoose.model("FeedResult", FeedResultSchema);

const FeedResultsListSchema = new Schema({
  feedResults: {
    type: typeof FeedResult
  }
});

export const FeedResultsList = mongoose.model("FeedResultsList", FeedResultsListSchema);

