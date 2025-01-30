import React from 'react';

const EventDetails = () => {
  return (
    <div className="bg-black text-white p-8 md:p-12 ">
      <div className="px-16 mx-auto pt-32">
        {/* Date and Time */}
        <div className="font-['OfficialBook'] text-lg md:text-4xl">
          <span>23rd March,</span>
          <span className="ml-2">12:30 PM</span>
        </div>
        
        {/* Event Title */}
        <div className='flex flex-row justify-between w-full items-center'>
        <h1 className="font-['ModernAge'] text-4xl md:text-9xl  uppercase w-[50%]">
          Event Title
        </h1>
        
        {/* Description */}
        <p className="font-['OfficialBook'] text-base md:text-xl max-w-2xl leading-relaxed w-[50%]">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled
        </p>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;