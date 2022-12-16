const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
    maxLength: [25, "Name must be less than 20 characters"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
});

module.exports = mongoose.model("user", userschema);
