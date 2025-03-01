// 



import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import donorRoutes from "./routes/donorRoutes.js";
import ngoRoutes from "./routes/ngoRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

console.log("1");
mongoose.connect(process.env.MONGO)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use("/api/donor", donorRoutes);
app.use("/api/ngo", ngoRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
