import { Router } from 'express'
import { StatusCodes } from 'http-status-codes'
import Question from '../models/question.js'
import Unit from '../models/unit.js'
import Subject from '../models/subject.js'
import {
  validateQuestion,
  validateQuestionsQuery,
} from '../utils/requestValidation.js'

const router = Router()

router.get('/api/question', async (req, res) => {
  if ('id' in req.body) {
    res.send().status(StatusCodes.OK).end()
    return
  }
  res.status(StatusCodes.BAD_REQUEST).end()
})

router.post('/api/question', async (req, res) => {
  if (!validateQuestion(req.body)) {
    res.status(StatusCodes.BAD_REQUEST).end()
    return
  }
  try {
    // class subject
    const unit = await Unit.findById(req.body.unitId).exec()
    const newQuestion = new Question({
      questionStatement: req.body.questionStatement,
      answer: req.body.answer,
      options: req.body.options,
    })
    const newQuestionId = (await newQuestion.save()).id
    unit.questions.push(newQuestionId)
    unit.save()
    res.send({ newQuestionId }).status(StatusCodes.CREATED).end()
  } catch (error) {
    console.error(error.message)
    res.status(StatusCodes.BAD_REQUEST).end()
  }
})

router.post('/api/questions/', async (req, res) => {
  if (!validateQuestionsQuery) {
    res.status(StatusCodes.BAD_REQUEST).end()
    return
  } else {
    // unit wise krna hain isko
    const { subject } = req.body

    const s1 = await Subject.findById(subject).exec()
    const units = s1.units
    const qArr = []

    for (let idx = 0; idx < units.length; idx++) {
      const u1 = await Unit.findById(units[idx]).exec()
      const questions = u1.questions

      for (let idx = 0; idx < questions.length; idx++) {
        const q1 = await Question.findById(questions[idx]).exec()
        qArr.push({
          question: q1.questionStatement,
          options: q1.options,
          questionId: q1.id,
          answer: q1.answer,
        })
      }
    }

    res.send({ Questions: qArr })
  }
})

const questionRoute = router
export default questionRoute
