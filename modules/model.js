import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("modules", schema);
export default model;
