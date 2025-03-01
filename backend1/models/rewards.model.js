import mongoose from "mongoose";

const rewardSchema = new mongoose.Schema({
  title: { type: String, required: true },
  points: { type: Number, required: true },
  type: { type: String, enum: ["Badge", "Feature", "Certificate"], required: true },
});

export default mongoose.model("Reward", rewardSchema);
