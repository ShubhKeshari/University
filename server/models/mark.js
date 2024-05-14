const mongoose = require('mongoose');

const marksSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
  stream: { type: mongoose.Schema.Types.ObjectId, ref: 'Stream', required: true },
  subject: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject', required: true },
  marks: { type: Number, required: true },
});

const Marks = mongoose.model('mark', marksSchema);

module.exports = { Marks };