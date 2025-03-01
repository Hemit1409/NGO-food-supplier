import mongoose from "mongoose";

const achievementSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  progress: { type: Number, default: 0 }, // Progress percentage
  completed: { type: Boolean, default: false },
  points: { type: Number, required: true },
});

export default mongoose.model("Achievement", achievementSchema);
