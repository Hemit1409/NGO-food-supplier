import Donation from '../models/foodDonation.model.js';

// @desc    Create a new donation
// @route   POST /api/donor/add-donation
// @access  Public
export const createDonation = async (req, res) => {
  try {
    const newDonation = await Donation.create(req.body);
    await newDonation.populate('donor');
    res.status(201).json({
      success: true,
      message: 'Donation created successfully',
      donation: newDonation,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get all donations
// @route   GET /api/donor/get-donations
// @access  Public
export const getDonations = async (req, res) => {
  try {
    const donations = await Donation.find().populate('donor');
    res.status(200).json({
      success: true,
      message: 'Donations fetched successfully',
      donations,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get donation by ID
// @route   GET /api/donor/get-donation/:id
// @access  Public
export const getDonationById = async (req, res) => {
  try {
    const donation = await Donation.findById(req.params.id).populate('donor');
    if (!donation) {
      return res.status(404).json({ success: false, message: 'Donation not found' });
    }
    res.status(200).json({ success: true, donation });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Update donation by ID
// @route   PUT /api/donor/update-donation/:id
// @access  Public
export const updateDonation = async (req, res) => {
  try {
    const updatedDonation = await Donation.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate('donor');
    if (!updatedDonation) {
      return res.status(404).json({ success: false, message: 'Donation not found' });
    }
    res.status(200).json({
      success: true,
      message: 'Donation updated successfully',
      donation: updatedDonation,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Delete donation by ID
// @route   DELETE /api/donor/delete-donation/:id
// @access  Public
export const deleteDonation = async (req, res) => {
  try {
    const donation = await Donation.findById(req.params.id);
    if (!donation) {
      return res.status(404).json({ success: false, message: 'Donation not found' });
    }

    await donation.deleteOne();
    res.status(200).json({ success: true, message: 'Donation deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
