import { Router } from 'express'

const router = Router()

router.get('/api', (req, res) => {
  res.send('api')
})

const contributeRoute = router
export default contributeRoute
