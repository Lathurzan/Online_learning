const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

// User Registration
router.post('/register', async (req, res) => {
  try {
    console.log("Received Data:", req.body);
    
    const { 
      firstName, 
      sureName, 
      age, 
      gender, 
      district, 
      email, 
      username, 
      password, 
      rememberMe 
    } = req.body;

    // Validate required fields
    const requiredFields = { firstName, email, password, username };
    const missingFields = Object.entries(requiredFields)
      .filter(([_, value]) => !value)
      .map(([key]) => key);

    if (missingFields.length > 0) {
      return res.status(400).json({ 
        message: `Missing required fields: ${missingFields.join(', ')}` 
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({
      $or: [{ email }, { username }]
    });

    if (existingUser) {
      return res.status(400).json({ 
        message: existingUser.email === email 
          ? "Email already in use" 
          : "Username already taken" 
      });
    }

    // Hash password and create user
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const newUser = new User({
      firstName,
      sureName,
      age,
      gender,
      district,
      email,
      username,
      password: hashedPassword,
      rememberMe
    });

    await newUser.save();
    res.status(201).json({ message: "✅ User registered successfully" });

  } catch (error) {
    console.error("❌ Error:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// User Login
router.post('/login', async (req, res) => {
  try {
    console.log("Login Request Body:", req.body);
    
    const { identifier, password } = req.body;

    // Validate required fields
    if (!identifier || !password) {
      return res.status(400).json({ 
        message: "Both identifier (email/username) and password are required" 
      });
    }

    // Find user by email or username
    const user = await User.findOne({
      $or: [{ email: identifier }, { username: identifier }]
    });

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Verify password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { user: { id: user._id } },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({ 
      message: "✅ Login successful", 
      token,
      user: {
        id: user._id,
        firstName: user.firstName,
        email: user.email,
        username: user.username
      }
    });

  } catch (error) {
    console.error("❌ Error:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;