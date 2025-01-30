import React from 'react';
import eventImage from '../../assets/event.png';
import { FaBook } from "react-icons/fa";

const EventDetails = () => {
  return (
    <div className="font-['OfficialBook'] bg-black text-white min-h-screen p-4 md:p-8 lg:p-12">
      <div className="px-4 md:px-16 mx-auto pt-20 pb-20">
        {/* Date and Time */}
        <div className="text-base sm:text-lg md:text-2xl lg:text-4xl">
          <span>23rd March,</span>
          <span className="ml-2">12:30 PM</span>
        </div>
        
        {/* Event Title and Description */}
        <div className='flex flex-col md:flex-row justify-between w-full items-start md:items-center gap-6 md:gap-8'>
          <h1 className="font-['ModernAge'] text-3xl sm:text-4xl md:text-7xl lg:text-9xl uppercase w-full md:w-[50%]">
            Event Title
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed w-full md:w-[50%]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled
          </p>
        </div>

        {/* Event Image */}
        <img src={eventImage} alt="event" className='my-8 md:my-16 w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover' />

        {/* Long Description */}
        <p className="text-sm sm:text-base md:text-xl lg:text-2xl leading-relaxed text-justify my-12 md:my-28">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, vitae nostrum similique ipsam cumque delectus beatae maxime at qui, eos praesentium iure accusamus, saepe earum atque cupiditate itaque aspernatur. Vitae, itaque. Atque vel debitis repellat quas ab est consequatur incidunt error consequuntur recusandae possimus voluptatem qui perferendis doloremque, unde quasi dolorem dicta dolores voluptatum cumque. Dolore unde quod doloremque aliquid fugit ullam, consectetur eum reprehenderit tempora cupiditate vel cum praesentium deleniti pariatur commodi quia voluptatibus suscipit ipsum ex dolores ratione. Odio neque consequuntur quam, nam laboriosam nisi asperiores aliquid odit, libero nulla tempore delectus blanditiis amet iusto fuga consectetur sapiente?
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
              <li>Rule 1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum laboriosam aliquid vitae praesentium nam perspiciatis, vero adipisci qui facilis quaerat ducimus in iure, itaque accusantium ad natus error. Soluta itaque neque similique ex tempora? Sunt, quaerat dolorem.</li>
              <li>Rule 2 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum laboriosam aliquid vitae praesentium nam perspiciatis, vero adipisci qui facilis quaerat ducimus in iure, itaque accusantium ad natus error. Soluta itaque neque similique ex tempora? Sunt, quaerat dolorem.</li>
              <li>Rule 3 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum laboriosam aliquid vitae praesentium nam perspiciatis, vero adipisci qui facilis quaerat ducimus in iure, itaque accusantium ad natus error. Soluta itaque neque similique ex tempora? Sunt, quaerat dolorem.</li> 
              <li>Rule 4 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum laboriosam aliquid vitae praesentium nam perspiciatis, vero adipisci qui facilis quaerat ducimus in iure, itaque accusantium ad natus error. Soluta itaque neque similique ex tempora? Sunt, quaerat dolorem.</li>
              <li>Rule 5 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum laboriosam aliquid vitae praesentium nam perspiciatis, vero adipisci qui facilis quaerat ducimus in iure, itaque accusantium ad natus error. Soluta itaque neque similique ex tempora? Sunt, quaerat dolorem.</li>
              <li>Rule 6 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum laboriosam aliquid vitae praesentium nam perspiciatis, vero adipisci qui facilis quaerat ducimus in iure, itaque accusantium ad natus error. Soluta itaque neque similique ex tempora? Sunt, quaerat dolorem.</li>
              <li>Rule 7 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum laboriosam aliquid vitae praesentium nam perspiciatis, vero adipisci qui facilis quaerat ducimus in iure, itaque accusantium ad natus error. Soluta itaque neque similique ex tempora? Sunt, quaerat dolorem.</li>
            </div>
          </div>

          {/* How to Apply Section */}
          <div className='w-full md:w-[50%] space-y-8 md:space-y-16'>
            <div className='w-full md:w-[70%] mx-auto'>
              <p className="text-2xl md:text-4xl lg:text-5xl mb-6">
                How to Apply?
              </p>
              <ul className="text-sm sm:text-base md:text-lg lg:text-xl space-y-4">
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime cumque porro nesciunt!</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime cumque porro nesciunt!</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime cumque porro nesciunt!</li>
              </ul>
            </div>

            {/* Register Button */}
            <div className='flex justify-center items-center w-full my-8'>
              <button className="bg-[#FF1F79] rounded-full text-white px-8 md:px-12 py-3 md:py-4 text-base md:text-xl lg:text-2xl hover:bg-[#ff1f78e5] transition-colors duration-300">
                Register Now
              </button>
            </div>

            {/* Explore More Section */}
            <div className='w-full md:w-[70%] mx-auto'>
              <p className="text-3xl md:text-4xl lg:text-5xl mb-6">Explore more</p>
              <div className='flex flex-col gap-4'>
                {/* Event Cards */}
                <div className='bg-[#252525] rounded-lgx p-4 flex flex-row gap-4 hover:bg-[#2f2f2f] transition-colors duration-300'>
                  <img src={eventImage} alt="event" className='w-16 h-16 md:w-20 md:h-20 object-cover' />
                  <div className='flex flex-col gap-2'>
                    <p className="text-xl md:text-3xl lg:text-4xl">Event 2</p>
                    <p className="text-sm md:text-base lg:text-xl text-gray-300">CSE Events</p>
                  </div>
                </div>
                <div className='bg-[#252525] rounded-lg p-4 flex flex-row gap-4 hover:bg-[#2f2f2f] transition-colors duration-300'>
                  <img src={eventImage} alt="event" className='w-16 h-16 md:w-20 md:h-20 object-cover' />
                  <div className='flex flex-col gap-2'>
                    <p className="text-xl md:text-3xl lg:text-4xl">Event 3</p>
                    <p className="text-sm md:text-base lg:text-xl text-gray-300">CSE Events</p>
                  </div>
                </div>
                <div className='bg-[#252525] rounded-lg p-4 flex flex-row gap-4 hover:bg-[#2f2f2f] transition-colors duration-300'>
                  <img src={eventImage} alt="event" className='w-16 h-16 md:w-20 md:h-20 object-cover' />
                  <div className='flex flex-col gap-2'>
                    <p className="text-xl md:text-3xl lg:text-4xl">Event 4</p>
                    <p className="text-sm md:text-base lg:text-xl text-gray-300">CSE Events</p>
                  </div>
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