import mongoose from 'mongoose'
import Question from './question.js'

const unitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  questions: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Question',
    },
  ],
})

const Unit = mongoose.model('Unit', unitSchema)

export default Unit
