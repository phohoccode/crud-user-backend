require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')

const { initApiRoutes } = require('./routers/api')
const configCors = require('./config/cors')

const app = express()
const port = process.env.PORT || 8080

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

configCors(app)

initApiRoutes(app)

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})