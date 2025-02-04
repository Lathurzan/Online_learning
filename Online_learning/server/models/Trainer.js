const mongoose = require('mongoose');

const TrainerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  photo: { type: String, required: true },
  bio: { type: String, required: true }
});

module.exports = mongoose.model('Trainer', TrainerSchema);
