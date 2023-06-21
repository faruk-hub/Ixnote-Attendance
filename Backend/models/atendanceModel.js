const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const hashedPassword = require("../helper/helper");

const attendanceSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    studentStatus: {
      type: String,
      required: true,
    },
    browser: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model('Attendance', attendanceSchema);
