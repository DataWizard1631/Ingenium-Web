import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Event data structure
const eventData = {
  esports: [
    {
      id: 1,
      title: "VALORANT Tournament",
      image: "/path/to/valorant.jpg",
      description: "Join our exciting 5v5 tactical shooter tournament with prizes worth...",
      meetingType: "online",
      registrationPeriod: "1st Feb - 15th Feb",
    },
    {
      id: 2,
      title: "FIFA Championship",
      image: "/path/to/fifa.jpg",
      description: "Show off your football skills in our FIFA tournament...",
      meetingType: "offline",
      registrationPeriod: "5th Feb - 20th Feb",
    },
  ],
  technical: [
    {
      id: 3,
      title: "Hackathon 2024",
      image: "/path/to/hackathon.jpg",
      description: "48-hour coding challenge to build innovative solutions...",
      meetingType: "hybrid",
      registrationPeriod: "10th Feb - 25th Feb",
    },
  ],
  cultural: [
    {
      id: 4,
      title: "Dance Competition",
      image: "/path/to/dance.jpg",
      description: "Showcase your dance moves in this grand competition...",
      meetingType: "offline",
      registrationPeriod: "15th Feb - 28th Feb",
    },
  ],
  workshops: [
    {
      id: 5,
      title: "AI Workshop",
      image: "/path/to/ai.jpg",
      description: "Learn about artificial intelligence and its applications...",
      meetingType: "online",
      registrationPeriod: "20th Feb - 5th Mar",
    },
  ],
};

const categories = [
  { id: 'esports', label: 'E-Sports' },
  { id: 'technical', label: 'Technical' },
  { id: 'cultural', label: 'Cultural' },
  { id: 'workshops', label: 'Workshops' },
];

function CardComp({ event }) {
  const navigate = useNavigate();

  return (
    <motion.section 
      className="w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-[60vw] flex gap-8 bg-gray-900 rounded-xl overflow-hidden p-6">
        {/* Image */}
        <div className="w-1/3">
          <img 
            src={event.image} 
            alt={event.title}
            className="w-full h-[200px] object-cover rounded-lg"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col flex-1 gap-4">
          <div className="font-primaryFont text-3xl text-white">{event.title}</div>
          <div className="font-secFont1 text-[1.2em] text-gray-300">
            {event.description}
          </div>
          <div className="font-secFont1 text-[1.2em] text-gray-400">
            <p><span className="text-white">Meeting: </span><span>{event.meetingType}</span></p>
            <p><span className="text-white">Registration: </span><span>{event.registrationPeriod}</span></p>
          </div>
          <div className="font-secFont1 text-[1.2em] flex gap-4">
            <button className="px-6 py-2 bg-colPink text-white rounded-full hover:bg-pink-700 transition-colors">
              Register
            </button>
            <button 
              onClick={() => navigate(`/eventdetails`)}
              className="px-6 py-2 border border-white text-white rounded-full hover:bg-white/10 transition-colors"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export const EventLog = () => {
  const [selectedCategory, setSelectedCategory] = useState('esports');

  return (
    <section className="w-full bg-black flex flex-col justify-center gap-[4em] min-h-screen py-20">
      {/* Event Log Header */}
      <div className="flex h-[30vh] items-center flex-col justify-around mt-[8vh]">
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <h2 className="text-9xl font-primaryFont text-white">EVENT LOG</h2>
        </div>
        <div>
          <p className="text-2xl font-secFont1 max-w-[60vw] text-center text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. 
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      </div>

      {/* Card Section */}
      <div className="w-full flex flex-col items-center gap-12">
        {/* Event Selector Bars */}
        <div className="flex items-center justify-between bg-gray-800 w-[50vw] rounded-full px-[20px] py-[10px]">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`text-xl font-secFont1 px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category.id 
                ? 'bg-colPink text-white' 
                : 'text-gray-400 hover:text-white'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Event Cards */}
        <div className="flex flex-col gap-8">
          <AnimatePresence mode="wait">
            {eventData[selectedCategory]?.map((event) => (
              <CardComp key={event.id} event={event} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
