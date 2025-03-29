import express from 'express';
import Investment from '../models/Investment.js';
import Investor from '../models/Investor.js';
import Pitcher from '../models/Pitcher.js';

const router = express.Router();

// Make an investment
router.post('/', async (req, res) => {
  try {
    const { pitcherId, amount, equity, investorId } = req.body;
    
    if (!investorId) {
      return res.status(400).json({ message: 'Investor ID is required' });
    }
    
    // Validate investor and funds
    const investor = await Investor.findById(investorId);
    if (!investor) {
      return res.status(404).json({ message: 'Investor not found' });
    }
    if (investor.walletBalance < amount) {
      return res.status(400).json({ message: 'Insufficient funds' });
    }

    // Validate pitcher
    const pitcher = await Pitcher.findById(pitcherId);
    if (!pitcher) {
      return res.status(404).json({ message: 'Pitcher not found' });
    }

    // Create investment
    const investment = new Investment({
      investor: investorId,
      pitcher: pitcherId,
      amount,
      equity
    });

    await investment.save();

    console.log(investment);

    // Update investor's wallet and investments
    investor.walletBalance -= amount;
    investor.investments.push(investment._id);
    await investor.save();

    // Update pitcher's total investment
    pitcher.totalInvestment += amount;
    pitcher.investments.push(investment._id);
    await pitcher.save();

    // Return populated investment
    const populatedInvestment = await Investment.findById(investment._id)
      .populate('pitcher', 'name ideaTitle')
      .populate('investor', 'name');

    res.status(201).json(populatedInvestment);
  } catch (error) {
    console.error('Investment creation error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get investor's investments
router.get('/investor/:id', async (req, res) => {
  try {
    const investor = await Investor.findById(req.params.id);
    if (!investor) {
      return res.status(404).json({ message: 'Investor not found' });
    }

    const investments = await Investment.find({ investor: req.params.id })
      .populate({
        path: 'pitcher',
        select: 'name ideaTitle'
      })
      .sort({ timestamp: -1 });
    
    console.log('Fetched investments:', investments);
    res.json(investments);
  } catch (error) {
    console.error('Error fetching investments:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get pitcher's investments
router.get('/pitcher/:id', async (req, res) => {
  try {
    const pitcher = await Pitcher.findById(req.params.id);
    if (!pitcher) {
      return res.status(404).json({ message: 'Pitcher not found' });
    }

    const investments = await Investment.find({ pitcher: req.params.id })
      .populate({
        path: 'investor',
        select: 'name'
      })
      .sort({ timestamp: -1 });

    res.json(investments);
  } catch (error) {
    console.error('Error fetching investments:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

export default router; 