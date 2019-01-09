const express = require('express')

const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const postsRoutes = require('./routes/posts')

const port = 4000

const app = express()

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', postsRoutes)

mongoose
  .connect(
    'mongodb://alex:lesenka1988@ds251894.mlab.com:51894/blog',
    { useNewUrlParser: true },
  )
  .then(
    app.listen(port, () => {
      console.log(`App is listening on port: ${port} ;)`)
    }),
  )
  .catch(err => {
    console.log(err)
  })
