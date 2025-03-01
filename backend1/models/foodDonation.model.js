import mongoose from "mongoose";
const { Schema } = mongoose;

const donationSchema = new mongoose.Schema({
  donor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  Title :{
    type : String,
    required : true
  },
  Category:{
    type : String,
    enum : ["Perishable" , "Non-Perishable" , "Cooked" , "Raw Ingredient" , "Bakery" , "Dairy"],
  },
  Description:{
    type : String,
    required : true
  },
  quantity: {
    type: Number,
    required: true,
  },
  Pickuplocation: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["AVAILABLE", "PICKED_UP", "DELIVERED","REPORTED","DISTRIBUTED"],
    default: "AVAILABLE",
  },
  foodVerification:{
    type : String,
    enum : ["VERIFIED","NOT VERIFIED"]
  },
  expiryDate:{
    type : Date,
    required : true
  },
  photos:{
    type:String
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  pickupTime: Date,
});

export default mongoose.model("Donation", donationSchema);