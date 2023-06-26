const express = require('express')
const router = express.Router()
const atdController = require('../controllers/attendanceController')

router.route('/attendance')
      .get(atdController.markAttendance)




module.exports = router    
