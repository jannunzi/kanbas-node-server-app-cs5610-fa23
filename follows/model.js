import schema from "./schema.js";
import mongoose from "mongoose";
const model = mongoose.model("follows", schema);
export default model;
