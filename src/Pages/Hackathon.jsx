import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaTrophy, FaClock, FaCode, FaLightbulb, FaGlobe } from 'react-icons/fa';

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
      title: "Alternative Credit Evaluation Tool for Farmers.",
      description: "Traditional credit evaluation methods often fail to capture the unique challenges and opportunities faced by farmers. Factors such as land quality, weather patterns, and crop yield potential play a significant role in determining a farmer's creditworthiness. Your challenge is to design an Alternative Credit Evaluation Tool that incorporates non-traditional data sources such as live GIS (Geographic Information System) data, upcoming weather forecasts, soil health metrics, etc., to create a more inclusive credit scoring system for farming loans. The tool should help financial institutions assess risk more accurately and enable farmers to access fair and tailored credit options.",
      KeyFeatures: [
        "Data Integration: Utilize live GIS data, weather forecasts, soil health metrics, and past crop yields.",
        "Financial Risk Assessment: Provide a transparent and explainable scoring system that financial institutions can trust.",
        "User Accessibility: Ensure the tool is usable by banks, NBFCs, and farmers with minimal technical knowledge.",
        "Scalability & Adaptability: Design the tool to work across different regions with diverse farming conditions.",
        "Regulatory Compliance: Ensure adherence to financial regulations and data privacy laws."
      ],
      domain: "Fintech",
    },
    {
      id: 2,
      title: " Investigating the Effectiveness of Deep Reinforcement Learning (DRL) in Algorithmic Trading",
      description: "Algorithmic trading has evolved significantly with the advent of advanced machine learning techniques, particularly Deep Reinforcement Learning (DRL). Participants are tasked with exploring the effectiveness of DRL in developing adaptive trading strategies using the provided research paper on DRL-based algorithmic trading. While participants are not expected to design the core algorithm, they must: Implement the given DRL-based trading model. Test the model using real or simulated market data. Analyze its performance and derive insights into its effectiveness, adaptability, and limitations in dynamic market conditions. The goal is to demonstrate if and how DRL can be leveraged to create robust and adaptive trading strategies.",
      KeyFeatures: [
        "Model Implementation: Implement the provided DRL-based algorithmic trading model.",
        "Data Handling: Use real or simulated market data to test the model.",
        "Performance Evaluation: Analyze effectiveness using key financial metrics (e.g., Sharpe ratio, ROI).",
        "Market Adaptability: Assessment must be done on how the model performs under changing market conditions.",
        "Visualization & Insights: Present findings through graphs, performance comparisons, and risk analysis.",
        "Legal Considerations: Ensure the trading model follows ethical financial practices and regulations."
      ],
      domain: "Fintech & Machine Learning",
    },
    {
      id: 3,
      title: "Streamlining the Adoption of India's CBDC (e-Rupee)",
      description: "The Indian government has introduced the Central Bank Digital Currency (CBDC), known as the e-rupee, as a legal tender. However, its adoption remains limited compared to traditional payment methods like UPI wallets and cash. Your challenge is to design a solution that streamlines the adoption and usage of this blockchain-based tender in everyday transactions. Consider addressing barriers such as user awareness, accessibility, integration with existing payment systems, and incentives for both consumers and merchants. Your solution should aim to make e-Rupee a more viable and widely accepted form of currency in India's digital economy.",
      KeyFeatures: [
        "Seamless Integration: The provided solution must be compatible with existing digital payment solutions like UPI and bank accounts.",
        "Merchant & Consumer Incentives: Propose reward systems to encourage adoption by businesses and individuals.",
        "Security & Privacy: Address concerns related to digital currency security and user trust.",
        "Government & Regulatory Compliance: Ensure alignment with RBI guidelines for CBDC adoption.",
      ],
      domain: "Fintech",
    },
    {
      id: 4,
      title: "AI-Powered Retail Investor Dashboard",
      description: "Retail investors often struggle with making informed financial decisions due to the complexity of financial markets, tax regulations, and the lack of personalized guidance. Your challenge is to design and develop an AI-powered dashboard tailored for retail investors. The dashboard should integrate APIs from financial data providers, tax compliance tools, and market regulation databases to provide a comprehensive and user-friendly interface. Key features of the dashboard should include:",
      KeyFeatures: [
        "AI-Based Personalized Financial Advisory: Utilize Large Language Models (LLMs) to offer personalized investment advice based on the user's financial goals, risk appetite, and market conditions. Integrate tax calculation and compliance tools to help users understand their tax obligations related to investments.  The dashboard must be compliant with a database of market laws and regulations.",
        "User Authentication and Personalization: Implement a secure user login system to allow personalized experiences. Users should be able to save their preferences and track their investment portfolios.",
        "Interactive Visualizations: Develop interactive charts and graphs to help users visualize their investment performance, market trends, and potential future scenarios. ",
        "Integration with Financial APIs: Seamlessly integrate with financial APIs to fetch real-time market data, stock prices, and other relevant financial information.",
      ],
      domain: "Fintech & AI",
    }
  ];

  const evaluationCriteria = [
    {
      id: 1,
      title: "Innovation and Creativity",
      description: "How unique, original, and creative is the solution? Does it address the problem in a novel way or introduce a fresh perspective?"
    },
    {
      id: 2,
      title: "Technical Sophistication and Execution",
      description: "How well was the solution built? Does it function as intended? Is the code clean, efficient, and scalable? List the frameworks, libraries, and technologies you plan to use. Reasoning: Explain your choices (e.g., scalability, ease of use, cost-effectiveness). Technical sophistication will be a key evaluation criterion. Judges recognize that partially solving a complex challenge can demonstrate comparable skill and effort to fully completing a simpler one."
    },
    {
      id: 3,
      title: "Impact and Relevance",
      description: "How impactful is the solution in addressing the problem statement? Does it have real-world applicability and potential to create meaningful change?"
    },
    {
      id: 4,
      title: "Presentation and Report Statement",
      description: "How effectively does the team communicate their idea? Is the presentation clear, engaging, and compelling? Does it tell a story that connects the problem, solution, and impact?"
    }
  ];

  const detailedTimeline = [
    // Day 1 - March 26, 2025
    { time: "09:00 AM", event: "Entry & Registration", duration: "1 hour" },
    { time: "10:00 AM", event: "Opening Ceremony", duration: "1 hour" },
    { time: "11:00 AM", event: "Ideation time & Coding Begins 🚀", duration: "2 hours" },
    { time: "01:00 PM", event: "Lunch time", duration: "1.5 hours" },
    { time: "01:00 PM", event: "Lunch Break", duration: "1 hour" },
    { time: "02:30 PM", event: "Code Rush", duration: "Continuous" },
    { time: "06:00 PM", event: "Guest Session & Musical Night", duration: "1.5 hours" },
    { time: "07:30 PM", event: "Dinner time", duration: "1.5 hours" },
    { time: "09:00 PM", event: "Code Rush", duration: "Continuous" },
    // Day 2 - March 27, 2025
    { time: "01:30 AM", event: "PPT Submission", duration: "30 mins" },
    { time: "02:00 AM", event: "High tea", duration: "30 mins" },
    { time: "02:30 AM", event: "Night Coding Begins 🌙", duration: "Continuous" },
    { time: "08:00 AM", event: "Breakfast", duration: "1.5 hours" },
    { time: "09:30 AM", event: "Code Rush", duration: "Continuous" },
    { time: "01:00 PM", event: "PPT submission", duration: "30 mins" },
    { time: "01:30 PM", event: "Lunch", duration: "1 hours" },
    { time: "02:30 PM", event: "Final Changes ⏰", duration: "1.5 hours" },
    { time: "04:00 PM", event: "Project Presentation", duration: "2 hours" },
    { time: "09:00 PM", event: "Winners Announcement & Closing Ceremony 🏆", duration: "1 hour" }
  ];

  const prizes = [
    { 
      position: "1st Prize", 
      amount: "₹40,000", 
      extras: [
        "Certificate & Goodies",
      ]
    },
    { 
      position: "2nd Prize", 
      amount: "₹25,000", 
      extras: [
        "Certificate & Goodies",
      ]
    },
    { 
      position: "3rd Prize", 
      amount: "₹15,000", 
      extras: [
        "Certificate & Goodies",
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 font-secFont1">
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
                      <span className="inline-block px-3 py-1 bg-[#C90F5B]/20 text-[#C90F5B] rounded-full text-sm md:text-base mb-4">
                        {problem.domain}
                      </span>
                      <p className="text-sm sm:text-lg text-gray-400">{problem.description}</p>
                    </div>
                  </div>

                  {
                    problem.id === 2 && (
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                      <div className="flex items-center gap-2">
                        <FaGlobe className="text-[#C90F5B]" size={18} />
                        <h4 className="text-base sm:text-lg font-primaryFont text-[#C90F5B]">
                          Research Paper:
                        </h4>
                      </div>
                      <a
                        href="https://drive.google.com/file/d/1Gs-FjVfHaPndnS7X9tlq-QqshtqVu_If/view?usp=drivesdk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm sm:text-lg text-gray-400 hover:text-[#C90F5B] transition-colors duration-300 underline underline-offset-4"
                      >
                        Research Paper Link
                      </a>
                    </div>

                    )
                  }

                  {/* KeyFeatures Section */}
                  <div className="border-t border-[#C90F5B]/20 pt-4">
                    <h4 className="text-base sm:text-lg font-primaryFont text-[#C90F5B] mb-3">Key Features:</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm sm:text-lg">
                      {problem.KeyFeatures.map((req, idx) => (
                        <li key={idx}>{req}</li>
                      ))}
                    </ul>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Evaluation Criteria Section */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl font-primaryFont text-center mb-8 sm:mb-12 bg-gradient-to-r from-white to-[#C90F5B] bg-clip-text text-transparent">
            EVALUATION CRITERIA
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 font-secFont1">
            {evaluationCriteria.map((criterion, index) => (
              <motion.div
                key={criterion.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-[#1A1A1A]/80 backdrop-blur-sm p-6 rounded-xl border border-[#C90F5B]/30 hover:border-[#C90F5B] transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <FaCode className="text-[#C90F5B] text-2xl sm:text-3xl flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl sm:text-2xl font-primaryFont mb-3">{criterion.title}</h3>
                    <p className="text-sm sm:text-base text-gray-400">{criterion.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a 
              href="/Problem Statements.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-[#C90F5B] text-white rounded-full font-secFont1 hover:bg-[#A00D4A] transition-all duration-300"
            >
              View Detailed Problem Statements
            </a>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-12 sm:mb-16 md:mb-20" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-primaryFont text-center mb-8 sm:mb-12 bg-gradient-to-r from-white to-[#C90F5B] bg-clip-text text-transparent">
            36-HOUR JOURNEY
          </h2>
          <div className="relative overflow-hidden font-secFont1">
            <div className="absolute left-4 sm:left-1/2 h-full w-1 bg-gradient-to-b from-[#C90F5B] via-pink-500 to-[#C90F5B]"></div>
            {detailedTimeline.map((item, index) => (
              <div
                key={index}
                className="relative flex items-center gap-4 sm:gap-6 mb-6 sm:mb-8"
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              >
                <div className="absolute left-4 sm:left-1/2 translate-x-[-4px] md:translate-x-[-6px] w-3 sm:w-4 h-3 sm:h-4 bg-[#C90F5B] rounded-full transform">
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
                <div className={`hidden sm:block flex-1 ${index % 2 === 0 ? 'text-right pr-12' : 'pl-2'}`}>
                  {index % 2 === 0 && (
                    <div className="bg-[#1A1A1A]/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-[#C90F5B]/30 hover:border-[#C90F5B] transition-all duration-300">
                      <h3 className="text-lg sm:text-lg font-primaryFont text-[#C90F5B]">{item.time}</h3>
                      <p className="text-white font-semibold text-base sm:text-2xl mb-1">{item.event}</p>
                      <span className="text-gray-400 text-xs sm:text-lg">{item.duration}</span>
                    </div>
                  )}
                </div>
                <div className={`hidden sm:block flex-1 ${index % 2 === 1 ? 'pl-12' : ''}`}>
                  {index % 2 === 1 && (
                    <div className="bg-[#1A1A1A]/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-[#C90F5B]/30 hover:border-[#C90F5B] transition-all duration-300">
                      <h3 className="text-lg sm:text-lg font-primaryFont text-[#C90F5B]">{item.time}</h3>
                      <p className="text-white font-semibold text-base sm:text-2xl mb-1">{item.event}</p>
                      <span className="text-gray-400 text-xs sm:text-lg">{item.duration}</span>
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
                <p className="text-2xl sm:text-3xl font-bold text-[#C90F5B] mb-4 font-primaryFont">{prize.amount}</p>
                <ul className="text-gray-400 space-y-2">
                  {prize.extras.map((extra, idx) => (
                    <li key={idx} className="text-xs sm:text-lg font-secFont1">{extra}</li>
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