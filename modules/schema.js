import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    name: String,
    description: String,
    course: String, //{ type: mongoose.Schema.Types.ObjectId, ref: "courses" },
  },
  { collection: "modules" }
);

export default schema;
