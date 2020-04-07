import * as express from 'express'
import SmsRouter from './router/sms'
import HealthRouter from './router/health'

import * as CookieParser from 'cookie-parser'
import * as BodyParser from 'body-parser'
import * as ExpressSession from 'express-session'
import * as Compression from 'compression'
// Create a new express app instance
const app: express.Application = express()

app.use(CookieParser())
app.use(BodyParser.urlencoded({ extended: true }))
app.use(BodyParser.json())
app.use(
  ExpressSession({
    secret: 'Super-Secret-Change-Me',
    resave: false,
    saveUninitialized: false
  })
)
app.use(Compression())

app.use((req, res, next) => {
  console.log(`[${req.method}][${req.url}] from ${req.ips.join(', ')}`)
  next()
})

app.use('/health', HealthRouter)
app.use('/sms', SmsRouter)

app.use((req, res) => {
  res.status(404).jsonp({ code: '404', route: req.url })
})

const port: number = process.env.PORT || 3000

app.listen(port, function () {
  console.log(`App is listening on port ${port}!`)
})
