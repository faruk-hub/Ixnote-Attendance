const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const helper = require("../helper/helper");

const studentSchema = mongoose.Schema(
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
    },
    browser: {
      type: String,
    },
    ip_address: {
      type: String,
    },
    mac_address: {
      type: String,
      reuired: true,
    },
  },
  {
    timestamps: true,
  }
);



studentSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  this.password = await helper.hashedPassword(this.password);
});



module.exports = mongoose.model('Student', studentSchema);
