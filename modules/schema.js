import mongoose from "mongoose";
const schema = mongoose.Schema(
  {
    name: String,
    description: String,
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "courses",
    },
  },
  {
    collection: "modules",
  }
);

export default schema;
