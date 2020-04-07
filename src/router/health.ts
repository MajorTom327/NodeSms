import { Router } from 'express'

const router = Router()

router.get('/ping', (req, res) => {
  res.jsonp({ message: 'pong' })
})

export default router
