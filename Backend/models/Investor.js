import mongoose from 'mongoose';

const investorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  walletBalance: {
    type: Number,
    required: true,
    default: 1000000 // 10 Lakh initial balance
  },
  investments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Investment'
  }]
});

export default mongoose.model('Investor', investorSchema); 