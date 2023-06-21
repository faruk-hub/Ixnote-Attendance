const bcrypt = require("bcryptjs");
const Student = require("../models/studentModel");
const generateToken = require("../Utils/generateToken");

exports.registerStudent = async (req, res) => {
  // check for duplicate students using email
  try {

    const { firstName, lastName, email, password, studentStatus } = req.body;

    if ( !firstName || !lastName || !email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "all fields are required" });
    }

    const studentExists = await Student.findOne({ email });
    console.log(studentExists);
    if (studentExists)
      return res
        .status(400)
        .json({ success: false, message: "An account with this email exist" });
    //inserting data into the database
    const student = await Student.create({
      firstName,
      lastName,
      email,
      password,
      studentStatus,
    });

    if (student) {
      res.status(201).json({
        success: true,
        data: student,
      });
    } else {
      return res
        .status(401)
        .json({ success: false, data: "Resgistration Failed" });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

exports.loginStudent = async (req, res) => {
  const { email, password } = req.body;
  // const password = req.body.password;

  try {
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "email or password required" });
    }

    let studentExists = await Student.findOne({ email });

    if (studentExists) {
      const authStudent = await bcrypt.compare(
        password,
        studentExists.password
      );
      studentExists = await Student.findOne({ email }).select("-password");

      // const studentData = studentExists
      if (authStudent) {
        // User login successful, generate token and return data
        return res.status(200).json({
          success: true,
          data: studentExists,
          token: generateToken(studentExists._id),
        });
      } else {
        // Invalid username or password
        return res
          .status(401)
          .json({ success: false, message: "Invalid username or password" });
      }
    } else {
      // User not found
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

exports.verifyPresentAtd = async (req, res) => {
  console.log("You are present");
};
