const config = require('config')
const express = require('express')
const httpProxy = require('http-proxy')
const morgan = require('morgan')

const auth = require('./middleware/auth')

const proxy = httpProxy.createServer()
const app = express()

app.use(morgan('tiny'))

const goto = function (req, res, next) {
  proxy.web(req, res, {
    target: req.target
  }, (err) => {
    res.status(500).end(req.target + ' error.')
  })
}

const userRouter = express.Router()
userRouter.get('/:id/info', goto)

const postRouter = express.Router()
postRouter.post('/:id/info', auth, goto)

const messageRouter = express.Router()
messageRouter.put('/:id/info', auth, goto)

const configTarget = function (target) {
  return function (req, res, next) {
    req.target = target
    next()
  }
}

app.use('/user', configTarget(config.get('/user')), userRouter)
app.use('/post', configTarget(config.get('/post')), postRouter)
app.use('/message', configTarget(config.get('/message')), messageRouter)

module.exports = app
