// import NGO from "../models/ngo.model.js";
// import bcrypt from "bcrypt";

// // NGO REGISTER
// export const ngoRegister = async (req, res) => {
//   try {
//     const { username, email, password, mobileNumber } = req.body;

//     const existingUser = await NGO.findOne({ $or: [{ email }, { username }] });
//     if (existingUser) {
//       return res.status(400).json({ message: "NGO already exists" });
//     }

//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     const newNGO = new NGO({
//       username,
//       email,
//       password: hashedPassword,
//       mobileNumber,
//     });

//     await newNGO.save();
//     res.status(201).json({ message: "NGO registered successfully" });
//   } catch (err) {
//     res.status(500).json({ message: "Something went wrong", error: err.message });
//   }
// };

// // NGO LOGIN
// export const ngoLogin = async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     const ngo = await NGO.findOne({ username });
//     if (!ngo) {
//       return res.status(400).json({ message: "NGO not found" });
//     }

//     const isMatch = await bcrypt.compare(password, ngo.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: "Invalid Password" });
//     }

//     res.status(200).json({
//       message: "NGO Login Successful",
//       ngo: {
//         username: ngo.username,
//         email: ngo.email,
//         mobileNumber: ngo.mobileNumber,
//       },
//     });
//   } catch (err) {
//     res.status(500).json({ message: "Something went wrong", error: err.message });
//   }
// };

// // NGO LOGOUT 🔥
// export const ngoLogout = async (req, res) => {
//   try {
//     const { username } = req.body;

//     const ngo = await NGO.findOneAndDelete({ username });

//     if (!ngo) {
//       return res.status(404).json({ message: "NGO not found" });
//     }

//     res.status(200).json({ message: "NGO logged out successfully" });
//   } catch (err) {
//     console.error("NGO Logout Error:", err.message);
//     res.status(500).json({ message: "Something went wrong", error: err.message });
//   }
// };
import NGO from "../models/ngo.model.js";
import bcrypt from "bcrypt";

// Register a new NGO
export const registerNGO = async (req, res) => {
  const { username, email, password, address, city, pincode, certificate, mobileNumber } = req.body;
  try {
    const existingNGO = await NGO.findOne({ email });
    if (existingNGO) {
      return res.status(400).json({ message: "NGO already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newNGO = new NGO({
      username,
      email,
      password: hashedPassword,
      address,
      city,
      pincode,
      certificate,
      mobileNumber,
      isApproved: false
    });

    await newNGO.save();
    res.status(201).json({ message: "NGO registered successfully" });
  } catch (error) {
    console.error("Registration Error:", error);
    res.status(500).json({ message: "Something went wrong", error: error.message });
  }
};

// Sign in NGO
export const signinNGO = async (req, res) => {
  const { email, password } = req.body;
  try {
    const ngo = await NGO.findOne({ email });
    if (!ngo) {
      return res.status(404).json({ message: "NGO not found" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, ngo.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    res.status(200).json({ message: "NGO signed in successfully", ngo });
  } catch (error) {
    console.error("Signin Error:", error);
    res.status(500).json({ message: "Something went wrong", error: error.message });
  }
};

// Logout NGO
export const logoutNGO = (req, res) => {
  try {
    res.status(200).json({ message: "NGO logged out successfully" });
  } catch (error) {
    console.error("Logout Error:", error);
    res.status(500).json({ message: "Something went wrong", error: error.message });
  }
};
