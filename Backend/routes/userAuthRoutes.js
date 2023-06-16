const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')


router.route('/new/register')
      .get(userController.showSignUp)
      .post(userController.registerUser)


// router.route('/login')
//     .get(userController.showSignIn)
//     .post(userController.userLogin)    

// router.route('/:id')
//     .get()
//     .patch()
//     .delete()
    
    
module.exports = router    