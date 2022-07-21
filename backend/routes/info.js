import { Router } from 'express'
import { StatusCodes } from 'http-status-codes'
import Class from '../models/class.js'
import Subject from '../models/subject.js'

const router = Router()

router.get('/api/info/standard', async (req, res) => {
  // return all standards
  try {
    const t = await Class.find().exec()
    res
      .json({
        standards: t.map((x) => {
          return { id: x.id, standard: x.standard }
        }),
      })
      .status(StatusCodes.OK)
      .end()
  } catch (error) {
    console.error(error.message)
    res.status(StatusCodes.INTERNAL_SERVER_ERROR)
  }
})

router.get('/api/info/standard/:num', async (req, res) => {
  // return the asked standard with populated subjects and unit
  console.log(req.params.num)
  try {
    const t = await Class.findOne({
      standard: req.params.num,
    }).populate({
      path: 'subjects',
      populate: {
        path: 'units',
      },
    })
    res.send(t)
  } catch (error) {
    console.error(error.message)
  }
})

//
router.get('/api/info/subjects', async (req, res) => {
  // standard num se subjects
  // req.body num

  const { standard } = req.body

  try {
    const c1 = await Class.findOne({ standard }).exec()
    const subjects = c1.subjects
    const displaySub = []

    for (let idx = 0; idx < subjects.length; idx++) {
      const s1 = await Subject.findById(subjects[idx]).exec()
      displaySub.push({ name: s1.name, id: s1._id })
    }

    res.send({ subjects: displaySub })
  } catch (err) {
    console.log(err)
  }
})

router.get('/api/info/units', (req, res) => {})

const infoRoute = router
export default infoRoute
