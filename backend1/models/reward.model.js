const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RewardSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  points: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: ['Badge', 'Feature', 'Certificate'],
  },
});

const AchievementSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  progress: {
    type: Number,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  points: {
    type: Number,
    required: true,
  },
});

const UserPointsSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  points: {
    type: Number,
    required: true,
    default: 0,
  },
});

const Reward = mongoose.model('Rewards', RewardSchema);
const Achievement = mongoose.model('Achievement', AchievementSchema);
const UserPoints = mongoose.model('UserPoints', UserPointsSchema);

module.exports = { Reward, Achievement, UserPoints };