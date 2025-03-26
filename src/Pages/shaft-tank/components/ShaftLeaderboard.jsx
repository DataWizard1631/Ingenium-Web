import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaArrowLeft, FaSignInAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ShaftLeaderboard = () => {
  const [pitchers, setPitchers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const investor = JSON.parse(localStorage.getItem('investor'));

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  const fetchLeaderboard = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('http://localhost:3000/api/pitchers/leaderboard', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      });
      
      const data = await response.json();
      console.log('Response status:', response.status);
      console.log('Response data:', data);
      
      if (!response.ok) {
        throw new Error(data.message || data.error || 'Failed to fetch leaderboard');
      }
      
      setPitchers(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Error fetching leaderboard:', error);
      setError(error.message || 'Failed to fetch leaderboard');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center flex-row-reverse justify-between mb-8">
          {investor ? (
            <Link 
              to="/shaft-tank/dashboard"
              className="flex items-center gap-2 text-white hover:text-colPink transition-colors"
            >
              <FaArrowLeft /> Back to Dashboard
            </Link>
          ) : (
            <Link 
              to="/shaft-tank/login"
              className="flex items-center gap-2 bg-colPink px-4 py-2 rounded-lg text-white font-secFont1 hover:bg-pink-700 transition-colors"
            >
              <FaSignInAlt /> Login
            </Link>
          )}
          <h1 className="text-3xl md:text-4xl font-primaryFont text-white text-center">
            Leaderboard
          </h1>
        </div>

        {/* Leaderboard List */}
        <div className="space-y-4">
          {!pitchers || pitchers.length === 0 ? (
            <div className="text-center text-gray-400 py-8">
              No pitchers found
            </div>
          ) : (
            pitchers.map((pitcher, index) => (
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
                  {index < 3 ? (
                    <FaTrophy className={index === 0 ? 'text-white' : 'text-black'} />
                  ) : (
                    <span className="text-white">{index + 1}</span>
                  )}
                </div>

                {/* Pitcher Info */}
                <div className="flex-grow">
                  <Link 
                    to={`/shaft-tank/pitcher/${pitcher._id}`}
                    className="text-xl font-primaryFont text-white hover:text-colPink transition-colors"
                  >
                    {pitcher.ideaTitle}
                  </Link>
                  <p className="text-gray-400 font-secFont1">
                    by {pitcher.name}
                  </p>
                </div>

                {/* Investment Amount */}
                <div className="text-right">
                  <div className="text-colPink font-secFont1 text-xl">
                    ₹{pitcher.totalInvestment?.toLocaleString() || '0'}
                  </div>
                  <div className="text-gray-400 text-sm">
                    Total Investment
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ShaftLeaderboard; 