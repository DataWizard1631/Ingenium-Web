import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ShaftLeaderboard = () => {
  const [pitchers, setPitchers] = useState([]);

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  const fetchLeaderboard = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/pitchers/leaderboard');
      const data = await response.json();
      setPitchers(data);
    } catch (error) {
      console.error('Error fetching leaderboard:', error);
    }
  };

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
          <h1 className="text-3xl md:text-4xl font-primaryFont text-white text-center">
            Leaderboard
          </h1>
        </div>

        {/* Leaderboard List */}
        <div className="space-y-4">
          {pitchers.map((pitcher, index) => (
            <motion.div
              key={pitcher._id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#131313] p-6 rounded-2xl flex items-center gap-4"
            >
              {/* Position Badge */}
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                index === 0 ? 'bg-yellow-500' :
                index === 1 ? 'bg-gray-400' :
                index === 2 ? 'bg-amber-700' :
                'bg-gray-700'
              }`}>
                {index < 3 ? <FaTrophy /> : index + 1}
              </div>

              {/* Pitcher Info */}
              <div className="flex-grow">
                <h3 className="text-xl font-primaryFont text-white">
                  {pitcher.ideaTitle}
                </h3>
                <p className="text-gray-400 font-secFont1">
                  by {pitcher.name}
                </p>
              </div>

              {/* Investment Amount */}
              <div className="text-right">
                <div className="text-colPink font-secFont1 text-xl">
                  ₹{pitcher.totalInvestment.toLocaleString()}
                </div>
                <div className="text-gray-400 text-sm">
                  Total Investment
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShaftLeaderboard; 