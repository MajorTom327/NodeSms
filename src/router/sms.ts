import { Router } from 'express'
import { Sms } from 'types/sms'
import { SendSMS } from '../serial'

const router: Router = Router()

router.post('/send', (req, res) => {
  const sms: Sms = req.body

  SendSMS(sms).then(() => {
    res.jsonp(sms)
  })
})

export default router
