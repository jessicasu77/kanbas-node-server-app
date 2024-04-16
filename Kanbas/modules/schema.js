import mongoose from "mongoose";
const modulesSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    course: { type: String, required: true },
    lessons: Array
  },
  { collection: "modules" });
export default modulesSchema;