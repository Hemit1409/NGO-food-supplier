// import mongoose from "mongoose";
// const { Schema } = mongoose;

// const donationSchema = new mongoose.Schema({
//   donor: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User",
//     required: true,
//   },
//   Title :{
//     type : String,
//     required : true
//   },
//   Category:{
//     type : String,
//     enum : ["Perishable" , "Non-Perishable" , "Cooked" , "Raw Ingredient" , "Bakery" , "Dairy"],
//   },
//   Description:{
//     type : String,
//     required : true
//   },
//   quantity: {
//     type: Number,
//     required: true,
//   },
//   Pickuplocation: {
//     type: String,
//     required: true,
//   },
//   status: {
//     type: String,
//     enum: ["AVAILABLE", "PICKED_UP", "DELIVERED","REPORTED","DISTRIBUTED"],
//     default: "AVAILABLE",
//   },
//   foodVerification:{
//     type : String,
//     enum : ["VERIFIED","NOT VERIFIED"]
//   },
//   expiryDate:{
//     type : Date,
//     required : true
//   },
//   photos:{
//     type:String
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
//   pickupTime: Date,
// });

// export default mongoose.model("Donation", donationSchema);
// models/foodDonation.model.js
import mongoose from 'mongoose';

const donationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required']
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: ['perishable', 'non-perishable', 'cooked', 'raw', 'bakery', 'dairy']
  },
  description: {
    type: String,
    required: [true, 'Description is required']
  },
  quantity: {
    type: String,
    required: [true, 'Quantity is required']
  },
  expiryDate: {
    type: Date
  },
  pickupLocation: {
    type: String,
    required: [true, 'Pickup location is required']
  },
  availableUntil: {
    type: Date,
    required: [true, 'Available until date/time is required']
  },
  pickupNotes: {
    type: String
  },
  // You can add more fields like createdBy (user reference), status, etc.
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Check if model is already defined (for hot reloading)
const Donation = mongoose.models.Donation || mongoose.model('Donation', donationSchema);

export default Donation;