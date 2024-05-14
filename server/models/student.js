
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin:{type:Boolean, default:"false"},
  stream: { type: mongoose.Schema.Types.ObjectId, ref: 'Stream', required: true },
});

const Students = mongoose.model('student', studentSchema);
module.exports = { Students };