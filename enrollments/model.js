import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("enrollments", schema);
export default model;
