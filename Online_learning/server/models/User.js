const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { // You can adjust fields as per your requirements
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
}, {
  collection: 'users' // Explicitly name the collection
});

// Use a consistent model name
const User = mongoose.model('User', userSchema);

module.exports = User;
