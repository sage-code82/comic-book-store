import mongoose from "mongoose";

const comicSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    publisher: {
      type: String,
      required: true,
    },
    publishYear: {
      type: Number,
      required: true,
    },
  },
  {
    timestamp: true,
  }
);

export const Comic = mongoose.model("Comic", comicSchema);
