import mongoose from "mongoose";
const { Schema } = mongoose;

const ngoSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  address:{
    type:String,
    required:true
  },
  city:{
    type:String,
  },
  pincode:{
    type:String
  },
  certificate:{
    type:String
  },
  isApproved:{
    type:Boolean,
  },
  mobileNumber: {
    type: String,
    required: true,
  }
}, {
  timestamps: true,
});

export default mongoose.model("NGO", ngoSchema);
