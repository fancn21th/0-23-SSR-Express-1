const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Hello, World!!!!')
})

app.get('/foo', (req, res) => {
  res.send('Hello, Foo!!!!')
})

const server = app.listen(
  3000, () => {
    console.log(`Server is running at http://localhost: ${server.address().port}`)
  })

