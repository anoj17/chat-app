import express from 'express'
import cors from "cors"
import dotenv from "dotenv"
import Connection from "./config/db.js"
import userRoutes from './routes/userRoutes.js'

dotenv.config()

const app = express()

app.use(cors())

app.use(express.json())

app.use('/api/user', userRoutes)

const PORT = 8000

Connection()

app.listen(PORT, () => console.log("App running at port",+PORT))
