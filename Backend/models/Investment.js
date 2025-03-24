import mongoose from 'mongoose';

const investmentSchema = new mongoose.Schema({
  investor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Investor',
    required: true
  },
  pitcher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pitcher',
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  equity: {
    type: Number,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Investment', investmentSchema); 