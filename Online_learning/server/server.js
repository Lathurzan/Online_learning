require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({ 
  origin: 'http://localhost:5173', 
  credentials: true 
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/user', require('./routes/userAuth'));
app.use('/api/admin', require('./routes/adminAuth'));
// Mount the stats route
app.use('/api', require('./routes/stats'));

// Routes
app.use('/api/trainers', require('./routes/trainers')); // ✅ Ensure this is correct



// Global Error Handling Middleware
app.use((err, req, res, next) => {
  console.error('❌ Error:', err.stack);
  res.status(500).json({ 
    message: 'Something went wrong', 
    error: err.message 
  });
});

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => 
  console.log(`🚀 Server running on port ${PORT}`)
);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error(`❌ Error: ${err.message}`);
  server.close(() => process.exit(1));
});

module.exports = app;
