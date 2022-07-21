import mongoose from 'mongoose'

const approverSchema = new mongoose.Schema({
  firstName: {
    required: true,
    type: String,
  },
  secondName: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
    lowercase: true,
  },
  password: {
    required: true,
    type: String,
  },
  // Todo
  // Approver stats
  // Array of id of questions approved by approver
})

approverSchema.methods.verifyPassword = function (providedPassword) {
  // Security would be added later
  return this.password === providedPassword
}

const Approver = mongoose.model('Approver', approverSchema)

export default Approver
