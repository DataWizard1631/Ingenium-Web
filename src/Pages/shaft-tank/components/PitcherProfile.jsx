import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaWallet, FaCheckCircle } from 'react-icons/fa';

const PitcherProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pitcher, setPitcher] = useState(null);
  const [investAmount, setInvestAmount] = useState('');
  const [equity, setEquity] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const investor = JSON.parse(localStorage.getItem('investor'));

  useEffect(() => {
    fetchPitcherDetails();
  }, [id]);

  const fetchPitcherDetails = async () => {
    try {
      const response = await fetch(`https://ingenium-web2.onrender.com/api/pitchers/${id}`, {
        headers: {
          'Authorization': `Bearer ${investor.token}`
        }
      });
      if (!response.ok) {
        throw new Error('Pitcher not found');
      }
      const data = await response.json();
      setPitcher(data);
    } catch (error) {
      console.error('Error fetching pitcher details:', error);
      setError(error.message);
    }
  };

  const handleInvest = async (e) => {
    e.preventDefault();
    try {
      if (Number(investAmount) > investor.walletBalance) {
        setError('Insufficient funds');
        return;
      }

      const response = await fetch('https://ingenium-web2.onrender.com/api/investments', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${investor.token}`
        },
        body: JSON.stringify({
          pitcherId: id,
          amount: Number(investAmount),
          equity: Number(equity),
          investorId: investor.id
        })
      });

      const data = await response.json();
      if (response.ok) {
        // Update local storage with new wallet balance
        const updatedInvestor = {
          ...investor,
          walletBalance: investor.walletBalance - Number(investAmount)
        };
        localStorage.setItem('investor', JSON.stringify(updatedInvestor));
        
        fetchPitcherDetails();
        setInvestAmount('');
        setEquity('');
        setError('');
        
        // Show success message
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000); // Hide after 3 seconds
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('Failed to make investment');
    }
  };

  if (!pitcher) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link 
            to="/shaft-tank/dashboard"
            className="flex items-center gap-2 text-white hover:text-colPink transition-colors"
          >
            <FaArrowLeft /> Back to Dashboard
          </Link>
          <div className="flex items-center gap-3 bg-[#131313] px-4 py-2 rounded-lg">
            <FaWallet className="text-colPink" />
            <span className="text-white font-secFont1">
              ₹{investor.walletBalance.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Pitcher Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#131313] p-6 rounded-2xl mb-8"
        >
          <h2 className="text-2xl font-primaryFont text-white mb-4">
            {pitcher.ideaTitle}
          </h2>
          <p className="text-gray-400 font-secFont1 mb-6">
            {pitcher.ideaDescription}
          </p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <span className="text-gray-400">Asking Amount:</span>
              <span className="text-colPink ml-2">₹{pitcher.askingAmount.toLocaleString()}</span>
            </div>
            <div>
              <span className="text-gray-400">Equity Offered:</span>
              <span className="text-colPink ml-2">{pitcher.equity}%</span>
            </div>
            <div>
              <span className="text-gray-400">Total Investment:</span>
              <span className="text-colPink ml-2">₹{pitcher.totalInvestment.toLocaleString()}</span>
            </div>
            <div>
              <span className="text-gray-400">Equity Remaining:</span>
              <span className="text-colPink ml-2">
                {Math.max(0, pitcher.equity - pitcher.investments.reduce((sum, inv) => sum + inv.equity, 0))}%
              </span>
            </div>
          </div>

          {/* Investment Form */}
          <form onSubmit={handleInvest} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="number"
                placeholder="Investment Amount"
                value={investAmount}
                onChange={(e) => setInvestAmount(e.target.value)}
                className="bg-white/10 font-secFont1 border border-colPink/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-colPink"
                required
              />
              <input
                type="number"
                placeholder="Equity Percentage"
                value={equity}
                onChange={(e) => setEquity(e.target.value)}
                max={pitcher.equity}
                className="bg-white/10 font-secFont1 border border-colPink/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-colPink"
                required
              />
            </div>
            {success && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center justify-center gap-2 text-green-500 bg-green-500/10 p-3 rounded-lg"
              >
                <FaCheckCircle />
                <span>Investment successful!</span>
              </motion.div>
            )}
            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}
            <button
              type="submit"
              className="w-full bg-colPink font-secFont1 text-white rounded-lg py-3 hover:bg-pink-700 transition-colors duration-300"
            >
              Invest Now
            </button>
          </form>
        </motion.div>

        {/* Previous Investments */}
        <div className="space-y-4">
          <h3 className="text-xl font-primaryFont text-white mb-4">
            Previous Investments
          </h3>
          {pitcher.investments.map((investment, index) => (
            <motion.div
              key={investment._id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#131313] p-4 rounded-xl flex justify-between items-center"
            >
              <div>
                <p className="text-white font-secFont1">
                  {investment.investor?.name}
                </p>
                <p className="text-gray-400 text-sm">
                  {investment.equity}% Equity
                </p>
              </div>
              <div className="text-right">
                <p className="text-colPink">
                  ₹{investment.amount.toLocaleString()}
                </p>
                <p className="text-gray-400 text-sm">
                  {new Date(investment.timestamp).toLocaleDateString()}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PitcherProfile; 