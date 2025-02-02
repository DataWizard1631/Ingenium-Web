import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import eventRoutes from './routes/event.routes.js'
import aboutusRoutes from './routes/aboutus.routes.js'
import adminRoutes from './routes/admin.routes.js'
import dotenv from 'dotenv'

dotenv.config()


const app = express()

app.use(cors({
  origin: "http://localhost:5173", // Replace with your frontend's URL
  credentials: true,              // Allow cookies to be sent
}));

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
app.use('/api/v1/admin', adminRoutes)

export { app }  