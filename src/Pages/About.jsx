import React, { useEffect, useState } from 'react';
import AboutCard from '../Components/AboutCard';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styled from 'styled-components';
import { ChevronDown } from 'lucide-react';
import teamMembers from '../data/teamMembers.json';

function About() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <StyledWrapper className="bg-[#121212] bg-[url('/bg-texture.jpg')] bg-repeat bg-auto py-16 px-4 sm:px-8 lg:px-12 xl:px-24 w-full flex flex-col gap-16 min-h-screen relative">
      {/* Tech Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(201,15,91,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(201,15,91,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Ingenium Logo */}
        <div className="w-full flex justify-center mt-20" data-aos="fade-down">
          <div className="logo-container w-32 pt-4 sm:w-40 md:w-48 lg:w-56 xl:w-64">
            <img src="/Logos/Ing_White_2025.png" alt="Ingenium Logo" className="w-full h-auto" />
            <div className="logo-glitch"></div>
          </div>
        </div>

        {/* About Section */}
        <div className="flex flex-col md:flex-row items-center justify-around px-4 sm:px-12 py-5 gap-10 mt-20">
          <div className="w-full md:w-1/2 text-white" data-aos="fade-right">
            <div className="tech-container p-8">
              <p className="font-secFont1 text-xl sm:text-2xl text-[#C90F5B] glitch-text">About</p>
              <p className="font-primaryFont text-4xl sm:text-5xl md:text-6xl bg-gradient-to-r from-white via-pink-200 to-[#C90F5B] bg-clip-text text-transparent cyber-text mt-4">
                INGENIUM
              </p>
              <p className="font-secFont1 text-base sm:text-lg md:text-xl text-justify pt-6 leading-relaxed text-gray-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto temporibus
                tenetur facere. Repudiandae dolor voluptate corrupti blanditiis.
              </p>
            </div>
          </div>
          
          <div className="tech-image-container" data-aos="fade-left">
            <img 
              src="/3.jpg" 
              className="h-72 sm:h-80 md:h-96 w-48 sm:w-64 md:w-72 rounded-lg object-cover" 
              alt="Tech"
            />
          </div>
        </div>

        {/* Meet Our Team */}
        <div className="w-full mt-32">
          <div className="section-title mb-16" data-aos="zoom-in">
            <div className="title-line"></div>
            <p className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl py-8 font-primaryFont text-transparent bg-gradient-to-r from-white via-pink-200 to-[#C90F5B] bg-clip-text text-center cyber-text">
              MEET OUR TEAM
            </p>
            <div className="title-line"></div>
          </div>

          {/* Heads Section */}
          <div className="w-full mb-20">
            <h2 className="text-3xl sm:text-4xl font-primaryFont text-center text-transparent bg-gradient-to-r from-white via-pink-200 to-[#C90F5B] bg-clip-text cyber-text mb-12">
              HEADS
            </h2>
            <div className="w-full flex justify-center">
              <div className="max-w-[1200px] w-full flex flex-wrap justify-center gap-x-8 gap-y-12">
                {teamMembers.heads.map((member, i) => (
                  <div key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                    <AboutCard 
                      name={member.name}
                      post={member.post}
                      image={member.image}
                      linkedin={member.linkedin}
                      github={member.github}
                      instagram={member.instagram}
                      email={member.email}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Web Development Team Section */}
          <div className="w-full mb-20">
            <h2 className="text-3xl sm:text-4xl font-primaryFont text-center text-transparent bg-gradient-to-r from-white via-pink-200 to-[#C90F5B] bg-clip-text cyber-text mb-12">
              WEB DEVELOPMENT TEAM
            </h2>
            <div className="w-full flex justify-center">
              <div className="max-w-[1200px] w-full flex flex-wrap justify-center gap-x-8 gap-y-12">
                {teamMembers.webDevTeam.map((member, i) => (
                  <div key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                    <AboutCard 
                      name={member.name}
                      post={member.post}
                      image={member.image}
                      linkedin={member.linkedin}
                      github={member.github}
                      instagram={member.instagram}
                      email={member.email}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Logistics */}
          <div className="w-full mb-20">
            <h2 className="text-3xl sm:text-4xl font-primaryFont text-center text-transparent bg-gradient-to-r from-white via-pink-200 to-[#C90F5B] bg-clip-text cyber-text mb-12">
            Logistics TEAM
            </h2>
            <div className="w-full flex justify-center">
              <div className="max-w-[1200px] w-full flex flex-wrap justify-center gap-x-8 gap-y-12">
                {teamMembers.designTeam.map((member, i) => (
                  <div key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                    <AboutCard 
                      name={member.name}
                      post={member.post}
                      image={member.image}
                      linkedin={member.linkedin}
                      github={member.github}
                      instagram={member.instagram}
                      email={member.email}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CSE */}
          <div className="w-full mb-20">
            <h2 className="text-3xl sm:text-4xl font-primaryFont text-center text-transparent bg-gradient-to-r from-white via-pink-200 to-[#C90F5B] bg-clip-text cyber-text mb-12">
              cse TEAM
            </h2>
            <div className="w-full flex justify-center">
              <div className="max-w-[1200px] w-full flex flex-wrap justify-center gap-x-8 gap-y-12">
                {teamMembers.webDevTeam.map((member, i) => (
                  <div key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                    <AboutCard 
                      name={member.name}
                      post={member.post}
                      image={member.image}
                      linkedin={member.linkedin}
                      github={member.github}
                      instagram={member.instagram}
                      email={member.email}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* EEE */}
          <div className="w-full mb-20">
            <h2 className="text-3xl sm:text-4xl font-primaryFont text-center text-transparent bg-gradient-to-r from-white via-pink-200 to-[#C90F5B] bg-clip-text cyber-text mb-12">
              EEE TEAM
            </h2>
            <div className="w-full flex justify-center">
              <div className="max-w-[1200px] w-full flex flex-wrap justify-center gap-x-8 gap-y-12">
                {teamMembers.webDevTeam.map((member, i) => (
                  <div key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                    <AboutCard 
                      name={member.name}
                      post={member.post}
                      image={member.image}
                      linkedin={member.linkedin}
                      github={member.github}
                      instagram={member.instagram}
                      email={member.email}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .logo-container {
    position: relative;
    
    // &:hover .logo-glitch {
    //   opacity: 1;
    // }
  }

  .logo-glitch {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, transparent, rgba(201, 15, 91, 0.3), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
    animation: logo-scan 2s linear infinite;
  }

  .tech-container {
    position: relative;
    border: 1px solid rgba(201, 15, 91, 0.3);
    background: rgba(18, 18, 18, 0.8);
    backdrop-filter: blur(5px);
    border-radius: 8px;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background: linear-gradient(90deg, transparent, #C90F5B, transparent);
      animation: scanline 2s linear infinite;
    }
  }

  .tech-image-container {
    position: relative;
    padding: 3px;
    background: linear-gradient(45deg, #C90F5B, transparent);
    border-radius: 12px;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(45deg, #C90F5B, transparent);
      border-radius: 12px;
      padding: 2px;
      mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      mask-composite: exclude;
    }
  }

  .section-title {
    position: relative;
  }

  .title-line {
    width: 50%;
    height: 2px;
    margin: 0 auto;
    background: linear-gradient(90deg, transparent, #C90F5B, transparent);
    transform: scaleX(0);
    transition: transform 0.5s ease;
    
    .section-title:hover & {
      transform: scaleX(1);
    }
  }

  @keyframes logo-scan {
    0% {
      transform: translateX(-100%) skewX(-45deg);
    }
    100% {
      transform: translateX(200%) skewX(-45deg);
    }
  }

  @keyframes scanline {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }

  .cyber-text {
    position: relative;
    
    &::before {
      content: attr(data-text);
      position: absolute;
      left: 2px;
      text-shadow: -1px 0 #C90F5B;
      top: 0;
      color: white;
      background: none;
      overflow: hidden;
      clip: rect(0, 900px, 0, 0);
      animation: cyber-glitch 2s infinite linear alternate-reverse;
    }
  }

  @keyframes cyber-glitch {
    0% {
      clip: rect(44px, 900px, 56px, 0);
    }
    20% {
      clip: rect(67px, 900px, 98px, 0);
    }
    40% {
      clip: rect(32px, 900px, 54px, 0);
    }
    60% {
      clip: rect(78px, 900px, 89px, 0);
    }
    80% {
      clip: rect(23px, 900px, 45px, 0);
    }
    100% {
      clip: rect(54px, 900px, 77px, 0);
    }
  }
`;

export default About;