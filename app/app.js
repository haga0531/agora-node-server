const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const PORT = 8080

const router = require('./api')
app.use('/api', router)

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})
