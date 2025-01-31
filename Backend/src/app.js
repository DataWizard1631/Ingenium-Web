import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import eventRoutes from './routes/event.routes.js'

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

// Routes
app.use('/api/v1/events', eventRoutes)

export { app }  