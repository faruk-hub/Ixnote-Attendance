const express = require('express')
const router = express.Router()
const adminController = require('../controllers/adminController')


// router.route('/students')
//       .get(adminController.getAllStudents)

router.route('student/:id')
      .get(adminController.getSingleStudent)
//     .patch()
//     .delete()
    
      
// router.route('/attendance')


    
    
module.exports = router    