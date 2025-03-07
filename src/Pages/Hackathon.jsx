import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaTrophy, FaClock, FaCode, FaLightbulb } from 'react-icons/fa';

const Hackathon = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const problems = [
    {
      id: 1,
      title: "AI-Powered Mental Health Companion",
      description: "Design an AI-driven mental health support system that can:",
      requirements: [
        "Detect early signs of anxiety and depression through text/voice analysis",
        "Provide personalized coping strategies and exercises",
        "Connect users with professional help when needed",
        "Ensure user privacy and data security",
      ],
      techStack: ["Machine Learning", "NLP", "React Native", "Firebase"],
      domain: "Healthcare & AI",
      resources: "Access to mental health APIs and Azure credits"
    },
    {
      id: 2,
      title: "Blockchain-Based Supply Chain Tracker",
      description: "Create a transparent supply chain management system that can:",
      requirements: [
        "Track products from source to consumer using blockchain",
        "Verify authenticity and prevent counterfeiting",
        "Monitor storage conditions (temperature, humidity) using IoT",
        "Generate QR codes for consumer verification",
      ],
      techStack: ["Solidity", "Web3.js", "IoT Sensors", "React"],
      domain: "Blockchain & IoT",
      resources: "Ethereum test network and IoT development kit"
    },
    {
      id: 3,
      title: "AR-Enhanced Learning Platform",
      description: "Develop an augmented reality education platform that:",
      requirements: [
        "Creates interactive 3D models for complex concepts",
        "Supports real-time collaboration between students",
        "Provides progress tracking and analytics",
        "Works on both mobile and web platforms",
      ],
      techStack: ["Unity", "ARCore/ARKit", "WebGL", "Node.js"],
      domain: "Education & AR",
      resources: "Unity Pro License and AR development tools"
    },
    {
      id: 4,
      title: "Smart Energy Grid Optimizer",
      description: "Build an AI-powered system that can:",
      requirements: [
        "Predict and optimize energy consumption patterns",
        "Integrate renewable energy sources efficiently",
        "Provide real-time usage analytics and suggestions",
        "Handle peak load balancing automatically",
      ],
      techStack: ["Python", "TensorFlow", "IoT", "GraphQL"],
      domain: "Sustainability & AI",
      resources: "Energy consumption datasets and cloud credits"
    }
  ];

  const detailedTimeline = [
    // Day 1 - March 26, 2025
    { time: "08:00 AM", event: "Registration & Breakfast", duration: "1 hour" },
    { time: "09:00 AM", event: "Opening Ceremony", duration: "30 mins" },
    { time: "09:30 AM", event: "Team Formation & Problem Statement Selection", duration: "1 hour" },
    { time: "10:30 AM", event: "Coding Begins 🚀", duration: "Continuous" },
    { time: "11:30 AM", event: "Mentor Round 1", duration: "1.5 hours" },
    { time: "01:00 PM", event: "Lunch Break", duration: "1 hour" },
    { time: "02:30 PM", event: "Technical Workshop: 'Building Scalable Solutions'", duration: "1 hour" },
    { time: "04:00 PM", event: "Mentor Round 2", duration: "1.5 hours" },
    { time: "05:30 PM", event: "Evening Snacks", duration: "30 mins" },
    { time: "08:00 PM", event: "Dinner", duration: "1 hour" },
    { time: "10:00 PM", event: "Fun Activity: 'Code & Coffee Quiz'", duration: "1 hour" },
    { time: "11:00 PM", event: "Night Coding Begins 🌙", duration: "Continuous" },

    // Day 2 - March 27, 2025
    { time: "02:00 AM", event: "Midnight Snacks", duration: "30 mins" },
    { time: "06:00 AM", event: "Breakfast", duration: "1 hour" },
    { time: "09:00 AM", event: "Mentor Round 3", duration: "1.5 hours" },
    { time: "11:00 AM", event: "Progress Presentation", duration: "2 hours" },
    { time: "01:00 PM", event: "Lunch Break", duration: "1 hour" },
    { time: "03:00 PM", event: "Final Mentor Round", duration: "2 hours" },
    { time: "05:00 PM", event: "Project Submission Deadline ⏰", duration: "30 mins" },
    { time: "05:30 PM", event: "Final Presentations", duration: "2.5 hours" },
    { time: "08:00 PM", event: "Judging Round", duration: "1 hour" },
    { time: "09:00 PM", event: "Winners Announcement & Closing Ceremony 🏆", duration: "1 hour" }
  ];

  const prizes = [
    { 
      position: "1st Prize", 
      amount: "₹50,000", 
      extras: [
        "6-month paid internship opportunity",
        "Cloud credits worth ₹1,00,000",
        "1-year GitHub Pro subscription",
        "Direct entry to startup incubation program"
      ]
    },
    { 
      position: "2nd Prize", 
      amount: "₹30,000", 
      extras: [
        "3-month paid internship opportunity",
        "Cloud credits worth ₹50,000",
        "6-month GitHub Pro subscription",
        "Free mentorship sessions"
      ]
    },
    { 
      position: "3rd Prize", 
      amount: "₹20,000", 
      extras: [
        "Cloud credits worth ₹25,000",
        "3-month GitHub Pro subscription",
        "Premium development tools subscription"
      ]
    }
  ];

  return (
    <div className="bg-[#121212] bg-[url('/bg-texture.jpg')] bg-repeat bg-auto min-h-screen text-white py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      {/* Tech Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(201,15,91,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(201,15,91,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 mt-10 md:mt-0 sm:mb-16 md:mb-20" data-aos="fade-down">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-primaryFont bg-gradient-to-r from-white via-pink-200 to-[#C90F5B] bg-clip-text text-transparent mb-4 sm:mb-6">
            HACKATHON 2025
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-secFont1 text-gray-300 max-w-3xl mx-auto px-4">
            36 Hours of Innovation, Code, and Creation
          </p>
        </div>

        {/* Problem Statements Grid */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl font-primaryFont text-center mb-8 sm:mb-12 bg-gradient-to-r from-white to-[#C90F5B] bg-clip-text text-transparent">
            PROBLEM STATEMENTS
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {problems.map((problem, index) => (
              <motion.div
                key={problem.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-[#1A1A1A]/80 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-xl border border-[#C90F5B]/30 hover:border-[#C90F5B] transition-all duration-300"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <FaLightbulb className="text-[#C90F5B] text-2xl sm:text-3xl flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl sm:text-2xl font-primaryFont mb-2">{problem.title}</h3>
                      <span className="inline-block px-3 py-1 bg-[#C90F5B]/20 text-[#C90F5B] rounded-full text-sm mb-4">
                        {problem.domain}
                      </span>
                      <p className="text-sm sm:text-base text-gray-400">{problem.description}</p>
                    </div>
                  </div>

                  {/* Requirements Section */}
                  <div className="border-t border-[#C90F5B]/20 pt-4">
                    <h4 className="text-base sm:text-lg font-primaryFont text-[#C90F5B] mb-3">Requirements:</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm sm:text-base">
                      {problem.requirements.map((req, idx) => (
                        <li key={idx}>{req}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Section */}
                  <div className="border-t border-[#C90F5B]/20 pt-4">
                    <h4 className="text-base sm:text-lg font-primaryFont text-[#C90F5B] mb-3">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {problem.techStack.map((tech, idx) => (
                        <span key={idx} className="px-2 sm:px-3 py-1 bg-[#1A1A1A] border border-[#C90F5B]/30 rounded-full text-xs sm:text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Resources Section */}
                  <div className="border-t border-[#C90F5B]/20 pt-4">
                    <h4 className="text-base sm:text-lg font-primaryFont text-[#C90F5B] mb-3">Resources Provided:</h4>
                    <p className="text-sm sm:text-base text-gray-300">{problem.resources}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-12 sm:mb-16 md:mb-20" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-primaryFont text-center mb-8 sm:mb-12 bg-gradient-to-r from-white to-[#C90F5B] bg-clip-text text-transparent">
            36-HOUR JOURNEY
          </h2>
          <div className="relative overflow-hidden">
            <div className="absolute left-4 sm:left-1/2 h-full w-1 bg-gradient-to-b from-[#C90F5B] via-pink-500 to-[#C90F5B]"></div>
            {detailedTimeline.map((item, index) => (
              <div
                key={index}
                className="relative flex items-center gap-4 sm:gap-6 mb-6 sm:mb-8"
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              >
                <div className="absolute left-4 sm:left-1/2 translate-x-[-6px] w-3 sm:w-4 h-3 sm:h-4 bg-[#C90F5B] rounded-full transform -translate-x-1/2">
                  <div className="absolute inset-0 bg-[#C90F5B] rounded-full animate-ping opacity-75"></div>
                </div>
                
                {/* Mobile Timeline */}
                <div className="sm:hidden w-[calc(100%-2rem)] pl-8">
                  <div className="bg-[#1A1A1A]/80 backdrop-blur-sm p-4 rounded-xl border border-[#C90F5B]/30">
                    <h3 className="text-base font-primaryFont text-[#C90F5B]">{item.time}</h3>
                    <p className="text-white font-semibold text-sm mb-1">{item.event}</p>
                    <span className="text-gray-400 text-xs">{item.duration}</span>
                  </div>
                </div>

                {/* Desktop Timeline */}
                <div className={`hidden sm:block flex-1 ${index % 2 === 0 ? 'text-right pr-12' : 'pl-12'}`}>
                  {index % 2 === 0 && (
                    <div className="bg-[#1A1A1A]/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-[#C90F5B]/30 hover:border-[#C90F5B] transition-all duration-300">
                      <h3 className="text-lg sm:text-xl font-primaryFont text-[#C90F5B]">{item.time}</h3>
                      <p className="text-white font-semibold text-base sm:text-lg mb-1">{item.event}</p>
                      <span className="text-gray-400 text-xs sm:text-sm">{item.duration}</span>
                    </div>
                  )}
                </div>
                <div className={`hidden sm:block flex-1 ${index % 2 === 1 ? 'pl-12' : ''}`}>
                  {index % 2 === 1 && (
                    <div className="bg-[#1A1A1A]/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-[#C90F5B]/30 hover:border-[#C90F5B] transition-all duration-300">
                      <h3 className="text-lg sm:text-xl font-primaryFont text-[#C90F5B]">{item.time}</h3>
                      <p className="text-white font-semibold text-base sm:text-lg mb-1">{item.event}</p>
                      <span className="text-gray-400 text-xs sm:text-sm">{item.duration}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Prizes Section */}
        <div data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-primaryFont text-center mb-8 sm:mb-12 bg-gradient-to-r from-white to-[#C90F5B] bg-clip-text text-transparent">
            PRIZES
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {prizes.map((prize, index) => (
              <div
                key={index}
                className="bg-[#1A1A1A]/80 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-[#C90F5B]/30 text-center transform hover:-translate-y-2 transition-all duration-300"
              >
                <FaTrophy className="text-[#C90F5B] text-3xl sm:text-4xl mx-auto mb-4" />
                <h3 className="text-xl sm:text-2xl font-primaryFont mb-4">{prize.position}</h3>
                <p className="text-2xl sm:text-3xl font-bold text-[#C90F5B] mb-4">{prize.amount}</p>
                <ul className="text-gray-400 space-y-2">
                  {prize.extras.map((extra, idx) => (
                    <li key={idx} className="text-xs sm:text-sm">{extra}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hackathon; 