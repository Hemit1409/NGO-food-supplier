import express from "express";
import {
  createReward,
  getRewards,
  getRewardById,
  redeemReward,
  getUserProgress,
} from "../controllers/rewardController.js";

const router = express.Router();

// @route   POST /api/rewards
// @desc    Create a new reward
// @access  Public
router.post("/", createReward);

// @route   GET /api/rewards
// @desc    Get all rewards
// @access  Public
router.get("/", getRewards);

// @route   GET /api/rewards/:id
// @desc    Get reward by ID
// @access  Public
router.get("/:id", getRewardById);

// @route   POST /api/rewards/redeem
// @desc    Redeem a reward using points
// @access  Public
router.post("/redeem", redeemReward);

// @route   GET /api/rewards/user/:userId
// @desc    Get user's progress (points + achievements)
// @access  Public
router.get("/user/:userId", getUserProgress);

export default router;
