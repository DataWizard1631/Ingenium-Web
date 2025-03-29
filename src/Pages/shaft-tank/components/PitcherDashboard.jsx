import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaChartLine, FaUser, FaMoneyBillWave, FaPercentage, FaSignOutAlt } from 'react-icons/fa';

const PitcherDashboard = () => {
  const navigate = useNavigate();
  const [investments, setInvestments] = useState([]);
  const [pitcher, setPitcher] = useState({
    id: '',
    name: '',
    ideaTitle: '',
    ideaDescription: '',
    askingAmount: 0,
    equity: 0,
    ...JSON.parse(localStorage.getItem('pitcher') || '{}')
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchInvestments();
  }, []);

  const fetchInvestments = async () => {
    try {
      // First fetch pitcher details
      const pitcherResponse = await fetch(`http://https://ingenium-web2.onrender.com/api/pitchers/${pitcher.id}`);
      const pitcherData = await pitcherResponse.json();
      
      if (!pitcherResponse.ok) {
        throw new Error('Failed to fetch pitcher details');
      }

      // Then fetch investments
      const investmentsResponse = await fetch(`http://https://ingenium-web2.onrender.com/api/investments/pitcher/${pitcher.id}`);
      const investmentsData = await investmentsResponse.json();
      
      if (!investmentsResponse.ok) {
        throw new Error('Failed to fetch investments');
      }

      // Update state with both sets of data
      setPitcher(pitcherData);
      setInvestments(investmentsData);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error.message);
    }
  };

  const totalInvestment = investments.reduce((sum, inv) => sum + (inv.amount || 0), 0);
  const totalEquity = investments.reduce((sum, inv) => sum + (inv.equity || 0), 0);
  const remainingEquity = (pitcher.equity || 0) - totalEquity;

  const handleLogout = () => {
    localStorage.removeItem('pitcher');
    navigate('/shaft-tank');
  };

  return (
    <div className="min-h-screen bg-black p-4 md:p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl md:text-4xl font-primaryFont text-white">
          Welcome, {pitcher.name || 'Pitcher'}
        </h1>
        <div className="flex items-center gap-4">
          <Link
            to="/shaft-tank"
            className="flex items-center gap-2 bg-[#131313] px-4 py-2 rounded-lg text-white font-secFont1 hover:bg-[#252525] transition-colors"
          >
            <FaChartLine /> Leaderboard
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-600 px-4 py-2 rounded-lg text-white font-secFont1 hover:bg-red-700 transition-colors"
          >
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </div>

      {/* Product Details */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#131313] p-6 rounded-2xl mb-8"
      >
        <h2 className="text-2xl font-primaryFont text-white mb-6">
          Your Product
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-gray-400 mb-2">Product Name</p>
            <p className="text-colPink text-xl mb-4">{pitcher.ideaTitle}</p>
            
            <p className="text-gray-400 mb-2">Description</p>
            <p className="text-white">{pitcher.ideaDescription}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-black/30 p-4 rounded-xl">
              <p className="text-gray-400">Asking Amount</p>
              <p className="text-colPink text-xl">₹{pitcher.askingAmount.toLocaleString()}</p>
            </div>
            <div className="bg-black/30 p-4 rounded-xl">
              <p className="text-gray-400">Amount Raised</p>
              <p className="text-colPink text-xl">₹{totalInvestment.toLocaleString()}</p>
            </div>
            <div className="bg-black/30 p-4 rounded-xl">
              <p className="text-gray-400">Total Equity</p>
              <p className="text-colPink text-xl">{pitcher.equity}%</p>
            </div>
            <div className="bg-black/30 p-4 rounded-xl">
              <p className="text-gray-400">Equity Remaining</p>
              <p className="text-colPink text-xl">{remainingEquity}%</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Progress Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-[#131313] p-6 rounded-2xl mb-8"
      >
        <div className="mb-2 flex justify-between items-center">
          <span className="text-gray-400">Fundraising Progress</span>
          <span className="text-colPink">
            {pitcher.askingAmount ? ((totalInvestment / pitcher.askingAmount) * 100).toFixed(1) : '0'}%
          </span>
        </div>
        <div className="w-full bg-black/30 rounded-full h-4">
          <div 
            className="bg-colPink h-full rounded-full transition-all duration-500"
            style={{ width: `${pitcher.askingAmount ? (totalInvestment / pitcher.askingAmount) * 100 : 0}%` }}
          />
        </div>
      </motion.div>

      {/* Investments List */}
      <div className="space-y-4">
        <h2 className="text-2xl font-primaryFont text-white mb-4">
          Investments Received ({investments.length})
        </h2>
        {investments.length === 0 ? (
          <div className="text-gray-400 text-center py-8">No investments received yet</div>
        ) : (
          investments.map((investment, index) => (
            <motion.div
              key={investment._id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#131313] p-6 rounded-2xl"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-primaryFont text-white">
                    {investment.investor?.name}
                  </h3>
                  <p className="text-gray-400 font-secFont1">
                    {investment.equity}% Equity
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-colPink text-xl">
                    ₹{investment.amount.toLocaleString()}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {new Date(investment.timestamp).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};

export default PitcherDashboard;