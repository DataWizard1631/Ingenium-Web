import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import eventRoutes from './routes/event.routes.js'
import aboutusRoutes from './routes/aboutus.routes.js'
import dotenv from 'dotenv'
dotenv.config()


const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())
app.use((req, res, next) => {
    res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
    res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
    next();
  });
  
// Routes
app.use('/api/v1/events', eventRoutes)
app.use('/api/v1/aboutus', aboutusRoutes)

export { app }  