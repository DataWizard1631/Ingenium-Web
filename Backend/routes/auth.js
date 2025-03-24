import express from 'express';
import Investor from '../models/Investor.js';

const router = express.Router();

// Investor Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const investor = await Investor.findOne({ email });
    
    if (!investor) {
      return res.status(401).json({ message: 'wrong email' });
    }

    if (investor.password !== password) {
      return res.status(401).json({ message: 'wrong password' });
    }


    res.json({investor: { id: investor._id, name: investor.name, walletBalance: investor.walletBalance } });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router; 