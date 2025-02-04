// routes/stats.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/userStats', async (req, res) => {
  try {
    // Group users by month of registration
    const stats = await User.aggregate([
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m", date: "$createdAt" } },
          count: { $sum: 1 }
        }
      },
      { $sort: { _id: 1 } }
    ]);

    const labels = stats.map(stat => stat._id);
    const counts = stats.map(stat => stat.count);

    res.json({ labels, counts });
  } catch (error) {
    console.error("Error fetching user stats:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
