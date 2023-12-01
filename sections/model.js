import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("sections", schema);
export default model;
