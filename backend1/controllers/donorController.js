import Donor from "../models/donor.model.js";
import bcrypt from "bcrypt";
//const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

import jwt from "jsonwebtoken";

//const nodemailer = require("nodemailer");
import nodemailer from "nodemailer";

//const { PrismaClient } = require("@prisma/client");
//require("dotenv").config();
//const cloudinary = require("cloudinary").v2;
//const { socketConfig } = require("../config/Socket");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "food4goodhackathon@gmail.com",
    pass: "yjdp nexb mtkf rbto",
  },
});

async function sendEmail(to, subject, text) {
  try {
    let info = await transporter.sendMail({
      from: "food4goodhackathon@gmail.com",
      to,
      subject,
      text,
    });

    console.log("Email sent: ", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}
const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();
// Register a new donor
export const register = async (req, res) => {
  const { username, email, password, phone, address, city, state, pincode } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    const existingDonor = await Donor.findOne({ email });
    if (existingDonor) {
      return res.status(400).json({ message: "Donor already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newDonor = new Donor({
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      city,
      state,
      pincode,
    });

    await newDonor.save();

    const otp = generateOTP();
    const otpExpiry = new Date(Date.now() + 15 * 60 * 1000);
    // await prisma.donor.update({
    //   where: { _id: donor._id },
    //   data: { otp, otpExpiry },
    // });
    await Donor.findByIdAndUpdate(
      newDonor._id,  // Use the newly created donor's ID
      { otp, otpExpiry },
      { new: true }   // Returns the updated document
    );

    await transporter.sendMail({
      to: email,
      subject: "Your OTP Code",
      text: `Your OTP code is ${otp}. It is valid for 15 minutes.`,
    });

    res.status(201).json({ message: "OTP sent to your email" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong", error });
  }
};

// exports.verifyOTP = async (req, res) => {
//   const { email, otp } = req.body;

//   try {
//     const donor = await prisma.donor.findUnique({ where: { email } });

//     if (!donor || donor.otp !== otp || new Date() > donor.otpExpiry) {
//       return res.status(400).json({ message: "Invalid or expired OTP" });
//     }

//     await prisma.donor.update({
//       where: { email },
//       data: { isVerified: true, otp: null, otpExpiry: null },
//     });

//     res.status(200).json({ success: true, message: "OTP verified", donor });
//   } catch (error) {
//     console.error("Error verifying OTP:", error);
//     res.status(500).json({ message: "Error verifying OTP", error: error.message });
//   }
// };

//const Donor = require("../models/Donor"); // Import your Mongoose model

export const verifyOTP = async (req, res) => {
  const { email, otp } = req.body;
  console.log(email);
  try {
    // Find the donor by email
    const donor = await Donor.findOne({ email });
    //console.log(donor.otp);
    if (!donor || donor.otp !== otp ){//|| new Date() > donor.otpExpiry) {
      return res.status(400).json({ message: "Invalid or expired OTP" });
    }

    // Update the donor's verification status and clear OTP fields
    await Donor.updateOne(
      { email },
      { $set: { isVerified: true, otp: null, otpExpiry: null } }
    );

    res.status(200).json({ success: true, message: "OTP verified" });
  } catch (error) {
    console.error("Error verifying OTP:", error);
    res.status(500).json({ message: "Error verifying OTP", error: error.message });
  }
};


// Sign in a donor
export const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const donor = await Donor.findOne({ email });
    if (!donor) {
      return res.status(404).json({ message: "Donor not found" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, donor.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    res.status(200).json({
      message: "Donor signed in successfully",
      donor: {
        _id: donor._id,
        username: donor.username,
        email: donor.email,
        phone: donor.phone,
        address: donor.address,
        city: donor.city,
        state: donor.state,
        pincode: donor.pincode,
        isVerified: donor.isVerified,
      }
    });
  } catch (error) {
    console.error("Signin Error: ", error);
    res.status(500).json({ message: "Something went wrong", error: error.message });
  }
};
// Logout a donor
// Logout Donor without session
export const logout = (req, res) => {
  try {
    res.status(200).json({ message: "Donor logged out successfully" });
  } catch (error) {
    console.error("Logout Error:", error);
    res.status(500).json({ message: "Something went wrong", error: error.message });
  }
};