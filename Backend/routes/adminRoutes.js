const express = require('express')
const router = express.Router()
const adminController = require('../controllers/adminController')


router.route('/admin')
      .get(adminController.getAllStudents)
    
      
// router.route('/attendance')

// router.route('/:id')
//     .get()
//     .patch()
//     .delete()
    
    
module.exports = router    