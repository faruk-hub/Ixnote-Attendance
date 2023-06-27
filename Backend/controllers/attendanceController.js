const Attendance = require('../models/atendanceModel')
const Student = require("../models/studentModel");
const macAddress = require('macaddress')
const helper = require('../helper/helper')
require('dotenv').config()

exports.markAttendance = async(req, res) => {
    
    const userLat = 9.909458
    const userLon = 8.882012
    const { student } = req.params
    const { ip_address} = req.body
    let atdStatus
    const currentMacAddress = await macAddress.one()
    const distance = helper.distanceToHub( process.env.hubLat, process.env.hubLon, userLat,userLon)
    console.log(distance)
    // const currentMacAddress = await macAddress.one()

    try{
        const storedData = await Student.findById( student ).select("mac_address")

        if((currentMacAddress === storedData.mac_address) && (distance < 100)){
          console.log("present")
          const markedAtd = await Attendance.create({student, atdStatus, ip_address})
          if (markedAtd) {
            atdStatus = true
            res.status(201).json({
              success: true,
              data: markedAtd,
              data: "Present"
            });
          } else {
            return res
              .status(401)
              .json({ success: false, data: "Failed to mark attendance" });
          }
        }
        // if macaddress and radius is not true
        else{
          console.log("false")
          const markedAtd = await Attendance.create({student, atdStatus, ip_address})

          if (markedAtd) {
            atdStatus = false
            res.status(201).json({
              success: true,
              data: markedAtd,
              data: "Absent"
            });
          } else {
            return res
              .status(401)
              .json({ success: false, data: "Failed to mark attendance" });
          }
        }
    }catch(error){
        res.status(400).json({error: error.message})
    }
}