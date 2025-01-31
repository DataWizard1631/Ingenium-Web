import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaBook } from "react-icons/fa";
import eventsData from '../../data/events.json';

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const foundEvent = eventsData.events.find(e => e.id === id);
    setEvent(foundEvent);
  }, [id]);

  if (!event) {
    return <div className="text-white text-center pt-20">Loading...</div>;
  }

  return (
    <div className="font-['OfficialBook'] bg-black text-white min-h-screen p-4 md:p-8 lg:p-12">
      <div className="px-4 md:px-16 mx-auto pt-20 pb-20">
        {/* Date and Time */}
        <div className="text-base sm:text-lg md:text-2xl lg:text-4xl">
          <span>{event.date},</span>
          <span className="ml-2">{event.time}</span>
        </div>
        
        {/* Event Title and Description */}
        <div className='flex flex-col md:flex-row justify-between w-full items-start md:items-center gap-6 md:gap-8'>
          <h1 className="font-['ModernAge'] text-3xl sm:text-4xl md:text-7xl lg:text-9xl uppercase w-full md:w-[50%]">
            {event.title}
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed w-full md:w-[50%]">
            {event.description}
          </p>
        </div>

        {/* Event Image */}
        <img src={event.image} alt={event.title} className='my-8 md:my-16 w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover' />

        {/* Long Description */}
        <p className="text-sm sm:text-base md:text-xl lg:text-2xl leading-relaxed text-justify my-12 md:my-28">
          {event.longDescription}
        </p>

        {/* Rules and How to Apply Section */}
        <div className='flex flex-col md:flex-row justify-between w-full items-start gap-8 md:gap-12 px-0 md:px-16 my-8 md:my-16'>
          {/* Rules Section */}
          <div className='w-full md:w-[50%]'>
            <div className='flex flex-row gap-4 md:gap-6 w-full items-center bg-[#FF1F79] p-3 md:p-4'>
              <FaBook className='text-3xl md:text-5xl' />
              <p className="text-2xl md:text-4xl lg:text-6xl">Rule Book</p>
            </div>
            <div className="flex flex-col gap-4 md:text-xl bg-[#252525] px-6 md:px-12 py-6 md:py-8">
              {event.rules.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </div>
          </div>

          {/* How to Apply Section */}
          <div className='w-full md:w-[50%] space-y-8 md:space-y-16'>
            <div className='w-full md:w-[70%] mx-auto'>
              <p className="text-2xl md:text-4xl lg:text-5xl mb-6">
                How to Apply?
              </p>
              <ul className="text-sm sm:text-base md:text-lg lg:text-xl space-y-4">
                {event.howToApply.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </div>

            {/* Related Events */}
            <div className='w-full md:w-[70%] mx-auto'>
              <p className="text-3xl md:text-4xl lg:text-5xl mb-6">Explore more</p>
              <div className='flex flex-col gap-4'>
                {event.relatedEvents.map((relatedEvent) => (
                  <Link 
                    key={relatedEvent.id}
                    to={`/eventdetails/${relatedEvent.id}`} 
                    className='bg-[#252525] rounded-lg p-4 flex flex-row gap-4 hover:bg-[#2f2f2f] transition-colors duration-300'
                  >
                    <img src={relatedEvent.image} alt={relatedEvent.title} className='w-16 h-16 md:w-20 md:h-20 object-cover' />
                    <div className='flex flex-col gap-2'>
                      <p className="text-xl md:text-3xl lg:text-4xl">{relatedEvent.title}</p>
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
  );
};

export default EventDetails;