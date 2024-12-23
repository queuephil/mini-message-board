const { Router } = require('express')
const indexRouter = Router()

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date().toLocaleString(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date().toLocaleString(),
  },
]

indexRouter.get('/', (req, res) => {
  res.render('index', { messages })
})
indexRouter.get('/new', (req, res) => {
  res.render('form')
})
indexRouter.post('/new', (req, res) => {
  messages.push({
    text: req.body.messageText,
    user: req.body.messageUser,
    added: new Date().toLocaleString(),
  })
  res.redirect('/')
})
indexRouter.get('/message/:id', (req, res) => {
  const message = messages[req.params.id]
  res.render('message', { message })
})

module.exports = indexRouter
