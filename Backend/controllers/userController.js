
// const passport = require('passport')
// const localStrategy = require('passport-local')
const bcrypt = require('bcryptjs')
const Student = require('../models/studentModel')



// exports.userLogin = ( req, res, next) => {
//     passport.authenticate('local', {
//         successRedirect: '/rtwa/atd',
//         failureRedirect: '/rtwa/users/login',
//         failureFlash: true
//     })(req, res, next)

// }


// exports.registerUser = async( req, res) => {

//     const { firstName, lastName, email, password,} = req.body
//     let status = req.body.status
//     // console.log(status)
//     let errors = [];
//     //validate fields
//     if (!firstName ||!lastName ||!email ||!password) {
//         errors.push({ msg: 'All fields are required' })
//     }

//     //check passwords match
//     if (password !== cPassword) {
//         errors.push({ msg: 'Passwords do not match' })
//     }

//     //check password length
//     if (password < 7) {
//         errors.push({ msg: 'Password must be at least 6 characters' })
//     }

//     //check duplicate email
//     const userExists = await User.findOne({ email })
//     if(userExists){
//         // res.status(400)
//         // throw new Error('User already exist')
//         errors.push({ msg: 'User already exist' })
//     }

//     if (errors.length > 0) {
//         res.render('register', {
//             errors,
//             firstName,
//             lastName,
//             email,
//             password,
//             cPassword,
//             status
//         })
//     }else{
//         // res.send('pass')
//         console.log('no errors')
//         const user = await User.create({
//             firstName, lastName, email, password, status
//         })
    
//         if(user){
//             // console.log(user)
//             req.flash('success_msg', 'Registered!! proceed to log in')
//             res.redirect('/rtwa/users/login')
//         }else{
//             res.status(400)
//             throw new Error('Registration failed. Please try again')
//         }   
//     }    
// }

exports.registerStudent = async(req, res) => {

    const { firstName, lastName, email, password, studentStatus } = req.body

    // check for duplicate students using email
    const studentExists = await Student.findOne({ email })
    if(studentExists){
        res.status(400)
        throw new Error('you have an existing account')
    }
    
    //inserting data into the database
    const student = await Student.create({
        firstName, lastName, email, password, studentStatus
    })


    if(student){
        res.status(201).json({
            _id : student._id,
            name : student.name,
            email: student.email,
            password: student.password,
            // token: generateToken(user._id)
        })
    }else{
        res.status(400)
        throw new Error('Invalid user data')
    }


    // console.log('Route active')
    // res.json("Register Active")
}


exports.verifyPresentAtd = async ( req, res) => {
    console.log('You are present')
}

exports.showSignUp = ( req, res) => {
    console.log('Route active')
    res.json("Route Active")
}