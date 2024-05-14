const mongoose = require("mongoose");

const streamSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
});

const Streams = mongoose.model("stream", streamSchema);

module.exports = { Streams };
