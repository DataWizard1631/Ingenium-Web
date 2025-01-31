import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-colPink/20 rounded-full"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <motion.h1 
          className="font-['ModernAge'] text-[150px] sm:text-[200px] md:text-[300px] text-white leading-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          404
        </motion.h1>
        
        <motion.p 
          className="font-['ModernAge'] text-2xl sm:text-3xl md:text-4xl text-white mt-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Page Not Found
        </motion.p>
        
        <motion.p 
          className="font-['ModernAge'] text-gray-400 mb-8 max-w-md mx-auto text-sm sm:text-base md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          The page you're looking for doesn't exist or has been moved.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link 
            to="/" 
            className="inline-block bg-colPink text-white px-8 py-3 rounded-full font-['ModernAge'] text-lg sm:text-xl 
              hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div 
        className="absolute bottom-10 left-0 right-0 text-center text-gray-500 text-sm sm:text-base"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        INGENIUM'25
      </motion.div>
    </div>
  );
};

export default NotFound; 