const Student = require('../models/studentModel')



module.exports.getAllStudents = async(req , res) => {

    const students = await Student.find({})
    res.json(students)
    
}

module.exports.getAllStudents = async(req , res) => {

    const students = await Student.find({})
    res.json(students)
    
}

module.exports.getSingleStudent = async(req , res) => {

    const{ id } = req.params

    // if(!mongoose.Types.ObjectId.isValid(id)){
    //     return res.status(404).json({err: "No such workout"})
    // }
    const student = await Student.findById({_id: id})

    if(!student){
        return res.status(404).json({err: 'No such workout'})
    }
    res.status(200).json({success:true, data:student})
    
}

// module.exports.addStudent = async(req , res) => {

//     const students = await Student.find({})
//     res.json(students)
    
// }

// module.exports.updateStudent = async(req , res) => {
//     const students = await Student.find({})
//     res.json(students)
// }

module.exports.banStudent = async(req , res) => {
    const students = await Student.find({})
    res.json(students)
}

module.exports.addExStudent = async(req , res) => {
    const students = await Student.find({})
    res.json(students)
}



