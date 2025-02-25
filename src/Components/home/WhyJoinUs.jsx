import React from 'react';
import { FaLaptopCode, FaUsers, FaHandshake, FaSmile } from 'react-icons/fa';

const WhyJoinUs = () => {
  const benefits = [
    {
      icon: <FaLaptopCode size={40} />,
      title: "Hands-on Learning",
      description: "Get practical experience with real-world projects and industry-standard technologies"
    },
    {
      icon: <FaUsers size={40} />,
      title: "Network Growth",
      description: "Connect with like-minded developers, mentors, and industry professionals"
    },
    {
      icon: <FaHandshake size={40} />,
      title: "Career Opportunities",
      description: "Access exclusive job opportunities and internships through our industry partners"
    },
    {
      icon: <FaSmile size={40} />,
      title: "Endless Enjoyment",
      description: "Experience unforgettable moments and create lasting memories with fellow enthusiasts"
    }
  ];

  return (
    <div className="w-full bg-black py-20 md:py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-primaryFont text-white text-center mb-16">
          Why Join Us?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-[#1A1A1A] p-6 rounded-2xl hover:bg-[#252525] transition-colors duration-300 group"
            >
              <div className="text-colPink mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-white text-xl md:text-2xl font-primaryFont mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-400 text-sm md:text-base">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyJoinUs; 