import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaUser, FaLightbulb } from 'react-icons/fa';

const ShaftLogin = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [userType, setUserType] = useState('investor');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://ingenium-web2.onrender.com/api/auth/${userType}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem(userType, JSON.stringify(data[userType]));
        navigate(userType === 'investor' ? '/shaft-tank/dashboard' : '/shaft-tank/pitcher-dashboard');
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('Failed to connect to server');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <h1 className="text-4xl md:text-6xl font-primaryFont text-white text-center mb-8">
          Shaft Tank
        </h1>
        
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setUserType('investor')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-secFont1 ${
              userType === 'investor' 
                ? 'bg-colPink text-white' 
                : 'bg-[#131313] text-gray-400'
            }`}
          >
            <FaUser /> Investor
          </button>
          <button
            onClick={() => setUserType('pitcher')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-secFont1 ${
              userType === 'pitcher' 
                ? 'bg-colPink text-white' 
                : 'bg-[#131313] text-gray-400'
            }`}
          >
            <FaLightbulb /> Pitcher
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6 bg-[#131313] p-8 rounded-2xl">
          <div>
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full bg-white/10 font-secFont1 border border-colPink/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-colPink"
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
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
            Login as {userType === 'investor' ? 'Investor' : 'Pitcher'}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default ShaftLogin; 