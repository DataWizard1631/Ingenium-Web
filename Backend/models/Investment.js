import mongoose from 'mongoose';

const investmentSchema = new mongoose.Schema({
  investor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Investor',
    required: function() {
      // Only require investor if amount is greater than 0 (actual investment)
      return this.amount > 0;
    }
  },
  pitcher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pitcher',
    // required: true
  },
  amount: {
    type: Number,
    required: true,
    default: 0
  },
  equity: {
    type: Number,
    required: true,
    default: 0
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Investment', investmentSchema); 