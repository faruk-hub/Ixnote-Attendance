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
    // console.log(distance)
    // const currentMacAddress = await macAddress.one()

    try{
        const storedData = await Student.findById( student ).select("mac_address")
        console.log( String(currentMacAddress))
        console.log( String(storedData.mac_address))
        if( String(currentMacAddress) == String(storedData.mac_address)){
          console.log("true")
        }else{
          console.log("false")
        }
          const markedAtd = await Attendance.create({student, atdStatus, ip_address})

        if (markedAtd) {
            // console.log(storedData.mac_address)
            res.status(201).json({
              success: true,
              data: markedAtd,
            });
          } else {
            return res
              .status(401)
              .json({ success: false, data: "Failed to mark attendance" });
          }
        // }
        
    }catch(error){
        res.status(400).json({error: error.message})
    }
}