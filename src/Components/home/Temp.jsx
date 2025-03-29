import React, { useEffect, useState } from 'react'
import Hyperspeed from './Hyperspeed';
import Confetti from 'react-confetti';
import './Temp.css';

const Temp = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  const [isAnimatingCountdown, setIsAnimatingCountdown] = useState(false);

  // Handle window resize for confetti
  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Existing scroll handler
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
    const targetDate = new Date('2025-03-28T00:00:00');
    const confettiEndTime = new Date('2025-03-29T00:00:00');

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate - now;

      // Check if we're in the confetti window
      if (now >= targetDate && now <= confettiEndTime) {
        if (!isAnimatingCountdown) {
          // Start the countdown animation
          setIsAnimatingCountdown(true);
          setTimeLeft({
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 15
          });

          // Animate countdown to zero
          const animateCountdown = () => {
            setTimeLeft(prev => {
              if (prev.seconds > 0) {
                return { ...prev, seconds: prev.seconds - 1 };
              } else if (prev.minutes > 0) {
                return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
              } else if (prev.hours > 0) {
                return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
              } else if (prev.days > 0) {
                return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
              }
              return { days: 0, hours: 0, minutes: 0, seconds: 0 };
            });
          };

          // Run animation every 20ms (fast countdown)
          const animationInterval = setInterval(() => {
            animateCountdown();
          }, 200);

          // After animation, show confetti
          setTimeout(() => {
            clearInterval(animationInterval);
            setShowConfetti(true);
            setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
          }, 3500); // Animation duration
        }
      } else if (difference > 0) {
        setShowConfetti(false);
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setShowConfetti(false);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [isAnimatingCountdown]);

  const padNumber = (num) => String(num).padStart(2, '0');

  return (
    <div style={{ 
      width: '100%',
      height: '100vh', 
      position: 'relative', 
      background: '#000',
      overflow: 'hidden'
    }}>
      {showConfetti && (
        <Confetti
          width={windowDimensions.width}
          height={windowDimensions.height}
          numberOfPieces={200}
          recycle={true}
          colors={['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff']}
        />
      )}
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
          className="title z-[9999999] mt-8"
          style={{
            '--scroll-progress': scrollProgress,
            opacity: 1 - scrollProgress,
            transform: `scale(${1 - (scrollProgress * 0.3)})`,
          }}
        >
          {showConfetti ? "Ingenium'25 is Live!" : "Ingenium'25"}
        </h1>
        {/* <div 
          className="countdown-container"
          style={{
            '--scroll-progress': scrollProgress,
            opacity: 1 - scrollProgress,
            transform: `scale(${1 - (scrollProgress * 0.3)})`
          }}
        >
          <div className="countdown-box">
            <div className={`countdown-value ${isAnimatingCountdown ? 'animating' : ''}`}>{padNumber(timeLeft.days)}</div>
            <div className="countdown-label">Days</div>
          </div>
          <div className="countdown-separator">:</div>
          <div className="countdown-box">
            <div className={`countdown-value ${isAnimatingCountdown ? 'animating' : ''}`}>{padNumber(timeLeft.hours)}</div>
            <div className="countdown-label">Hours</div>
          </div>
          <div className="countdown-separator">:</div>
          <div className="countdown-box">
            <div className={`countdown-value ${isAnimatingCountdown ? 'animating' : ''}`}>{padNumber(timeLeft.minutes)}</div>
            <div className="countdown-label">Minutes</div>
          </div>
          <div className="countdown-separator">:</div>
          <div className="countdown-box">
            <div className={`countdown-value ${isAnimatingCountdown ? 'animating' : ''}`}>{padNumber(timeLeft.seconds)}</div>
            <div className="countdown-label">Seconds</div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Temp

// the component will fill the height/width of its parent container, edit the CSS to change this
// the options below are the default values

