import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaWallet } from 'react-icons/fa';

const InvestorProfile = () => {
  const [investments, setInvestments] = useState([]);
  const investor = JSON.parse(localStorage.getItem('investor'));

  useEffect(() => {
    fetchInvestments();
  }, []);

  const fetchInvestments = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/investments/investor/${investor.id}`);
      const data = await response.json();
      setInvestments(data);
    } catch (error) {
      console.error('Error fetching investments:', error);
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
          <div className="flex items-center gap-3 bg-[#131313] px-4 py-2 rounded-lg">
            <FaWallet className="text-colPink" />
            <span className="text-white font-secFont1">
              ₹{investor.walletBalance.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Profile Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#131313] p-6 rounded-2xl mb-8"
        >
          <h1 className="text-3xl font-primaryFont text-white mb-4">
            {investor.name}'s Portfolio
          </h1>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-black/30 p-4 rounded-xl">
              <div className="text-gray-400">Total Investments</div>
              <div className="text-2xl text-colPink">
                {investments.length}
              </div>
            </div>
            <div className="bg-black/30 p-4 rounded-xl">
              <div className="text-gray-400">Available Balance</div>
              <div className="text-2xl text-colPink">
                ₹{investor.walletBalance.toLocaleString()}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Investments List */}
        <div className="space-y-4">
          <h2 className="text-2xl font-primaryFont text-white mb-4">
            Investment History
          </h2>
          {investments.map((investment, index) => (
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
                    {investment.pitcher.ideaTitle}
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default InvestorProfile; 