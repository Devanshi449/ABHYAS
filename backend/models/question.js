import mongoose from 'mongoose'
import Subject from './subject.js'
import Class from './class.js'
import Unit from './unit.js'

const questionSchema = new mongoose.Schema({
  questionStatement: {
    type: String,
    required: true,
  },

  answer: {
    type: Number,
  },

  options: [String],

  //   questionClass: {
  //     type: mongoose.Types.ObjectId,
  //     ref: 'Class',
  //   },

  //   questionSubject: {
  //     type: mongoose.Types.ObjectId,
  //     ref: 'Subject',
  //   },

  //   questionUnit: {
  //     type: mongoose.Types.ObjectId,
  //     ref: 'Unit',
  //   }
})

const Question = mongoose.model('Question', questionSchema)

export default Question
