
const bcrypt = require('bcryptjs')
const Student = require('../models/studentModel')
const generateToken = require('../Utils/generateToken')

exports.registerStudent = async(req, res) => {

    const { firstName, lastName, email, password, studentStatus, browser} = req.body
    console.log(browser)
    // check for duplicate students using email
    const studentExists = await Student.findOne({ email })
    if(studentExists){
        res.status(400)
    }
    
    //inserting data into the database
    const student = await Student.create({
        firstName, lastName, email, password, studentStatus, browser
    })


    if(student){
        res.status(201).json({
            success: true,
            data: student
        })
    }else{
        return res.status(401).json({success: false, data: "invalid username or password"});
    }
}

exports.loginStudent = async(req, res) => {

    const { email,password} = req.body
    
 try {
       // check for duplicate students using email
   if(!email || !password){
    return res.status(400).json({success: false, message: "email or password required"})
  }
  const studentExists = await Student.findOne({ email })
  if(studentExists){
      const authStudent= await bcrypt.compare(password, studentExists.password);
      if(authStudent){
          return res.status(200).json({
              success: true,
              data: studentExists,
              token: generateToken(studentExists._id),
            //   successRedirect: "/dashboard",
            //   failureRedirect: "back",
          })
      }else{
       return res.status(401).json({success: false, data: "invalid username or password"});
      }
  }else{
   return res.status(401).json({success: true,message: "user not found"});
  }
 } catch (error) {
    return res.status(500).json({success: false,message: error.message});
 }
}


exports.verifyPresentAtd = async ( req, res) => {
    console.log('You are present')
}
