import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contactNo: { type: String, required: true },
  email: { type: String, required: true },
  collegeName: String,
  state: String,
  city: String,
  pincode: String,
  branch: String,
  courseName: String,
  yearOfPassing: String,
}, { timestamps: true });

export default mongoose.model("Form", formSchema);