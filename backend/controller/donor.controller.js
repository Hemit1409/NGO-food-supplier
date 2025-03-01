const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const { PrismaClient } = require("@prisma/client");
require("dotenv").config();
const cloudinary = require("cloudinary").v2;
const { socketConfig } = require("../config/Socket");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const prisma = new PrismaClient();

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL,
//     pass: process.env.PASSWORD,
//   },
// });

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

exports.registerDonor = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const donor = await prisma.donor.create({
      data: {
        name,
        email,
        password: hashedPassword,
        isVerified: false,
      },
    });

    const otp = generateOTP();
    const otpExpiry = new Date(Date.now() + 15 * 60 * 1000);
    await prisma.donor.update({
      where: { id: donor.id },
      data: { otp, otpExpiry },
    });

    await transporter.sendMail({
      to: email,
      subject: "Your OTP Code",
      text: `Your OTP code is ${otp}. It is valid for 15 minutes.`,
    });

    res.status(200).json({ message: "OTP sent to your email" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error registering donor", error: error.message });
  }
};

exports.verifyOTP = async (req, res) => {
  const { email, otp } = req.body;

  try {
    const donor = await prisma.donor.findUnique({ where: { email } });

    if (!donor || donor.otp !== otp || new Date() > donor.otpExpiry) {
      return res.status(400).json({ message: "Invalid or expired OTP" });
    }

    await prisma.donor.update({
      where: { email },
      data: { isVerified: true, otp: null, otpExpiry: null },
    });

    res.status(200).json({ success: true, message: "OTP verified", donor });
  } catch (error) {
    console.error("Error verifying OTP:", error);
    res.status(500).json({ message: "Error verifying OTP", error: error.message });
  }
};

exports.addDonorDetails = async (req, res) => {
  const { name, address, city, state, pincode, phone, donorType, photo, restaurantName } = req.body;
  email1 = "hemitrana2@gmail.com"
  if (!email) {
    return res.status(400).json({ success: false, message: "Donor ID is required" });
  }

  try {
    let uploadedPhoto = null;

    // if (photo && photo.startsWith("data:image")) {
    //   const uploadResponse = await cloudinary.uploader.upload(photo, { folder: "donor_photos", resource_type: "image" });
    //   uploadedPhoto = uploadResponse.secure_url;
    // }

    const donor = await prisma.donor.update({
      where: { email: email1 },
      data: {
        name,
        address,
        city,
        state,
        pincode,
        phone,
        donorType,
        photo: uploadedPhoto || null,
        restaurantName: donorType === "RESTAURANT" ? restaurantName : null,
      },
    });

    res.status(200).json({ success: true, message: "Donor details added successfully", donor });
  } catch (error) {
    console.error("Backend Error:", error);
    res.status(500).json({ success: false, message: "Error adding donor details", error: error.message });
  }
};

exports.authenticate = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};


exports.Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    console.log("hi");
    const donor = await prisma.donor.findUnique({ where: { email } });


    console.log("Stored password:", donor.password);

    if (!donor) return res.status(404).json({ message: "Donor not found" });

    const isMatch = await bcrypt.compare(password, donor.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ userId: donor.id.toString() }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({ success: true, token, donor });
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error: error.message });
  }
};



exports.addFood = async (req, res) => {
  try {
    const { foodType, foodCategory, noOfDishes, preparationDate, expiryDate, address, latitude, longitude, city } = req.body;
    const donorId = req.user.userId;

    if (!foodType || !foodCategory || !noOfDishes || !preparationDate || !expiryDate || !address) {
      return res.status(400).json({ success: false, message: "Please fill all the required fields." });
    }

    const foodDetails = await prisma.foodDetails.create({
      data: {
        donorId,
        foodType,
        foodCategory,
        address,
        latitude,
        longitude,
        city,
        noOfDishes: parseInt(noOfDishes),
        preparationDate: new Date(preparationDate),
        expiryDate: new Date(expiryDate),
        status: "available",
      },
    });

    if (global.io) {
      global.io.emit("newFoodDonation", { type: "NEW_FOOD_DONATION", foodDetails });
    }

    res.status(201).json({ success: true, message: "Food details added successfully.", foodDetails });
  } catch (error) {
    console.error("❌ Error adding food details:", error.message);
    res.status(500).json({ success: false, message: "Internal server error." });
  }
};

