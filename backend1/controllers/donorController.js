// import user from "../models/donor.model.js";
// import registered from "../models/register.model.js";
// import bcrypt from "bcrypt";

// // export const register = async (req,res)=>{
// //     try {
// //         const {username , email , password , img , country, desc , isSeller} = req.body;
// //         const checkExistingUser = await user.findOne({ $or : [{email},{username}]});

// //         if(checkExistingUser){
// //             return res.status(400).json({message : "User already exists"});
// //         }

// //         const salt = await bcrypt.genSalt(10);
// //         const hashedPassword = await bcrypt.hash(password, salt);
        
// //         const newUser = new user({
// //             username,email,password:hashedPassword,country,desc,isSeller,img,
// //         });
        
// //         await newUser.save();
        
// //         res.status(201).json({ message: "User created successfully", user: newUser });
// //     }
// //     catch(err){
// //         res.status(500).json({message : "something went wrong", error: err.message });
// //     }


// // }

// export const register = async (req, res) => {
//     try {
//         const { username, mobileNumber } = req.body;

//         // Check if username exists in User schema
//         const existingUser = await user.findOne({ username });
//         if (existingUser) {
//             return res.status(400).json({ message: "User already exists" });
//         }

//         // Check if user is already registered
//         const existingRegister = await registered.findOne({ username });
//         if (existingRegister) {
//             return res.status(400).json({ message: "User is already registered" });
//         }

//         // Create new Register entry
//         const newRegister = new registered({
//             username,
//             mobileNumber
//         });

//         await newRegister.save();

//         res.status(201).json({ message: "User registered successfully", register: newRegister });
//     } catch (err) {
//         res.status(500).json({ message: "Something went wrong", error: err.message });
//     }
// };

// export const logout = async (req,res)=>{
//     try {
//         const {id} = req.params;
//         const deletedUser = await user.findByIdAndDelete(id);
//         if(!deletedUser){
//             return res.status(404).json({message : "User not found"});
//         }
//         res.status(200).json({ message: "User deleted successfully" });
//     } catch (err) {
//         res.status(500).json({message : "something went wrong", error: err.message });
//     }
// }

// export const login = async(req,res)=>{
//     try {
        
//     } catch (error) {
//         res.status(500).json({message : "something wwent wrong" , error : err.message})
//     }
// }






// import Donor from "../models/donor.model.js";
// import bcrypt from "bcrypt";

// // DONOR REGISTER
// export const donorRegister = async (req, res) => {
//   try {
//     const { username, email, password, mobileNumber } = req.body;

//     const existingUser = await Donor.findOne({ $or: [{ email }, { username }] });
//     if (existingUser) {
//       return res.status(400).json({ message: "Donor already exists" });
//     }

//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     const newDonor = new Donor({
//       username,
//       email,
//       password: hashedPassword,
//       mobileNumber,
//     });

//     await newDonor.save();
//     res.status(201).json({ message: "Donor registered successfully" });
//   } catch (err) {
//     console.error("Donor Register Error:", err.message);
//     res.status(500).json({ message: "Something went wrong", error: err.message });
//   }
// };

// // DONOR LOGIN
// export const donorLogin = async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     const donor = await Donor.findOne({ username });
//     if (!donor) {
//       return res.status(400).json({ message: "Donor not found" });
//     }

//     const isMatch = await bcrypt.compare(password, donor.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: "Invalid Password" });
//     }

//     res.status(200).json({
//       message: "Donor Login Successful",
//       donor: {
//         username: donor.username,
//         email: donor.email,
//         mobileNumber: donor.mobileNumber,
//       },
//     });
//   } catch (err) {
//     console.error("Donor Login Error:", err.message);
//     res.status(500).json({ message: "Something went wrong", error: err.message });
//   }
// };

// // DONOR LOGOUT 🔥
// export const donorLogout = async (req, res) => {
//   try {
//     const { username } = req.body;

//     const donor = await Donor.findOneAndDelete({ username });
//     if (!donor) {
//       return res.status(404).json({ message: "Donor not found" });
//     }

//     res.status(200).json({ message: "Donor logged out successfully" });
//   } catch (err) {
//     console.error("Donor Logout Error:", err.message);
//     res.status(500).json({ message: "Something went wrong", error: err.message });
//   }
// };


import Donor from "../models/donor.model.js";
import bcrypt from "bcrypt";

// Register a new donor
export const register = async (req, res) => {
  const { username, email, password, phone,address, city, state, pincode } = req.body;
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
    res.status(201).json({ message: "Donor registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error });
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
