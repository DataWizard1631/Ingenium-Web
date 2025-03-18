import React, { useEffect, useState } from 'react'
import Hyperspeed from './Hyperspeed';
import './Temp.css';

const Temp = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = 300;
      const progress = Math.min(Math.max(scrollPosition / maxScroll, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const targetDate = new Date('2025-03-22T09:00:00');

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const padNumber = (num) => String(num).padStart(2, '0');

  return (
    <div style={{ 
      width: '100%',
      height: '100vh', 
      position: 'relative', 
      background: '#000',
      overflow: 'hidden'
    }}>
      <div className="hero-section" style={{ 
        height: '100vh', 
        position: 'relative',
        width: '100%',
        overflow: 'hidden'
      }}>
        <Hyperspeed 
          effectOptions={{
            onSpeedUp: () => { },
            onSlowDown: () => { },
            distortion: 'turbulentDistortion',
            length: 400,
            roadWidth: 10,
            islandWidth: 2,
            lanesPerRoad: 4,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 2,
            carLightsFade: 0.4,
            totalSideLightSticks: 20,
            lightPairsPerRoadWay: 40,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],
            movingAwaySpeed: [60, 80],
            movingCloserSpeed: [-120, -160],
            carLightsLength: [400 * 0.03, 400 * 0.2],
            carLightsRadius: [0.05, 0.14],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.8, 0.8],
            carFloorSeparation: [0, 5],
            colors: {
              roadColor: 0x080808,
              islandColor: 0x0a0a0a,
              background: 0x080C18,
              shoulderLines: 0xFFFFFF,
              brokenLines: 0xFFFFFF,
              leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
              rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
              sticks: 0x03B3C3,
            }
          }}
        />
        <h1 
          className="title z-[9999999]"
          style={{
            '--scroll-progress': scrollProgress,
            opacity: 1 - scrollProgress,
            transform: `scale(${1 - (scrollProgress * 0.3)})`,
          }}
        >
          Ingenium'25
        </h1>
        <div 
          className="countdown-container"
          style={{
            '--scroll-progress': scrollProgress,
            opacity: 1 - scrollProgress,
            transform: `scale(${1 - (scrollProgress * 0.3)})`
          }}
        >
          <div className="countdown-box">
            <div className="countdown-value">{padNumber(timeLeft.days)}</div>
            <div className="countdown-label">Days</div>
          </div>
          <div className="countdown-separator">:</div>
          <div className="countdown-box">
            <div className="countdown-value">{padNumber(timeLeft.hours)}</div>
            <div className="countdown-label">Hours</div>
          </div>
          <div className="countdown-separator">:</div>
          <div className="countdown-box">
            <div className="countdown-value">{padNumber(timeLeft.minutes)}</div>
            <div className="countdown-label">Minutes</div>
          </div>
          <div className="countdown-separator">:</div>
          <div className="countdown-box">
            <div className="countdown-value">{padNumber(timeLeft.seconds)}</div>
            <div className="countdown-label">Seconds</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Temp

// the component will fill the height/width of its parent container, edit the CSS to change this
// the options below are the default values

