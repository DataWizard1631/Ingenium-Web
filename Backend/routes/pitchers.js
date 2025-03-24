import express from 'express';
import Pitcher from '../models/Pitcher.js';

const router = express.Router();

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
    const pitcher = await Pitcher.findById(req.params.id).populate('investments');
    if (!pitcher) {
      return res.status(404).json({ message: 'Pitcher not found' });
    }
    res.json(pitcher);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
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

// Get leaderboard
router.get('/leaderboard', async (req, res) => {
  try {
    const pitchers = await Pitcher.find()
      .sort({ totalInvestment: -1 })
      .limit(10);
    res.json(pitchers);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router; 