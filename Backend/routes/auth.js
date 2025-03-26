import express from 'express';
import Investor from '../models/Investor.js';
import Pitcher from '../models/Pitcher.js';
import Investment from '../models/Investment.js';

const router = express.Router();

// Investor Login
router.post('/investor/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const investor = await Investor.findOne({ email });
    
    if (!investor) {
      return res.status(401).json({ message: 'User not found' });
    }

    if (investor.password !== password) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Create empty investment array if not exists
    if (!investor.investments || investor.investments.length === 0) {
      const investment = new Investment({
        investor: investor._id,
        investments: [],
        equity: 0,
        amount: 0
      });
      await investment.save();
      investor.investments = [investment._id];
      await investor.save();
    }

    res.json({
      investor: { 
        id: investor._id, 
        name: investor.name, 
        walletBalance: investor.walletBalance,
        type: 'investor',
        token: investor._id // Using investor._id as token
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Pitcher Login
router.post('/pitcher/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const pitcher = await Pitcher.findOne({ email });
    
    if (!pitcher) {
      return res.status(401).json({ message: 'User not found' });
    }

    if (pitcher.password !== password) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Create empty investment array if not exists
    if (!pitcher.investments || pitcher.investments.length === 0) {
      const investment = new Investment({
        pitcher: pitcher._id,
        investments: [],
        equity: 0,
        amount: 0
      });
      await investment.save();
      pitcher.investments = [investment._id];
      await pitcher.save();
    }

    res.json({
      pitcher: { 
        id: pitcher._id, 
        name: pitcher.name,
        ideaTitle: pitcher.ideaTitle,
        type: 'pitcher',
        token: pitcher._id // Using pitcher._id as token
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

export default router; 