import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate, Navigate } from 'react-router-dom';
import { FaBook, FaArrowLeft } from "react-icons/fa";
import eventsData from '../../data/events.json';
import CloudinaryImage from '../../tools/CloudinaryImage';

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    const foundEvent = eventsData.events.find(e => e.id === id);
    setEvent(foundEvent);
    setLoading(false);
  }, [id]);

  if (loading) {
    return <div className="text-white text-center pt-20">Loading...</div>;
  }

  if (!event) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="bg-[url('/bg-texture.jpg')] bg-repeat bg-auto min-h-screen">
      <div className="font-['OfficialBook'] bg-black/90 text-white min-h-screen p-4 md:p-8 lg:p-12">
        <div className="px-4 md:px-16 mx-auto pt-20 md:pt-10 pb-4 md:pb-20">
          {/* Back Button */}
          <button 
            onClick={() => navigate(-1)}
            className="mb-4 md:mb-8 flex items-center gap-2 px-4 py-2 border-[1px] border-white text-white rounded-full transition-all duration-300 group w-fit"
          >
            <FaArrowLeft className="text-sm md:text-base transition-transform duration-300 group-hover:-translate-x-1" />
            <span className="text-sm md:text-base">Back</span>
          </button>

          {/* Date and Time */}
          <div className="text-base sm:text-lg md:text-2xl lg:text-4xl">
            {event.otherdate ? (
              event.othertime ? (
                <span>
                  {event.date} - {event.time} & {event.otherdate} - {event.othertime}
                </span>
              ) : (
                <span>
                  {event.date} & {event.otherdate} - {event.time}
                </span>
              )
            ) : (
              <span>
                {event.date} {
                event.category !== "Esports" && <span>- {event.time}</span>
                }
              </span>
            )}
          </div>
          
          {/* Event Title and Description */}
          <div className='flex flex-col md:flex-row justify-between w-full items-start md:items-center gap-6 md:gap-8'>
            <h1 className="font-['ModernAge'] text-3xl sm:text-4xl md:text-7xl lg:text-8xl uppercase w-full mt-4">
              {event.title}
            </h1>
          </div>

          {/* Long Description and Image Section */}
          <div className="flex md:flex-row flex-col-reverse md:justify-between gap-8 md:gap-12 my-6 md:my-28 md:mt-12">
            {/* Long Description */}
            <div className="w-full md:w-[60%]">
              <p className="text-sm sm:text-base md:text-xl lg:text-2xl leading-relaxed text-justify mb-8">
                {event.longDescription}
              </p>

              {/* How to Apply Section - Moved here */}
              <div className='w-full bg-[#252525] rounded-lg p-6 md:p-8 mt-8'>
                <h2 className="text-2xl md:text-4xl mb-4 md:mb-8 font-['ModernAge']">
                  How to Apply?
                </h2>
                <ul className="list-disc pl-6 text-sm sm:text-base md:text-lg lg:text-xl space-y-2 md:space-y-4">
                  {event.howToApply.map((step, index) => (
                    <li key={index} className="text-gray-200">
                      {step}
                    </li>
                  ))}
                </ul>
                {event.registrationLink && (
                  <a
                    href={event.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 md:mt-8 text-colPink hover:text-pink-400 transition-all duration-300 text-lg md:text-xl font-semibold group"
                  >
                    Click here to register 
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">→</span>
                  </a>
                )}
              </div>
            </div>

            {/* Event Image */}
            <div className="w-full md:w-[30%] h-full">
              <CloudinaryImage 
                src={event.image} 
                alt={event.title} 
                className='w-full h-full object-cover rounded-lg sticky top-8' 
              />
            </div>
          </div>

          {/* Rules and How to Apply Section */}
          <div className='flex flex-col lg:flex-row justify-between w-full items-start gap-8 md:gap-12 px-0 lg:px-16 my-8 md:my-16'>
            {/* Rules Section */}
            <div className='w-full lg:w-[50%]'>
              <div className='flex flex-row gap-4 md:gap-6 w-full items-center bg-[#FF1F79] p-3 md:p-4 rounded-tl-lg rounded-tr-lg'>
                <FaBook className='text-3xl md:text-5xl' />
                <p className="text-2xl md:text-4xl lg:text-6xl">Rule Book</p>
              </div>
              <div className="flex flex-col gap-4 md:text-xl bg-[#252525] px-6 md:px-12 py-6 md:py-8 rounded-b-lg">
                <ul className="list-disc pl-4">
                  {event.rules.map((rule, index) => (
                    <li key={index} className="mb-2">
                      {rule}
                    </li>
                  ))}
                </ul>
                {
                  event.guidelinesLink && (
                    <a href={event.guidelinesLink} target="_blank" rel="noopener noreferrer" className="text-colPink hover:text-pink-400 transition-all duration-300 text-lg md:text-xl font-semibold group">
                    Click here to view guidelines 
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">→</span>
                  </a>
                  )
                }
              </div>
            </div>

            {/* How to Apply Section */}
            <div className='w-full md:w-[50%] space-y-8 md:space-y-16'>
             

              {/* Related Events */}
              <div className='w-full lg:w-[70%] mx-auto'>
                <p className="text-3xl md:text-4xl lg:text-5xl mb-6">Explore more</p>
                <div className='flex flex-col gap-4'>
                  {event.relatedEvents.map((relatedEvent) => (
                    <Link 
                      key={relatedEvent.id}
                      to={`/event/${relatedEvent.id}`} 
                      className='bg-[#252525] rounded-lg p-4 flex flex-row gap-4 hover:bg-[#2f2f2f] transition-colors duration-300'
                    >
                      <CloudinaryImage 
                        src={relatedEvent.image} 
                        alt={relatedEvent.title} 
                        className='w-16 h-16 md:w-20 md:h-20 object-cover rounded-lg' 
                      />
                      <div className='flex flex-col gap-2'>
                        <p className="text-xl md:text-3xl lg:text-3xl">{relatedEvent.title}</p>
                        <p className="text-sm md:text-base lg:text-xl text-gray-300">{relatedEvent.category}</p>
                      </div>
                    </Link>
                  ))}
                </div>  
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default EventDetails;