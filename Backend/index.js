import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './config/database.js';
import authRoutes from './routes/auth.js';
import pitcherRoutes from './routes/pitchers.js';
import investmentRoutes from './routes/investments.js';

dotenv.config();

const app = express();

// Completely open CORS configuration
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

// Handle OPTIONS requests
app.options('*', (req, res) => {
  res.status(200).send();
});

// Basic middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    message: 'Something broke!',
    error: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;



