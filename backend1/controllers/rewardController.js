import mongoose from "mongoose";
import Reward from "../models/reward.model.js";
import User from "../models/donor.model.js"; // Assuming users store points
import Achievement from "../models/reward.model.js"; // Tracking user achievements

// ✅ Allocate Points to User
export const allocatePoints = async (req, res) => {
  try {
    const { userId, points } = req.body;

    let userPoints = await UserPoints.findOne({ userId });
    if (!userPoints) {
      userPoints = new UserPoints({ userId, points });
    } else {
      userPoints.points += points;
    }

    await userPoints.save();
    res.status(200).json({ success: true, points: userPoints.points });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Create a New Reward
export const createReward = async (req, res) => {
  try {
    const reward = new Reward(req.body);
    await reward.save();
    res.status(201).json({ success: true, message: "Reward added", reward });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Get All Rewards
export const getRewards = async (req, res) => {
  try {
    const rewards = await Reward.find();
    res.status(200).json({ success: true, rewards });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Get Reward by ID
export const getRewardById = async (req, res) => {
  try {
    const reward = await Reward.findById(req.params.id);
    if (!reward) {
      return res.status(404).json({ success: false, message: "Reward not found" });
    }
    res.status(200).json({ success: true, reward });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Redeem a Reward (User Uses Points)
export const redeemReward = async (req, res) => {
  try {
    const { userId, rewardId } = req.body;

    const user = await User.findById(userId);
    const reward = await Reward.findById(rewardId);

    if (!user || !reward) {
      return res.status(404).json({ success: false, message: "User or Reward not found" });
    }

    if (user.points < reward.points) {
      return res.status(400).json({ success: false, message: "Not enough points to redeem this reward" });
    }

    // Deduct points and save
    user.points -= reward.points;
    await user.save();

    res.status(200).json({ success: true, message: "Reward redeemed successfully", user, reward });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Get User Rewards & Achievements
export const getUserRewards = async (req, res) => {
  try {
    const { userId } = req.params;

    const userPoints = await UserPoints.findOne({ userId });
    const achievements = await Achievement.find({ userId });
    const rewards = await Reward.find();

    res.status(200).json({
      points: userPoints ? userPoints.points : 0,
      achievements,
      rewards,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Get User Progress (Points & Achievements)
export const getUserProgress = async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await User.findById(userId).select("points");
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const achievements = await Achievement.find({ user: userId });

    res.status(200).json({ success: true, userPoints: user.points, achievements });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
