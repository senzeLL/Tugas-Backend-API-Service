// template
const express = require('express')
const cors = require('cors')
const port = 3200

const sequelize = require('./db.config')
sequelize.sync().then(()=> console.log('database ready'))

// pikir
const userEndpoint = require('./routes/users')

// template
const app = express()
app.use(cors())
app.use(express.json())

// pikir
app.use('/users', userEndpoint)

// template
app.listen(port, () => console.log(`running server on port ${port}`))