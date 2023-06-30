const express = require('express')
const router = express.Router()
const atdController = require('../controllers/attendanceController')

router.route('/attendance/:student')
      .post(atdController.markAttendance)
      



module.exports = router    
