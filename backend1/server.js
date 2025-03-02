// 



import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import donorRoutes from "./routes/donorRoutes.js";
import ngoRoutes from "./routes/ngoRoutes.js";
import foodDonationRoutes from "./routes/foodDonationRoutes.js"
//import achievementRoutes from "./routes/achievementRoutes.js"; 
//import rewardRoutes from "./routes/rewardsRoutes.js"; 

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// app.use(express.json({ limit: '10mb' }));
// app.use(express.urlencoded({ extended: true, limit: '10mb' }));
console.log("1");
mongoose.connect(process.env.MONGO)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use("/api/donor", donorRoutes);
app.use("/api/ngo", ngoRoutes);
app.use("/",foodDonationRoutes)
//app.use("/api/achievements", achievementRoutes);
//app.use("/api/rewards", rewardRoutes);
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
