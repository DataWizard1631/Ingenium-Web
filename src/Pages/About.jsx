import React from 'react'

import AboutCard from "../Components/AboutCard";

function About() {
  return (
    <div className="bg-[url('/bg-texture.jpg')] bg-repeat bg-auto py-24 px-12 w-full flex flex-col gap-14">
      {/* <InfoCard />
      <MouseCard/> */}
      <div>
        <div className="w-full h-fit flex justify-center">
          <div className="w-48 sm:w-56 md:w-64 mb-4 sm:mb-6 md:mb-8">
            <img
              src="/Logos/Ing_White_2025.png"
              alt="Ingenium Logo"
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className="flex w-full h-1/3 justify-around px-12 py-5 gap-6">
          <div className="w-1/2 h-96 text-white">
            <p className="font-secFont1 text-2xl">about</p>
            <p className="font-primaryFont text-5xl">INGENIUM</p>
            <p className="font-secFont1 text-2xl text-justify pt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto temporibus tenetur facere. Repudiandae dolor voluptate
              corrupti blanditiis, aperiam temporibus sunt illo omnis distinctio
              in reiciendis, aliquid odit doloribus eius aliquam earum inventore
              eum officia assumenda impedit, quaerat consectetur. Hic, sequi
              tempore aliquam officiis aspernatur quo amet? Explicabo
              praesentium placeat ullam? Ad voluptatem, laudantium dolore unde
              eius in consequuntur! Labore quod nisi officia autem nemo neque
              rem qui nihil cupiditate.
            </p>
          </div>
          <img src="/public/3.jpg" className="h-96 w-72" />
        </div>
      </div>
      <div className="w-full h-3/4">
        <p className="text-5xl font-primaryFont text-white text-center">
          MEET OUR TEAM
        </p>
        <div className="grid grid-cols-1 py-6 px-24 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <AboutCard name="Lorem ipsum" post="lorem" image="/public/1.jpg" />
          <AboutCard name="Lorem ipsum" post="lorem" image="/public/1.jpg" />
          <AboutCard name="Lorem ipsum" post="lorem" image="/public/1.jpg" />
          <AboutCard name="Lorem ipsum" post="lorem" image="/public/1.jpg" />
          <AboutCard name="Lorem ipsum" post="lorem" image="/public/1.jpg" />
          <AboutCard name="Lorem ipsum" post="lorem" image="/public/1.jpg" />
        </div>
      </div>
      <div className="w-full h-3/4">
        <p className="text-7xl font-primaryFont text-center text-transparent bg-gradient-to-b from-white/50 to-gray-400 bg-clip-text">
          HEADS
        </p>
        <div className="max-w-screen-lg mx-auto grid grid-cols-1 py-6 px-6 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <AboutCard name="Lorem ipsum" post="lorem" image="/public/1.jpg" />
          <AboutCard name="Lorem ipsum" post="lorem" image="/public/1.jpg" />
          <AboutCard name="Lorem ipsum" post="lorem" image="/public/1.jpg" />
          <AboutCard name="Lorem ipsum" post="lorem" image="/public/1.jpg" />
          <AboutCard name="Lorem ipsum" post="lorem" image="/public/1.jpg" />
          <AboutCard name="Lorem ipsum" post="lorem" image="/public/1.jpg" />
        </div>
      </div>
    </div>
  )
}

export default About