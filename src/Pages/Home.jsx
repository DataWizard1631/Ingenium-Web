import React from 'react'
import { Hero } from '../Components/Hero'
import { AboutUs } from '../Components/AboutUs'
import ImageGallary from '../Components/ImageGallary'
import EventCarousel from '../Components/EventCardScroll';
import Sponsors from '../Components/Sponsors';

import reactbits from "../assets/image.png";
const logoImgs = [
  { imgUrl: reactbits, altText: "React Bits Logo" },
  { imgUrl: reactbits, altText: "React Bits Logo" },
  { imgUrl: reactbits, altText: "React Bits Logo" },
  { imgUrl: reactbits, altText: "React Bits Logo" },
  { imgUrl: reactbits, altText: "React Bits Logo" },
  { imgUrl: reactbits, altText: "React Bits Logo" },
  { imgUrl: reactbits, altText: "React Bits Logo" }
];

function Home() {
 
  const images = [
    "/public/1.jpg",
    "/public/2.jpg",
    "/public/3.jpg",
    "/public/4.jpg",
    "/public/5.jpg",
    "/public/6.jpg",
    "/public/7.jpg",
    "/public/1.jpg",
    "/public/2.jpg",
    "/public/3.jpg",
    "/public/4.jpg",
    "/public/5.jpg",
    "/public/6.jpg",
    "/public/7.jpg",
   
    // ... more image URLs
  ];

  return (
    <div className='bg-colBlack w-full h-full pt-16'>
        <Hero/>
        <EventCarousel/>
        <AboutUs/>
        <ImageGallary images={images} className="custom-class" />

        <h1 className='font-primaryFont text-white text-center text-4xl sm:text-5xl md:text-6xl font-bold mb-12'>
            Sponsors
          </h1>
          
          <div className="h-[250px] sm:h-[250px] w-full relative">
            <Sponsors
              items={logoImgs}
              direction='horizontal'
              pauseOnHover={true}
              size='clamp(6rem, 7rem + 15vmin, 20rem)'
              duration='60s'
              bgColor='#060606'
              bgAccentColor='#111111'
            />
          </div>
        
    </div>
  )
}

export default Home
