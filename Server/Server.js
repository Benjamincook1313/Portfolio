require('dotenv').config()
const express = require('express')
const app = express()
const { PORT } = process.env
const CTRL = require('./Controller')

app.use(express.json())

app.post('/api/sendEmail', CTRL.sendEmail)

app.listen(PORT, () => console.log(`Listening on ${PORT}`))