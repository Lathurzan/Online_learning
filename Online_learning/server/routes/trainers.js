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




// @route   GET /api/trainers/:id
// @desc    Get a trainer by ID
router.get('/:id', async (req, res) => {
  try {
    // Find trainer by ID
    const trainer = await Trainer.findById(req.params.id);

    // If trainer is not found, send a 404 response
    if (!trainer) {
      return res.status(404).json({ message: 'Trainer not found' });
    }

    // Respond with the trainer details
    res.json(trainer);
  } catch (err) {
    console.error('❌ Error fetching trainer details:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
