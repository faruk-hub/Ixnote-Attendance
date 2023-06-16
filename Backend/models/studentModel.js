const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const studentSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
        type: String,
        required: true,
      },
    email: {
      type: String,
      required: true,
      createIndexes: { unique: true },
    },
    password: {
      type: String,
      required: true,
    },
    studentStatus:{
      type: String,
      required:true,
    },
  },
  {
    timestamps: true,
  }
)


studentSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next()
  }

  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

// userSchema.methods.matchPassword = async function (enteredPassword) {
//     return await bcrypt.compare(enteredPassword, this.password)
//   }
  


  
const Student = mongoose.model('Student', studentSchema)

module.exports = Student
  