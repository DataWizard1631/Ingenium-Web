import express from 'express';
import Pitcher from '../models/Pitcher.js';
import cors from 'cors';

const router = express.Router();

router.use(cors());

// Get leaderboard (MUST be before /:id route)
router.get('/leaderboard', async (req, res) => {
  try {
    console.log('Fetching leaderboard...');
    const pitchers = await Pitcher.find()
      .select('name ideaTitle totalInvestment')
      .sort({ totalInvestment: -1 })
      .limit(10);
    
    // console.log('Fetched pitchers:', pitchers);
    
    if (!pitchers || pitchers.length === 0) {
      return res.status(404).json({ message: 'No pitchers found' });
    }
    
    res.json(pitchers);
  } catch (error) {
    console.error('Leaderboard error details:', {
      message: error.message,
      stack: error.stack,
      name: error.name
    });
    res.status(500).json({ 
      message: 'Server error', 
      error: error.message,
      details: error.toString()
    });
  }
});

// Get all pitchers
router.get('/', async (req, res) => {
  try {
    const pitchers = await Pitcher.find().populate('investments');
    res.json(pitchers);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get single pitcher by ID
router.get('/:id', async (req, res) => {
  try {
    const pitcher = await Pitcher.findById(req.params.id)
      .populate({
        path: 'investments',
        populate: {
          path: 'investor',
          select: 'name'
        }
      });
      
    if (!pitcher) {
      return res.status(404).json({ message: 'Pitcher not found' });
    }
    res.json(pitcher);
  } catch (error) {
    console.error('Error fetching pitcher:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Add new pitcher
router.post('/', async (req, res) => {
  try {
    const pitcher = new Pitcher(req.body);
    await pitcher.save();
    res.status(201).json(pitcher);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router; 