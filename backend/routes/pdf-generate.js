import { renderFile } from 'ejs'
import { render } from 'ejs'
import { Router } from 'express'
import { create } from 'html-pdf'
import { createReadStream } from 'node:fs'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import Question from '../models/question.js'
const __dirname = dirname(fileURLToPath(import.meta.url))

const router = Router()

router.post('/api/generate/question-paper', async (req, res) => {
  res.header('Content-Type: application/pdf')

  const { questionArr } = req.body

  const respArray = []

  for (let i = 0; i < questionArr.length; i++) {
    const id = questionArr[i]
    let _ = await Question.findById(id).exec()
    respArray.push(_)
  }

  const x = respArray.map((x) => {
    return {
      questionStatement: x.questionStatement,
      options: x.options,
    }
  })

  const html = await renderFile(
    __dirname + '/../views/question-paper.ejs',
    {
      check: 'name',
      questions: x,
    },
    { async: true }
  )
  create(html, { format: 'A4' }).toStream((err, stream) => {
    stream.pipe(res)
  })
})

router.post('/api/generate/answer-key', async (req, res) => {
  res.header('Content-Type: application/pdf')

  const { questionArr } = req.body

  const respArray = []

  for (let i = 0; i < questionArr.length; i++) {
    const id = questionArr[i]
    let _ = await Question.findById(id).exec()
    respArray.push(_)
  }

  console.log(respArray)

  const x = respArray.map((x) => String.fromCharCode(x.answer + 97))

  console.log(x)

  const html = await renderFile(
    __dirname + '/../views/answer-key.ejs',
    {
      answers: x,
    },
    { async: true }
  )
  create(html, { format: 'A4' }).toStream((err, stream) => {
    stream.pipe(res)
  })
})

const generatePDF = router
export default generatePDF
