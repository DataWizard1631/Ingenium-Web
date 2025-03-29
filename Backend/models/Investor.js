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
    default: 100000
  },
  investments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Investment'
  }]
}, {
  timestamps: true
});

export default mongoose.model('Investor', investorSchema); 