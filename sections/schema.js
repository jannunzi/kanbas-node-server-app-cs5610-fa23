import mongoose from "mongoose";
const schema = mongoose.Schema(
  {
    name: String,
    number: String,
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "courses",
    },
  },
  {
    collection: "sections",
  }
);

export default schema;
