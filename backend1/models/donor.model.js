// import mongoose from 'mongoose';
// const { Schema } = mongoose;

// const userSchema = new Schema({
//  username:{
//     type:String,
//     required:true,
//     unique:true,
//     ref: "Register"
//  },
//  email:{
//     type:String,
//     required:true,
//     unique:true
//  },
//  password:{
//     type:String,
//     required:true
//  }
 
// },{
//     timestamps:true
// });

// export default mongoose.model("User", userSchema)

import mongoose from "mongoose";
const { Schema } = mongoose;

const donorSchema = new Schema({
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
  otp:{
    type : String,
  },
  isVerified:{
    type:Boolean,
    default:false
  },
  address:{
    type : String,
  },
  city:{
    type : String,
  },
  state:{
    type : String
  },
  pincode:{
      type : String
  },
  otpExpiry: {
    type: Date,
  },
  phone: {
    type: String,
    required: true,
  }
}, {
  timestamps: true,
});

export default mongoose.model("Donor", donorSchema);
