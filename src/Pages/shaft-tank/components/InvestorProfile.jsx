import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaWallet } from 'react-icons/fa';

const InvestorProfile = () => {
  const [investments, setInvestments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const investor = JSON.parse(localStorage.getItem('investor'));
  const navigate = useNavigate();

  useEffect(() => {
    fetchInvestments();
  }, []);

  const fetchInvestments = async () => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:3000/api/investments/investor/${investor.id}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch investments');
      }
      
      const data = await response.json();
      console.log('Fetched investments:', data); // Debug log
      setInvestments(data);
    } catch (error) {
      console.error('Error fetching investments:', error);
      setError(error.message);
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
              ₹{investor.walletBalance?.toLocaleString()}
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

        {/* Investment History */}
        <h2 className="text-2xl font-primaryFont text-white mb-6">Investment History</h2>
        <div className="space-y-4">
          {investments.length === 0 ? (
            <div className="text-gray-400 text-center py-8">No investments yet</div>
          ) : (
            investments.map((investment, index) => (
              <motion.div
                key={investment._id || index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#131313] p-6 rounded-2xl cursor-pointer hover:bg-[#1a1a1a] transition-colors"
                onClick={() => investment.pitcher?._id && navigate(`/shaft-tank/pitcher/${investment.pitcher._id}`)}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-primaryFont text-white hover:text-colPink transition-colors">
                      {investment.pitcher?.ideaTitle || 'Unknown Project'}
                    </h3>
                    <p className="text-gray-400 font-secFont1">
                      by {investment.pitcher?.name || 'Unknown Pitcher'}
                    </p>
                    <p className="text-gray-400 mt-1">
                      {investment.equity || 0}% Equity
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-colPink text-xl">
                      ₹{(investment.amount || 0).toLocaleString()}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {investment.timestamp ? new Date(investment.timestamp).toLocaleDateString() : 'No date'}
                    </div>
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

export default InvestorProfile; 