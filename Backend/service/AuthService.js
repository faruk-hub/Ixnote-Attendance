const Student = require("../models/studentModel");

exports.registerUser = async(data) =>{
    try {
        const newStudent = await Student.create(data);
        return {success: true, data: newStudent};
    } catch (error) {
        console.log(error)
        return {success: false,error}
    }
}