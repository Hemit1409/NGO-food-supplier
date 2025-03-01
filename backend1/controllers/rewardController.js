const { Reward, Achievement, UserPoints } = require('../models/rewards');

// Allocate points to a user
const allocatePoints = async (req, res) => {
  const { userId, points } = req.body;
  try {
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

// Redeem a reward
const redeemReward = async (req, res) => {
  const { userId, rewardId } = req.body;
  try {
    const reward = await Reward.findById(rewardId);
    if (!reward) {
      return res.status(404).json({ success: false, message: 'Reward not found' });
    }

    const userPoints = await UserPoints.findOne({ userId });
    if (!userPoints || userPoints.points < reward.points) {
      return res.status(400).json({ success: false, message: 'Not enough points to redeem this reward' });
    }

    userPoints.points -= reward.points;
    await userPoints.save();
    res.status(200).json({ success: true, message: 'Reward redeemed successfully', points: userPoints.points });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get user rewards and points
const getUserRewards = async (req, res) => {
  const { userId } = req.params;
  try {
    const userPoints = await UserPoints.findOne({ userId });
    const achievements = await Achievement.find({ userId });
    const rewards = await Reward.find();
    res.status(200).json({ points: userPoints ? userPoints.points : 0, achievements, rewards });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { allocatePoints, redeemReward, getUserRewards };