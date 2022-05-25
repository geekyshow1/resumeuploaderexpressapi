import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import connectDB from './config/connectdb.js'
import candidateRoutes from './routes/candidateRoutes.js'
import upload from './middlewares/upload-middleware.js'

const app = express()
const port = process.env.PORT
const DATABASE_URL = process.env.DATABASE_URL

// CORS Policy
app.use(cors())

// Connect Database
connectDB(DATABASE_URL)

// For Parsing application/json
app.use(express.json())

// Application Level Middleware - For Parsing multipart/form-data
// app.use(upload.fields([{ name: 'pimage', maxCount: 1 }, { name: 'rdoc', maxCount: 1 }]))

// Load Routes
app.use('/api', candidateRoutes)

app.listen(port, () => {
  console.log(`Server listening at http://127.0.0.1:${port}`)
})