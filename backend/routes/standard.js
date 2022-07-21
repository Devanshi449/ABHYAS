import { Router } from 'express'
import Class from '../models/class.js'

const router = Router()

router.get('/api/standard/:id', async (req, res) => {
  // return the asked standard with populated subjects and unit
  try {
    const t = await Class.findById(req.params.id).populate({
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

const standardRoute = router
export default standardRoute
