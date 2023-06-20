const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const hashedPassword = require("../helper/helper");

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

studentSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  this.password = await hashedPassword(this.password);
});



module.exports = mongoose.model('Student', studentSchema);
