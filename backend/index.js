import express from 'express'
import cors from "cors"
import dotenv from "dotenv"
import Connection from "./config/db.js"
import userRoutes from './routes/userRoutes.js'
import messageRoutes from './routes/messageRoutes.js'
import cookieParser from 'cookie-parser'

dotenv.config()

const app = express()

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))

app.use(express.json({ limit: '50mb'}))
app.use(cookieParser())

app.use('/api/user', userRoutes)
app.use('/api/user', messageRoutes)

const PORT = process.env.PORT || 8000

Connection()

app.get("/", (req,res)=>{
    res.send("Server running")
})

app.listen(PORT, () => console.log("App running at port", +PORT))
