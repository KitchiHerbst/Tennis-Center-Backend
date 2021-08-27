const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    require: true,
    minlength: 1,
    maxlength: 50,
  },
  lastName: {
    type: String,
    require: true,
    minlength: 1,
    maxlength: 50,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    minlength: 5,
    maxlength: 255,
  },
});