exports.getApprovedNGOs = async (req, res) => {
  try {
    const ngos = await prisma.nGO.findMany({
      where: { isApproved: true },
      select: {
        id: true,
        name: true,
        address: true,
        email: true,
        phoneNumber: true,
        city: true,
        pincode: true,
      },
    });

    res.status(200).json({ success: true, ngos });
  } catch (error) {
    console.error("Error fetching NGOs:", error.message);
    res.status(500).json({ success: false, message: "Internal server error." });
  }
};

exports.authenticate = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Authentication failed" });
  }
};

exports.Login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const donor = await prisma.donor.findUnique({ where: { email } });
    if (!donor) {
      return res.status(400).json({ message: "Donor not found" });
    }

    const isMatch = await bcrypt.compare(password, donor.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: donor.id }, process.env.JWT_SECRET, { expiresIn: "1d" });
    res.status(200).json({ success: true, token, donor });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Login failed" });
  }
};

exports.addDonorDetails = async (req, res) => {
  const { name, address, city, state, pincode, phone, donorType, photo, restaurantName } = req.body;
  email1 = "hemitrana2@gmail.com"
  if (!email1) {
    return res.status(400).json({ success: false, message: "Donor ID is required" });
  }

  try {
    let uploadedPhoto = null;

    // if (photo && photo.startsWith("data:image")) {
    //   const uploadResponse = await cloudinary.uploader.upload(photo, { folder: "donor_photos", resource_type: "image" });
    //   uploadedPhoto = uploadResponse.secure_url;
    // }

    const donor = await prisma.donor.update({
      where: { email: email1 },
      data: {
        name,
        address,
        city,
        state,
        pincode,
        phone,
        donorType,
        photo: uploadedPhoto || null,
        restaurantName: donorType === "RESTAURANT" ? restaurantName : null,
      },
    });

    res.status(200).json({ success: true, message: "Donor details added successfully", donor });
  } catch (error) {
    console.error("Backend Error:", error);
    res.status(500).json({ success: false, message: "Error adding donor details", error: error.message });
  }
};

exports.authenticate = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};


exports.Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const donor = await prisma.donor.findUnique({ where: { email } });


    console.log("Stored password:", donor?.password);

    if (!donor) return res.status(404).json({ message: "Donor not found" });

    const isMatch = await bcrypt.compare(password, donor.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ userId: donor.id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({ success: true, token, donor });
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error: error.message });
  }
};



exports.addFood = async (req, res) => {
  try {
    const { foodType, foodCategory, noOfDishes, preparationDate, expiryDate, address, latitude, longitude, city } = req.body;
    const donorId = req.user.userId;

    if (!foodType || !foodCategory || !noOfDishes || !preparationDate || !expiryDate || !address) {
      return res.status(400).json({ success: false, message: "Please fill all the required fields." });
    }

    const foodDetails = await prisma.foodDetails.create({
      data: {
        donorId,
        foodType,
        foodCategory,
        address,
        latitude,
        longitude,
        city,
        noOfDishes: parseInt(noOfDishes),
        preparationDate: new Date(preparationDate),
        expiryDate: new Date(expiryDate),
        status: "available",
      },
    });

    if (global.io) {
      global.io.emit("newFoodDonation", { type: "NEW_FOOD_DONATION", foodDetails });
    }

    res.status(200).json({ success: true, donor });
  } catch (error) {
    console.error("Error fetching donor details:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.updateDonorDetails = async (req, res) => {
  try {
    const { name, address, phone } = req.body;
    const donorId = req.user.userId;

    const updatedDonor = await prisma.donor.update({
      where: { id: donorId },
      data: { name, address, phone },
    });

    res.status(200).json({ success: true, updatedDonor });
  } catch (error) {
    console.error("Error updating donor details:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
