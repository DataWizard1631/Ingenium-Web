import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaWallet } from 'react-icons/fa';

const PitcherProfile = () => {
  const { id } = useParams();
  const [pitcher, setPitcher] = useState(null);
  const [investAmount, setInvestAmount] = useState('');
  const [equity, setEquity] = useState('');
  const [error, setError] = useState('');
  const investor = JSON.parse(localStorage.getItem('investor'));

  useEffect(() => {
    fetchPitcherDetails();
  }, [id]);

  const fetchPitcherDetails = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/pitchers/${id}`, {
        headers: {
          'Authorization': `Bearer ${JSON.parse(localStorage.getItem('investor')).token}`
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
      const response = await fetch('http://localhost:3000/api/investments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          pitcherId: id,
          amount: Number(investAmount),
          equity: Number(equity)
        })
      });

      const data = await response.json();
      if (response.ok) {
        fetchPitcherDetails();
        setInvestAmount('');
        setEquity('');
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('Failed to make investment');
    }
  };

  if (!pitcher) return null;

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
          <h1 className="text-3xl font-primaryFont text-white mb-4">
            {pitcher.ideaTitle}
          </h1>
          <p className="text-gray-400 font-secFont1 mb-6">
            {pitcher.ideaDescription}
          </p>
          <div className="flex justify-between items-center">
            <div>
              <span className="text-gray-400">Asking Amount:</span>
              <span className="text-colPink ml-2">₹{pitcher.askingAmount.toLocaleString()}</span>
            </div>
            <div>
              <span className="text-gray-400">Equity Offered:</span>
              <span className="text-colPink ml-2">{pitcher.equity}%</span>
            </div>
          </div>
        </motion.div>

        {/* Investment Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleInvest}
          className="bg-[#131313] p-6 rounded-2xl space-y-4"
        >
          <h2 className="text-2xl font-primaryFont text-white mb-4">
            Make an Investment
          </h2>
          <div>
            <input
              type="number"
              placeholder="Investment Amount"
              value={investAmount}
              onChange={(e) => setInvestAmount(e.target.value)}
              className="w-full bg-white/10 font-secFont1 border border-colPink/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-colPink"
              required
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Equity Percentage"
              value={equity}
              onChange={(e) => setEquity(e.target.value)}
              className="w-full bg-white/10 font-secFont1 border border-colPink/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-colPink"
              required
            />
          </div>
          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}
          <button
            type="submit"
            className="w-full bg-colPink font-secFont1 text-white rounded-lg py-3 hover:bg-pink-700 transition-colors duration-300"
          >
            Invest Now
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default PitcherProfile; 