import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaWallet, FaChartLine, FaUser, FaSignOutAlt } from 'react-icons/fa';

const ShaftDashboard = () => {
  const navigate = useNavigate();
  const [pitchers, setPitchers] = useState([]);
  const investor = JSON.parse(localStorage.getItem('investor'));

  useEffect(() => {
    fetchPitchers();
  }, []);

  const fetchPitchers = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/pitchers');
      const data = await response.json();
      setPitchers(data);
    } catch (error) {
      console.error('Error fetching pitchers:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('investor');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-black p-4 md:p-8">
      {/* Header with Wallet */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl md:text-4xl font-primaryFont text-white">
          Welcome, {investor.name}
        </h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 bg-[#131313] px-4 py-2 rounded-lg">
            <FaWallet className="text-colPink" />
            <span className="text-white font-secFont1">
              ₹{investor.walletBalance.toLocaleString()}
            </span>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-600 px-4 py-2 rounded-lg text-white font-secFont1 hover:bg-red-700 transition-colors"
          >
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex gap-4 mb-8">
        <Link
          to="/shaft-tank/leaderboard"
          className="flex items-center gap-2 bg-colPink px-4 py-2 rounded-lg text-white font-secFont1 hover:bg-pink-700 transition-colors"
        >
          <FaChartLine /> Leaderboard
        </Link>
        <Link
          to={`/shaft-tank/investor/${investor.id}`}
          className="flex items-center gap-2 bg-[#131313] px-4 py-2 rounded-lg text-white font-secFont1 hover:bg-[#252525] transition-colors"
        >
          <FaUser /> My Profile
        </Link>
      </div>

      {/* Pitchers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pitchers.map((pitcher) => (
          <motion.div
            key={pitcher._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#131313] p-6 rounded-2xl hover:bg-[#252525] transition-colors"
          >
            <h3 className="text-xl font-primaryFont text-white mb-2">
              {pitcher.ideaTitle}
            </h3>
            <p className="text-gray-400 text-sm mb-4 font-secFont1">
              {pitcher.ideaDescription.substring(0, 150)}...
            </p>
            <div className="flex justify-between items-center">
              <span className="text-colPink font-secFont1">
                Asking: ₹{pitcher.askingAmount.toLocaleString()}
              </span>
              <Link
                to={`/shaft-tank/pitcher/${pitcher._id}`}
                className="bg-colPink px-4 py-2 rounded-lg text-white font-secFont1 hover:bg-pink-700 transition-colors"
              >
                View Details
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ShaftDashboard; 