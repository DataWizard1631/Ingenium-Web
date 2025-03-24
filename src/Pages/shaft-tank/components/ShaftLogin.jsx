import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const ShaftLogin = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('investor', JSON.stringify(data.investor));
        navigate('/shaft-tank/dashboard');
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
            Login as Investor
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default ShaftLogin; 