const mongoose = require("mongoose");

const userThoughtSchema = new mongoose.Schema(
  {
    thought: {
      type: String,
    },
    image: {
      type: Array,
      required: true,
    },
    likes: [{ likedBy: { type: mongoose.Types.ObjectId, ref: "company" } }],
    comments: [
      {
        comment: { type: String },
        commentBy: { type: mongoose.Types.ObjectId, ref: "company" },
      },
    ],
    postedBy: {
      type: mongoose.Types.ObjectId,
      ref: "company",
    },
    publice: {
      type: Boolean,
    },
    connectionongraynod: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

const userCreatePost = mongoose.model("createpost", userThoughtSchema);
module.exports = userCreatePost;
