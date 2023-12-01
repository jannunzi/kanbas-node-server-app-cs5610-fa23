import mongoose from "mongoose";
const schema = mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    section: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "sections",
    },
    grade: Number,
  },
  {
    collection: "enrollments",
  }
);

export default schema;
