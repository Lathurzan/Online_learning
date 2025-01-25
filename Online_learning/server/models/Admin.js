const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  collection: 'admins'  // explicitly name the collection
});

// Use a consistent model name
const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;