import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './config/database.js';
import authRoutes from './routes/auth.js';
import pitcherRoutes from './routes/pitchers.js';
import investmentRoutes from './routes/investments.js';

dotenv.config();

const app = express();

// Most permissive CORS configuration possible
app.use((req, res, next) => {
  // Allow all origins and methods
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Expose-Headers', '*');
  res.header('Cross-Origin-Resource-Policy', 'cross-origin');
  res.header('Cross-Origin-Opener-Policy', 'unsafe-none');
  res.header('Cross-Origin-Embedder-Policy', 'unsafe-none');
  
  // Handle preflight
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  next();
});

// Enable pre-flight for all routes
app.options('*', (req, res) => {
  res.status(200).send();
});

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection
dbConnect();

// Routes with explicit CORS handling
app.use('/api/auth', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Cross-Origin-Resource-Policy', 'cross-origin');
  next();
}, authRoutes);

app.use('/api/pitchers', pitcherRoutes);
app.use('/api/investments', investmentRoutes);

app.get("/" , (req,res) => {
    return res.json({
        success: true,
        message: "Boooooooooom, your server is started"
    })
})

// Error handling
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;



