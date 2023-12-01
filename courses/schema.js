import mongoose from "mongoose";
const schema = mongoose.Schema(
  {
    name: String,
    number: String,
    description: String,
    startDate: Date,
    endDate: Date,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  },
  {
    collection: "courses",
  }
);

export default schema;
