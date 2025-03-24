import express from 'express';
import Investment from '../models/Investment.js';
import Investor from '../models/Investor.js';
import Pitcher from '../models/Pitcher.js';

const router = express.Router();

// Make an investment
router.post('/', async (req, res) => {
  try {
    const { pitcherId, amount, equity } = req.body;
    const investorId = req.investor.id;

    const investor = await Investor.findById(investorId);
    if (investor.walletBalance < amount) {
      return res.status(400).json({ message: 'Insufficient funds' });
    }

    const investment = new Investment({
      investor: investorId,
      pitcher: pitcherId,
      amount,
      equity
    });

    await investment.save();

    // Update investor's wallet and investments
    investor.walletBalance -= amount;
    investor.investments.push(investment._id);
    await investor.save();

    // Update pitcher's total investment
    const pitcher = await Pitcher.findById(pitcherId);
    pitcher.totalInvestment += amount;
    pitcher.investments.push(investment._id);
    await pitcher.save();

    res.status(201).json(investment);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router; 