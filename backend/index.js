const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const AuthRouter = require('./Routes/AuthRouter')
const ProductRouter = require('./Routes/ProductRouter')

require('dotenv').config()
require('./Models/db')

const PORT = process.env.PORT || 8080

// Allow only specific origins for CORS
const allowedOrigins = ['https://alumni-cyan.vercel.app']

app.use(bodyParser.json())

// CORS configuration
app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or Postman)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    },
    credentials: true, // Allow cookies or Authorization headers
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
