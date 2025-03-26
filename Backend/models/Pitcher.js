import mongoose from 'mongoose';

const pitcherSchema = new mongoose.Schema({
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
  ideaTitle: {
    type: String,
    required: true
  },
  ideaDescription: {
    type: String,
    required: true
  },
  askingAmount: {
    type: Number,
    required: true
  },
  equity: {
    type: Number,
    required: true
  },
  totalInvestment: {
    type: Number,
    default: 0
  },
  investments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Investment'
  }]
}, {
  timestamps: true
});

export default mongoose.model('Pitcher', pitcherSchema); 