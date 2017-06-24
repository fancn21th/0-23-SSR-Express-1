const express = require('express')
const app = express()
const engines = require('consolidate')

app.engine('hbs', engines.handlebars)
app.set('views', './views')
app.set('view engine', 'hbs')

const users = [
  {
    gender: 'female',
    name: {
      title: 'miss',
      first: 'mary',
      last: 'jones',
    },
    email: 'mary.jones56@example.com',
    username: 'crazypeacock512',
  },
  {
    gender: 'male',
    name: {
      title: 'mr',
      first: 'alan',
      last: 'walters',
    },
    email: 'alan.walters29@example.com',
    username: 'crazytiger134',
  },
]

app.get('/', (req, res) => {
  res.render('index', { users })
})

app.get('/foo', (req, res) => {
  res.send('Hello, Foo!!!!')
})

const server = app.listen(
  3000, () => {
    console.log(`Server is running at http://localhost: ${server.address().port}`)
  })

