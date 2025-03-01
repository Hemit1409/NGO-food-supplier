import mongoose from "mongoose";
const { Schema } = mongoose;

const donationSchema = new mongoose.Schema({
  donor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  foodType: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["AVAILABLE", "PICKED_UP", "DELIVERED"],
    default: "AVAILABLE",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  pickupTime: Date,
});

export default mongoose.model("Donation", donationSchema);