import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './config/database.js';
import authRoutes from './routes/auth.js';
import pitcherRoutes from './routes/pitchers.js';
import investmentRoutes from './routes/investments.js';

dotenv.config();

const app = express();

// Middleware
app.use(express.json()); // Body parser middleware to parse JSON body
app.use(express.urlencoded({ extended: true })); // Body parser middleware to parse URL-encoded bodies
app.use(cors({
    origin: ['http://localhost:5173', 'https://https://ingenium-web2.onrender.com'],
    credentials: true,
}));

// Database connection
dbConnect();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/pitchers', pitcherRoutes);
app.use('/api/investments', investmentRoutes);

app.get("/" , (req,res) => {
    return res.json({
        success: true,
        message: "Boooooooooom, your server is started"
    })
})

// Server setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



