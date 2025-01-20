import React from 'react'
import { Hero } from '../Components/Hero'
import { AboutUs } from '../Components/AboutUs'
import ImageGallary from '../Components/ImageGallary'
import EventCarousel from '../Components/EventCardScroll';
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
    </div>
  )
}

export default Home
