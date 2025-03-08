import React, { useEffect } from 'react'
import { AboutUs } from '../Components/home/AboutUs'
import EventCarousel from '../Components/home/EventCarousel';
import Sponsors from '../Components/Sponsors/Home_Sponsors';
import Temp from '../Components/home/Temp';
import RecapCards from '../Components/home/RecapCards';
import WhyJoinUs from '../Components/home/WhyJoinUs';
import AuGlimpes from '../Components/home/AuGlimpes';

function Home() {
  useEffect(() => {
    // Initially hide navbar
    const navbar = document.querySelector('nav');
    if (navbar) {
      navbar.style.transform = 'translateY(-100%)';
    }

    let lastScrollY = 0;
    const showThreshold = 100; // Show navbar after scrolling this many pixels

    const handleScroll = () => {
      const navbar = document.querySelector('nav');
      if (!navbar) return;

      const currentScrollY = window.scrollY;

      // Show navbar after scrolling past threshold
      if (currentScrollY > showThreshold) {
        navbar.style.transform = 'translateY(0)';
        navbar.style.transition = 'transform 0.3s ease-in-out';
      } else {
        navbar.style.transform = 'translateY(-100%)';
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Reset navbar state when component unmounts
      const navbar = document.querySelector('nav');
      if (navbar) {
        navbar.style.transform = 'translateY(0)';
      }
    };
  }, []);

  return (
    <div className='bg-black w-full h-full pt-16'>
        <Temp/>
        <AboutUs/>
        <AuGlimpes/>

        <>
        <h1 className='font-primaryFont text-white text-center text-4xl sm:text-5xl md:text-6xl font-bold mb-12'>
            Past Sponsors
        </h1>
          
        <div className="h-[250px] sm:h-[250px] w-full relative mb-32">
          <Sponsors
            direction='horizontal'
            pauseOnHover={true}
            size='clamp(6rem, 7rem + 15vmin, 20rem)'
            duration='60s'
            bgColor='#060606'
            bgAccentColor='#111111'
          />
        </div>
        </>

        <RecapCards/>
        <EventCarousel/>
        <WhyJoinUs />
        
    </div>
  )
}

export default Home
