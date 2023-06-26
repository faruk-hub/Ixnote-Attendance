const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
// const hashedPassword = require("../helper/helper");

const attendanceSchema = mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true
     },
    browser: {
      type: String,
    },
    atdStatus: {
      type: String,
      required: true
    },
    location:{
      type: String,
    },
    deviceID:{
      type: String,
    },
    ip_address:{
      type: String
    }
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model('Attendance', attendanceSchema);
