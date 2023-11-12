import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("courses", schema);
export default model;
