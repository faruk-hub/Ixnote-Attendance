const Attendance = require('../models/atendanceModel')
const Student = require("../models/studentModel");


exports.markAttendance = async(req, res) => {
    // const stdDetails = {
    //     student_id: 1,
    //     status:     req.body.status,
    //     date:       req.body.date,
    //     browser:    req.body.browser,
    //     ip_address: req.socket.remoteAddress 
    // }
     // sql.query(`INSERT INTO attendance(student_id, status, browser, ip_address) VALUES(${details.student_id}, '${details.status}', '${details.browser}', '${details.ip_address}')`, (err, data) => {
    //             if(err){
    //                 res.json(err)
    //             }
    //             else{
    //                 res.json(data)
    //             }
    //         })
    let{ student } = req.params
    const { browser, location, ip_address, deviceID, atdStatus} = req.body
    console.log("marked")
    res.json({message : "marked"})
    try{
        const markedAtd = await Attendance.create({student, browser, location,atdStatus, ip_address, deviceID})
        if (markedAtd) {
            res.status(201).json({
              success: true,
              data: markedAtd,
            });
          } else {
            return res
              .status(401)
              .json({ success: false, data: "Failed to marl attendance" });
          }
        res.status(200).json(workout)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}