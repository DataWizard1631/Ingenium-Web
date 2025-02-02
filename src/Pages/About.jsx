import React from 'react';
import AboutCard from '../Components/AboutCard';

function About() {
  return (
    <div className="bg-[url('/bg-texture.jpg')] bg-repeat bg-auto py-16 px-4 sm:px-8 lg:px-12 xl:px-24 w-full flex flex-col gap-10">
      {/* Ingenium Logo */}
      <div className="w-full flex justify-center mt-20">
        <div className="w-32 pt-4 sm:w-40 md:w-48 lg:w-56 xl:w-64">
          <img src="/Logos/Ing_White_2025.png" alt="Ingenium Logo" className="w-full h-auto" />
        </div>
      </div>

      {/* About Section */}
      <div className="flex flex-col md:flex-row items-center justify-around px-4 sm:px-12 py-5 gap-6">
        <div className="w-full md:w-1/2 text-white text-center md:text-left">
          <p className="font-secFont1 text-xl sm:text-2xl">About</p>
          <p className="font-primaryFont text-4xl sm:text-5xl md:text-6xl">INGENIUM</p>
          <p className="font-secFont1 text-base sm:text-lg md:text-xl text-justify pt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto temporibus
            tenetur facere. Repudiandae dolor voluptate corrupti blanditiis, aperiam temporibus sunt
            illo omnis distinctio in reiciendis, aliquid odit doloribus eius aliquam.
          </p>
        </div>
        <img src="/3.jpg" className="h-72 sm:h-80 md:h-96 w-48 sm:w-64 md:w-72 rounded-lg object-cover" />
      </div>

      {/* Meet Our Team */}
      <div className="w-full">
        <p className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl py-8 font-primaryFont text-transparent bg-gradient-to-b from-white/90 to-gray-700 bg-clip-text text-center">MEET OUR TEAM</p>
        <div className="w-full flex justify-center">
          <div className="max-w-[1400px] w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-6 px-4 sm:px-8 place-items-center">
            {Array(6).fill(0).map((_, i) => (
              <AboutCard key={i} name="Lorem ipsum" post="lorem" image="/1.jpg" />
            ))}
          </div>
        </div>
      </div>

      {/* Heads Section */}
      <div className="w-full">
        <p className="text-5xl sm:text-6xl md:text-6xl lg:text-8xl font-primaryFont text-center text-transparent bg-gradient-to-b from-white/90 to-gray-700 bg-clip-text py-8">
          HEADS
        </p>
        <div className="w-full flex justify-center">
          <div className="max-w-[1400px] w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-6 px-4 sm:px-8 place-items-center">
            {Array(6).fill(0).map((_, i) => (
              <AboutCard key={i} name="Lorem ipsum" post="lorem" image="/1.jpg" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
