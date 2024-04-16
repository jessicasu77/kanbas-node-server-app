import mongoose from "mongoose";
const coursesSchema = new mongoose.Schema({
    name: { type: String, required: true },
    number: { type: String, required: true },
    id: String,
    startDate: Date,
    startDate: Date,
    department: String,
    credits: Number,
    description: String
  },
  { collection: "courses" });
export default coursesSchema;