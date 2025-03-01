const express = require('express');
const router = express.Router();
const { allocatePoints, redeemReward, getUserRewards } = require('../controllers/rewardsController');

// Endpoint to allocate points to a user
router.post('/allocate', allocatePoints);

// Endpoint to redeem a reward
router.post('/redeem', redeemReward);

// Endpoint to get user rewards and points
router.get('/:userId', getUserRewards);

module.exports = router;