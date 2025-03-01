import Donation from "../models/Donation.js";

export const createDonation = async (req, res) => {
  const { donorId, foodType, quantity, location, pickupTime } = req.body;

  try {
    const donation = new Donation({
      donor: donorId,
      foodType,
      quantity,
      location,
      pickupTime,
      expiryDate
    });

    await donation.save();

    res.status(201).json(donation);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const getDonations = async (req, res) => {
  try {
    const donations = await Donation.find().populate("donor", ["name", "email"]);
    res.json(donations);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const updateDonationStatus = async (req, res) => {
  const { status } = req.body;

  try {
    const donation = await Donation.findByIdAndUpdate(req.params.id, { status }, { new: true });

    res.json(donation);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};