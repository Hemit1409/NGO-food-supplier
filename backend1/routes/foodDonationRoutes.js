// import express from 'express';
// import {
//   createDonation,
//   getDonations,
//   getDonationById,
//   updateDonation,
//   deleteDonation,
// } from '../controllers/foodDonationController.js';

// const router = express.Router();

// // @route   POST /api/donations
// // @desc    Create a new donation
// // @access  Public
// router.post('/add-donation', createDonation);

// // @route   GET /api/donations
// // @desc    Get all donations
// // @access  Public
// router.get('/', getDonations);

// // @route   GET /api/donations/:id
// // @desc    Get donation by ID
// // @access  Public
// router.get('/:id', getDonationById);

// // @route   PUT /api/donations/:id
// // @desc    Update donation by ID
// // @access  Public
// router.put('/:id', updateDonation);

// // @route   DELETE /api/donations/:id
// // @desc    Delete donation by ID
// // @access  Public
// router.delete('/:id', deleteDonation);

// export default router;
// File: /app/api/donations/add-donation/route.js (for App Router)
// OR: /pages/api/donations/add-donation.js (for Pages Router)
import express from "express";
import { createDonation } from '../controllers/foodDonationController.js';
const router = express.Router();
// For App Router
export async function POST(request) {
  try {
    const data = await request.json();
    
    // Create donation document
    const donation = new Donation(data);
    await donation.save();
    
    return Response.json({ 
      success: true, 
      message: 'Donation added', 
      donation 
    }, { status: 201 });
  } catch (error) {
    return Response.json({ 
      success: false, 
      message: error.message 
    }, { status: 500 });
  }
}

export default router;
// For Pages Router (if you're using Pages Router instead of App Router)
/*
export default async function handler(req, res) {
  if (req.method === 'POST') {
    return createDonation(req, res);
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
*/