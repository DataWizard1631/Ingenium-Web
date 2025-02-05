import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Added missing import

const categories = [
  { id: "esports", label: "e-sports" },
  { id: "csevents", label: "CS Events" },
  { id: "mechevnets", label: "Mech Event" },
  { id: "eeeevents", label: "EEE Event" },
  { id: "chemevents", label: "Chem Events" },
  { id: "concert", label: "Concert" },
];

function CardComp({ event }) {
  const navigate = useNavigate();

  return (
    <div className="w-full sm:w-[90vw] md:w-[80vw] lg:w-[45vw] min-h-[300px] sm:h-[40vh] md:h-[45vh] flex flex-col sm:flex-row bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="w-full sm:w-[47%] h-[200px] sm:h-full">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col flex-1 justify-between p-4 sm:p-6 md:p-8">
        <div className="font-primaryFont text-xl sm:text-2xl md:text-3xl mb-4">
          {event.title}
        </div>
        <div className="font-secFont1 text-sm sm:text-base md:text-lg mb-4">
          {event.description}
        </div>
        <div className="font-secFont1 text-sm sm:text-base md:text-lg mb-4">
          <p className="mb-2">
            <span className="font-semibold">Meeting: </span>
            <span>{event.meetingType}</span>
          </p>
          <p>
            <span className="font-semibold">Registration: </span>
            <span>{event.registrationPeriod}</span>
          </p>
        </div>
        <div className="font-secFont1 flex flex-col sm:flex-row gap-3 sm:gap-4 lg:mb-4">
          <button className="px-4 sm:px-6 py-2 bg-colPink text-white rounded-full hover:bg-pink-700 transition-colors text-sm sm:text-base">
            Register
          </button>
          <button
            onClick={() => navigate(`/eventdetails/${event._id || event.id}`)}
            className="px-4 sm:px-6 py-2 border border-colPink text-colPink rounded-full hover:bg-colPink hover:text-white transition-colors text-sm sm:text-base"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export const EventLog = () => {
  const [selectedCategory, setSelectedCategory] = useState("esports");
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          "https://ingenium-web-2.onrender.com/api/v1/events"
        );
        setEvents(response.data.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  const filteredEvents = events.filter(
    (event) => event.category === selectedCategory
  );

  return (
    <section className="w-full flex flex-col justify-center gap-8 sm:gap-12 md:gap-16 min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
      {/* Event Log Header */}
      <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 md:gap-0 mt-16 sm:mt-20 md:mt-20">
        {/* Logo */}
        <div className="w-48 sm:w-56 md:w-64 mb-4 sm:mb-6 md:mb-8">
          <img
            src="/Logos/Ing_White_2025.png"
            alt="Ingenium Logo"
            className="w-full h-auto"
          />
        </div>

        <h1 className="font-primaryFont text-3xl xs:text-4xl sm:text-6xl lg:text-9xl mb-3 xs:mb-4 sm:mb-6 lg:mb-8 tracking-[0.17em] font-semibold text-white">
          EVENT LOG
        </h1>

        <p className="text-base sm:text-lg md:text-xl font-secFont1 max-w-[90%] sm:max-w-[80%] md:max-w-[57vw] text-center text-white md:mt-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
      <div className="w-full flex flex-col items-center gap-8 sm:gap-10 md:gap-12">
        <div className="flex flex-wrap justify-center gap-6 bg-gray-200  rounded-full p-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`text-sm sm:text-base md:text-lg font-secFont1 px-3 sm:px-4 md:px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-colPink text-white"
                  : "text-black hover:bg-gray-300"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {loading ? (
          <p className="text-center text-white">Loading events...</p>
        ) : (
          <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 w-full items-center">
            <AnimatePresence mode="wait" initial={false}>
              {filteredEvents.length > 0 ? (
                filteredEvents.map((event) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    layout
                    className="w-full flex justify-center px-4 sm:px-6 md:px-8"
                  >
                    <CardComp event={event} />
                  </motion.div>
                ))
              ) : (
                <p className="text-center text-white">No events found.</p>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
};
