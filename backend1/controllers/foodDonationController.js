import Donation from '../models/foodDonation.model.js';

// Create Donation
export const createDonation = async (req, res) => {
  try {
    const donation = new Donation(req.body);
    await donation.save();
    res.status(201).json({ success: true, message: 'Donation added', donation });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get All Donations
export const getDonations = async (req, res) => {
  try {
    const donations = await Donation.find();
    res.status(200).json({ success: true, donations });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get Donation by ID
export const getDonationById = async (req, res) => {
  try {
    const donation = await Donation.findById(req.params.id);
    if (!donation) {
      return res.status(404).json({ success: false, message: 'Donation not found' });
    }
    res.status(200).json({ success: true, donation });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update Donation
export const updateDonation = async (req, res) => {
  try {
    const donation = await Donation.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!donation) {
      return res.status(404).json({ success: false, message: 'Donation not found' });
    }
    res.status(200).json({ success: true, message: 'Donation updated', donation });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete Donation
export const deleteDonation = async (req, res) => {
  try {
    const donation = await Donation.findById(req.params.id);
    if (!donation) {
      return res.status(404).json({ success: false, message: 'Donation not found' });
    }
    await donation.deleteOne();
    res.status(200).json({ success: true, message: 'Donation deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
