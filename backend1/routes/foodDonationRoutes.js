import express from 'express';
import {
  createDonation,
  getDonations,
  getDonationById,
  updateDonation,
  deleteDonation,
} from '../controllers/foodDonationController.js';

const router = express.Router();

// @route   POST /api/donations
// @desc    Create a new donation
// @access  Public
router.post('/add-donation', createDonation);

// @route   GET /api/donations
// @desc    Get all donations
// @access  Public
router.get('/', getDonations);

// @route   GET /api/donations/:id
// @desc    Get donation by ID
// @access  Public
router.get('/:id', getDonationById);

// @route   PUT /api/donations/:id
// @desc    Update donation by ID
// @access  Public
router.put('/:id', updateDonation);

// @route   DELETE /api/donations/:id
// @desc    Delete donation by ID
// @access  Public
router.delete('/:id', deleteDonation);

export default router;