import mongoose from "mongoose";
const { Schema } = mongoose;

const contactUsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["PENDING", "RESOLVED"],
      default: "PENDING",
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

export default mongoose.model("ContactUs", contactUsSchema);
