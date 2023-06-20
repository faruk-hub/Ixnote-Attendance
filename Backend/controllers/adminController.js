const Student = require('../models/studentModel')


module.exports.getAllStudents = async(req , res) => {

    const students = await Student.find({})
    res.json(students)
    
}

