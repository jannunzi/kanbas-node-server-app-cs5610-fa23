import schema from "./schema.js";
import mongoose from "mongoose";
const model = mongoose.model("users", schema);
export default model;
