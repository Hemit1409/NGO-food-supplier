// import Achievement from "../models/reward.model.js";

// // Create a new achievement
// export const createAchievement = async (req, res) => {
//   try {
//     const { title, description, progress, completed, points } = req.body;

//     if (!title || !description || progress === undefined || completed === undefined || !points) {
//       return res.status(400).json({ success: false, message: "All fields are required" });
//     }

//     const achievement = new Achievement({ title, description, progress, completed, points });
//     await achievement.save();

//     res.status(201).json({ success: true, message: "Achievement created successfully", achievement });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// };

// // Get all achievements
// export const getAchievements = async (req, res) => {
//   try {
//     const achievements = await Achievement.find();
//     res.status(200).json({ success: true, achievements });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// };

// // Get achievement by ID
// export const getAchievementById = async (req, res) => {
//   try {
//     const achievement = await Achievement.findById(req.params.id);
//     if (!achievement) {
//       return res.status(404).json({ success: false, message: "Achievement not found" });
//     }
//     res.status(200).json({ success: true, achievement });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// };

// // Update achievement
// export const updateAchievement = async (req, res) => {
//   try {
//     const achievement = await Achievement.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!achievement) {
//       return res.status(404).json({ success: false, message: "Achievement not found" });
//     }
//     res.status(200).json({ success: true, message: "Achievement updated", achievement });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// };

// // Delete achievement
// export const deleteAchievement = async (req, res) => {
//   try {
//     const achievement = await Achievement.findById(req.params.id);
//     if (!achievement) {
//       return res.status(404).json({ success: false, message: "Achievement not found" });
//     }
//     await achievement.deleteOne();
//     res.status(200).json({ success: true, message: "Achievement deleted" });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// };
