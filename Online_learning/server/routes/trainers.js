const express = require('express');
const router = express.Router();
const Trainer = require('../models/Trainer'); // Import Trainer model

// @route   GET /api/trainers
// @desc    Get all trainers
router.get('/', async (req, res) => {
  try {
    const trainers = await Trainer.find();
    res.json(trainers);
  } catch (err) {
    console.error('❌ Error fetching trainers:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   POST /api/trainers
// @desc    Add a new trainer
router.post('/', async (req, res) => {
  console.log("📩 Received POST request:", req.body);

  try {
    const { name, photo, bio } = req.body;

    if (!name || !photo || !bio) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newTrainer = new Trainer({ name, photo, bio });
    const savedTrainer = await newTrainer.save();

    res.status(201).json(savedTrainer);
  } catch (err) {
    console.error('❌ Error saving trainer:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
