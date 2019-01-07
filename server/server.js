const express = require('express')

const postsRoutes = require('./routes/posts')

const port = 4000

const app = express()

app.use('/', postsRoutes)

app.listen(port, () => {
  console.log(`App is listening on port: ${port} ;)`)
})
