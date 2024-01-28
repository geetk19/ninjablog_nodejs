const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/* Creating a schema */

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

/* Creating a model */

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
