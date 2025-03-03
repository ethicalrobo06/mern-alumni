const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const AuthRouter = require('./Routes/AuthRouter')
const ProductRouter = require('./Routes/ProductRouter')

require('dotenv').config()
require('./Models/db')

const PORT = process.env.PORT || 8080
app.use(bodyParser.json())

const allowedOrigins = [
  'https://alumni-cyan.vercel.app',
  'http://localhost:5173',
]

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
)

// Test endpoint
app.get('/ping', (req, res) => {
  res.send('PONG')
})

// Routers
app.use('/auth', AuthRouter)
app.use('/products', ProductRouter)

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
})
