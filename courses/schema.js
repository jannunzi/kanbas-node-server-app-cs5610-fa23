import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    name: String,
    number: String,
    description: String,
    description: String,
    startDate: Date,
    endDate: Date,
    department: String,
    credits: Number,
    author: String,
  },
  { collection: "courses" }
);

export default schema;
