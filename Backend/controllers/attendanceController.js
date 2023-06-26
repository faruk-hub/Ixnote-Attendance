const Attendance = require('../models/atendanceModel')


exports.markAttendance = (req, res) => {
    // let details = {

    //     student_id: 1,
    //     status:     req.body.status,
    //     date:       req.body.date,
    //     browser:    req.body.browser,
    //     ip_address: req.socket.remoteAddress 

    // }
    console.log("marked")
    res.json({message : "marked"})
    // sql.query(`INSERT INTO attendance(student_id, status, browser, ip_address) VALUES(${details.student_id}, '${details.status}', '${details.browser}', '${details.ip_address}')`, (err, data) => {
    //             if(err){
    //                 res.json(err)
    //             }
    //             else{
    //                 res.json(data)
    //             }
    //         })
}