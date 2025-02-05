import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import eventRoutes from './routes/event.routes.js';
import aboutusRoutes from './routes/aboutus.routes.js';
import adminRoutes from './routes/admin.routes.js';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const app = express();

// Use CORS with dynamic origin
app.use(cors({
  origin: process.env.CORS_ORIGIN || "http://localhost:5173", 
  credentials: true,
}));

// Middleware
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// Security headers for cross-origin isolation
app.use((req, res, next) => {
  res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
  res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
  next();
});

// Routes
app.use('/api/v1/events', eventRoutes);
app.use('/api/v1/aboutus', aboutusRoutes);
app.use('/api/v1/admin', adminRoutes);

export { app };
