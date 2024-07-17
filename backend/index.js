import express from 'express'
import cors from "cors"
import dotenv from "dotenv"
import Connection from "./config/db.js"

dotenv.config()

const app = express()

app.use(cors())

app.use(express.json())

const PORT = 8000

Connection()

app.listen(PORT, () => console.log("App running at port",+PORT))
