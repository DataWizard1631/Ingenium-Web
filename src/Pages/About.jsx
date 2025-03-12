import React, { useEffect, useState } from 'react';
import AboutCard from '../Components/Members/AboutCard';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styled from 'styled-components';
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
        <div className="w-full flex justify-center mt-12 md:mt-20" data-aos="fade-down">
          <div className="logo-container w-48 sm:w-56 md:w-64 mb-4 sm:mb-6 md:mb-8">
            <img src="/Logos/Ing_White_2025.png" alt="Ingenium Logo" className="w-full h-auto" />
            <div className="logo-glitch"></div>
          </div>
        </div>

        {/* Meet Our Team */}
        <div className="w-full mt-0 md:mt-12">
          <div className="section-title mb-0 md:mb-12" data-aos="zoom-in">
            <div className="title-line"></div>
            <p className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl pb-8 font-primaryFont text-transparent bg-white bg-clip-text text-center cyber-text">
              MEET OUR TEAM
            </p>
            <div className="absolute bottom-0 md:bottom-4 w-1/2 left-1/4 h-1 bg-gradient-to-r from-transparent via-colPink to-transparent" />
            {/* <div className="title-line"></div> */}
          </div>

          {/* OBs Section */}
          <div className="w-full mb-20">
            <h2 className="text-3xl sm:text-4xl font-primaryFont text-center text-transparent bg-gradient-to-r from-white via-pink-200 to-[#5b5b5b] bg-clip-text cyber-text my-6 md:my-0 md:mb-12">
              OFFICE BEARERS
            </h2>
            <div className="w-full flex justify-center">
              <div className="max-w-[1200px] w-full flex flex-wrap justify-center gap-x-8 gap-y-12">
                {teamMembers.Obs.map((member, i) => (
                  <div key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                    <AboutCard 
                      name={member.Name}
                      post={member.Position}
                      image={member.imageUrl}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Core Teams - 4 cards per row groups */}
          <div className="w-full mb-20">
            {/* Logistics and Decoration Row */}
            <div className="flex flex-col md:flex-row justify-center mb-0 md:mb-20">
              {/* Logistics Team */}
              <div className="flex-1">
                <h2 className="text-3xl sm:text-4xl font-primaryFont text-center text-transparent bg-gradient-to-r from-white via-pink-200 to-[#C90F5B] bg-clip-text cyber-text my-6 md:my-0 md:mb-12">
                  LOGISTICS TEAM
                </h2>
                <div className="flex flex-wrap justify-center gap-8">
                  {teamMembers.Cores["Logistics"].map((member, i) => (
                    <div key={i} className="w-[280px]" data-aos="fade-up" data-aos-delay={i * 100}>
                      <AboutCard 
                        name={member.Name}
                        post="Logistics"
                        image={member.imageUrl}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Decoration Team */}
              <div className="flex-1">
                <h2 className="text-3xl sm:text-4xl font-primaryFont text-center text-transparent bg-gradient-to-r from-white via-pink-200 to-[#C90F5B] bg-clip-text cyber-text my-6 md:my-0 md:mb-12">
                  DECORATION TEAM
                </h2>
                <div className="flex flex-wrap justify-center gap-8">
                  {teamMembers.Cores["Decoration"].map((member, i) => (
                    <div key={i} className="w-[280px]" data-aos="fade-up" data-aos-delay={i * 100}>
                      <AboutCard 
                        name={member.Name}
                        post="Decoration"
                        image={member.imageUrl}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Graphics and CSE Events Row */}
            <div className="flex flex-col md:flex-row justify-center mb-0 md:mb-20">
              {/* Graphics Team */}
              <div className="flex-1">
                <h2 className="text-3xl sm:text-4xl font-primaryFont text-center text-transparent bg-gradient-to-r from-white via-pink-200 to-[#C90F5B] bg-clip-text cyber-text my-6 md:my-0 md:mb-12">
                  GRAPHICS TEAM
                </h2>
                <div className="flex flex-wrap justify-center gap-8">
                  {teamMembers.Cores["Graphics"].map((member, i) => (
                    <div key={i} className="w-[280px]" data-aos="fade-up" data-aos-delay={i * 100}>
                      <AboutCard 
                        name={member.Name}
                        post="Graphics"
                        image={member.imageUrl}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* CSE Events Team */}
              <div className="flex-1">
                <h2 className="text-3xl sm:text-4xl font-primaryFont text-center text-transparent bg-gradient-to-r from-white via-pink-200 to-[#C90F5B] bg-clip-text cyber-text my-6 md:my-0 md:mb-12">
                  CSE EVENTS TEAM
                </h2>
                <div className="flex flex-wrap justify-center gap-8">
                  {teamMembers.Cores["CSE Events"].map((member, i) => (
                    <div key={i} className="w-[280px]" data-aos="fade-up" data-aos-delay={i * 100}>
                      <AboutCard 
                        name={member.Name}
                        post="CSE Events"
                        image={member.imageUrl}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mech Events and Escape Room Row */}
            <div className="flex flex-col md:flex-row justify-center mb-0 md:mb-20">
              {/* Mech Events Team */}
              <div className="flex-1">
                <h2 className="text-3xl sm:text-4xl font-primaryFont text-center text-transparent bg-gradient-to-r from-white via-pink-200 to-[#C90F5B] bg-clip-text cyber-text my-6 md:my-0 md:mb-12">
                  MECH EVENTS TEAM
                </h2>
                <div className="flex flex-wrap justify-center gap-8">
                  {teamMembers.Cores["Mech Events"].map((member, i) => (
                    <div key={i} className="w-[280px]" data-aos="fade-up" data-aos-delay={i * 100}>
                      <AboutCard 
                        name={member.Name}
                        post="Mech Events"
                        image={member.imageUrl}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Escape Room Team */}
              <div className="flex-1">
                <h2 className="text-3xl sm:text-4xl font-primaryFont text-center text-transparent bg-gradient-to-r from-white via-pink-200 to-[#C90F5B] bg-clip-text cyber-text my-6 md:my-0 md:mb-12">
                  ESCAPE ROOM TEAM
                </h2>
                <div className="flex flex-wrap justify-center gap-8">
                  {teamMembers.Cores["Escape Room"].map((member, i) => (
                    <div key={i} className="w-[280px]" data-aos="fade-up" data-aos-delay={i * 100}>
                      <AboutCard 
                        name={member.Name}
                        post="Escape Room"
                        image={member.imageUrl}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* AUmazing Talent and Gaming Row */}
            <div className="flex flex-col md:flex-row justify-center mb-0 md:mb-20">
              {/* AUmazing Talent Team */}
              <div className="flex-1">
                <h2 className="text-3xl sm:text-4xl font-primaryFont text-center text-transparent bg-gradient-to-r from-white via-pink-200 to-[#C90F5B] bg-clip-text cyber-text my-6 md:my-0 md:mb-12">
                  AUMAZING TALENT TEAM
                </h2>
                <div className="flex flex-wrap justify-center gap-8">
                  {teamMembers.Cores["AUmazing Talent"].map((member, i) => (
                    <div key={i} className="w-[280px]" data-aos="fade-up" data-aos-delay={i * 100}>
                      <AboutCard 
                        name={member.Name}
                        post="AUmazing Talent"
                        image={member.imageUrl}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Gaming Team */}
              <div className="flex-1">
                <h2 className="text-3xl sm:text-4xl font-primaryFont text-center text-transparent bg-gradient-to-r from-white via-pink-200 to-[#C90F5B] bg-clip-text cyber-text my-6 md:my-0 md:mb-12">
                  GAMING TEAM
                </h2>
                <div className="flex flex-wrap justify-center gap-8">
                  {teamMembers.Cores["Gaming"].map((member, i) => (
                    <div key={i} className="w-[280px]" data-aos="fade-up" data-aos-delay={i * 100}>
                      <AboutCard 
                        name={member.Name}
                        post="Gaming"
                        image={member.imageUrl}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Social Media and Content Row */}
            <div className="flex flex-col md:flex-row justify-center mb-0 md:mb-20">
              {/* Social Media Team */}
              <div className="flex-1">
                <h2 className="text-3xl sm:text-4xl font-primaryFont text-center text-transparent bg-gradient-to-r from-white via-pink-200 to-[#C90F5B] bg-clip-text cyber-text my-6 md:my-0 md:mb-12">
                  SOCIAL MEDIA TEAM
                </h2>
                <div className="flex flex-wrap justify-center gap-8">
                  {teamMembers.Cores["Social Media"].map((member, i) => (
                    <div key={i} className="w-[280px]" data-aos="fade-up" data-aos-delay={i * 100}>
                      <AboutCard 
                        name={member.Name}
                        post="Social Media"
                        image={member.imageUrl}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Content Team */}
              <div className="flex-1">
                <h2 className="text-3xl sm:text-4xl font-primaryFont text-center text-transparent bg-gradient-to-r from-white via-pink-200 to-[#C90F5B] bg-clip-text cyber-text my-6 md:my-0 md:mb-12">
                  CONTENT TEAM
                </h2>
                <div className="flex flex-wrap justify-center gap-8">
                  {teamMembers.Cores["Content"].map((member, i) => (
                    <div key={i} className="w-[280px]" data-aos="fade-up" data-aos-delay={i * 100}>
                      <AboutCard 
                        name={member.Name}
                        post="Content"
                        image={member.imageUrl}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Registration/Outreach and Management Teams Row */}
          <div className="w-full mb-20">
            {/* First Row with both team categories */}
            <div className="flex flex-col md:flex-row justify-center mb-0 md:mb-20">
              {/* Registration & Outreach Section */}
              <div className="flex-1">
                <h2 className="text-3xl sm:text-4xl font-primaryFont text-center text-transparent bg-gradient-to-r from-white via-pink-200 to-[#C90F5B] bg-clip-text cyber-text my-6 md:my-0 md:mb-12">
                  R & O TEAM
                </h2>
                <div className="flex flex-wrap justify-center gap-8">
                  {["Registration", "Outreach"].map(teamName => (
                    teamMembers.Cores[teamName]?.map((member, i) => (
                      <div key={`${teamName}-${i}`} className="w-[280px]" data-aos="fade-up" data-aos-delay={i * 100}>
                        <AboutCard 
                          name={member.Name}
                          post={teamName}
                          image={member.imageUrl}
                        />
                      </div>
                    ))
                  ))}
                </div>
              </div>

              {/* Management Section */}
              <div className="flex-1">
                <h2 className="text-3xl sm:text-4xl font-primaryFont text-center text-transparent bg-gradient-to-r from-white via-pink-200 to-[#C90F5B] bg-clip-text cyber-text my-6 md:my-0 md:mb-12">
                  MANAGEMENT TEAM
                </h2>
                <div className="flex flex-wrap justify-center gap-8">
                  {["Sponsorship", "Invest-o-mania"].map(teamName => (
                    teamMembers.Cores[teamName]?.map((member, i) => (
                      <div key={`${teamName}-${i}`} className="w-[280px]" data-aos="fade-up" data-aos-delay={i * 100}>
                        <AboutCard 
                          name={member.Name}
                          post={teamName}
                          image={member.imageUrl}
                        />
                      </div>
                    ))
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Technical Teams Row */}
          <div className="w-full mb-20">
            {/* Technical Teams */}
            <h2 className="text-3xl sm:text-4xl font-primaryFont text-center text-transparent bg-gradient-to-r from-white via-pink-200 to-[#C90F5B] bg-clip-text cyber-text my-6 md:my-0 md:mb-12">
              TECHNICAL TEAMS
            </h2>
            <div className="flex flex-wrap justify-center gap-8 mb-0 md:mb-20">
              {[
                "Chem Events",
                "EEE",
                "Hackathon",
              ].map(teamName => (
                teamMembers.Cores[teamName]?.map((member, i) => (
                  <div key={`${teamName}-${i}`} className="w-[280px]" data-aos="fade-up" data-aos-delay={i * 100}>
                    <AboutCard 
                      name={member.Name}
                      post={teamName}
                      image={member.imageUrl}
                    />
                  </div>
                ))
              ))}
            </div>
          </div>

          {/* Web Development Team */}
          <div className="w-full mb-20">
            <h2 className="text-3xl sm:text-4xl font-primaryFont text-center text-transparent bg-gradient-to-r from-white via-pink-200 to-[#C90F5B] bg-clip-text cyber-text my-6 md:my-0 md:mb-12">
              WEB DEV<span className="text-[1.6rem] font-bold">s</span>
            </h2>
            <div className="w-full flex justify-center">
              <div className="max-w-[1200px] w-full">
                <div className="flex flex-wrap md:flex-nowrap justify-center gap-8">
                  {teamMembers["Web Devs"].map((member, i) => (
                    <div key={i} className="w-[280px]" data-aos="fade-up" data-aos-delay={i * 100}>
                      <AboutCard 
                        name={member.Name}
                        post="Developer"
                        image={member.imageUrl}
                      />
                    </div>
                  ))}
                  {teamMembers["Web Design"].map((member, i) => (
                    <div key={i} className="w-[280px]" data-aos="fade-up" data-aos-delay={i * 100}>
                      <AboutCard 
                        name={member.Name}
                        post="Designer"
                        image={member.imageUrl}
                      />
                    </div>
                  ))}

                </div>
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
    overflow: hidden;
    
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
    pointer-events: none;
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
      transform: translateX(100%) skewX(-45deg);
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