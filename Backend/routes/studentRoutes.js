const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.route('/new/register')
      .post(userController.registerStudent)


router.route('/login')
      .post(userController.loginStudent)
      


// router.route('/:id')
//     .get()
//     .patch()
//     .delete()
    
    
module.exports = router    