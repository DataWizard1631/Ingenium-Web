import React from "react";
import styled from "styled-components";

const AboutCard = (props) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="card2">
          <div className="glitch-wrapper">
            <img className="w-full h-full object-cover" src={props.image} />
            <div className="glitch-effect"></div>
            <div className="tech-scanline"></div>
          </div>
          <div className="overlay">
            <div className="tech-border"></div>
            <div className="social-links">
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="info-container font-secFont1">
        <div className="tech-line"></div>
        <div className="tech-corners"></div>
        <p className="name">{props.name}</p>
        <p className="post">{props.post}</p>
        <div className="tech-line"></div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 100%;
  max-width: 280px;
  min-width: 240px;
  margin: 0 auto;
  perspective: 1000px;
  
  .card {
    width: 100%;
    aspect-ratio: 3/4;
    background: linear-gradient(45deg, #C90F5B 0%, rgba(201, 15, 91, 0.2) 100%);
    border-radius: 12px;
    padding: 2px;
    position: relative;
    overflow: hidden;
    transform-style: preserve-3d;
    transition: transform 0.5s ease;
    
    &::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: linear-gradient(
        45deg,
        transparent,
        transparent 40%,
        rgba(201, 15, 91, 0.6),
        transparent 60%,
        transparent
      );
      transform: rotate(45deg);
      animation: shine 3s infinite;
    }
  }

  .tech-scanline {
    position: absolute;
    width: 100%;
    height: 2px;
    background: rgba(201, 15, 91, 0.5);
    top: 0;
    animation: scan 2s linear infinite;
  }

  @keyframes scan {
    0% {
      top: 0;
    }
    100% {
      top: 100%;
    }
  }

  .card2 {
    width: 100%;
    height: 100%;
    background-color: #1a1a1a;
    position: relative;
    overflow: hidden;
    backdrop-filter: blur(5px);
    border-radius: 10px;
    box-shadow: 0 8px 16px rgba(201, 15, 91, 0.15);
  }

  .glitch-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 10px;
  }

  .glitch-effect {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      transparent 65%,
      rgba(201, 15, 91, 0.1) 70%,
      rgba(201, 15, 91, 0.7) 80%,
      transparent 90%
    );
    mix-blend-mode: screen;
    opacity: 0;
    transition: all 0.3s ease;
  }

  .tech-border {
    position: absolute;
    inset: 0;
    border: 1px solid #C90F5B;
    clip-path: polygon(
      0 0, 100% 0, 100% 100%, 
      95% 100%, 95% 5%, 
      5% 5%, 5% 95%, 
      95% 95%, 95% 100%, 
      0 100%
    );
    opacity: 0;
    transition: all 0.3s ease;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(26, 26, 26, 0);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: all 0.4s ease;
    border-radius: 10px;
  }

  .social-links {
    display: flex;
    gap: clamp(20px, 4vw, 35px);
    transform: translateY(20px);
    transition: all 0.4s ease;
  }

  .social-icon {
    color: #C90F5B;
    font-size: clamp(24px, 4vw, 32px);
    transition: all 0.3s ease;
    position: relative;
    
    &:hover {
      color: white;
      transform: translateY(-5px) scale(1.1);
      text-shadow: 0 0 10px rgba(201, 15, 91, 0.8);
    }
  }

  .info-container {
    margin-top: 15px;
    padding: 12px;
    position: relative;
    transform: translateY(0);
    transition: all 0.3s ease;
    background: rgba(26, 26, 26, 0.6);
    border-radius: 8px;
    backdrop-filter: blur(5px);
    border: 1px solid rgba(201, 15, 91, 0.2);
  }

  .tech-corners::before,
  .tech-corners::after {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    border: 1px solid #C90F5B;
  }

  .tech-corners::before {
    top: 0;
    left: 0;
    border-right: none;
    border-bottom: none;
  }

  .tech-corners::after {
    bottom: 0;
    right: 0;
    border-left: none;
    border-top: none;
  }

  .tech-line {
    height: 2px;
    background: linear-gradient(90deg, transparent, #C90F5B, transparent);
    margin: 6px 0;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  .name {
    font-family: var(--secFont1);
    font-size: clamp(1.25rem, 3vw, 1.75rem);
    color: #C90F5B;
    margin: 6px 0 3px 0;
    text-align: center;
    font-weight: 600;
    text-shadow: 0 0 15px rgba(201, 15, 91, 0.4);
  }

  .post {
    font-family: var(--secFont1);
    font-size: clamp(0.9rem, 2vw, 1.2rem);
    color: white;
    text-align: center;
    opacity: 0.9;
    letter-spacing: 1.2px;
  }

  .card:hover {
    transform: translateZ(15px);
    
    .overlay {
      opacity: 1;
      background: rgba(26, 26, 26, 0.9);
    }
    
    .tech-border {
      opacity: 1;
    }
    
    .social-links {
      transform: translateY(0);
    }
    
    .glitch-effect {
      opacity: 1;
      animation: glitch 2s infinite;
    }
  }

  &:hover {
    .tech-line {
      transform: scaleX(1);
    }
    
    .info-container {
      transform: translateY(-5px);
    }
  }

  @keyframes glitch {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }

  @keyframes shine {
    0% {
      transform: translateX(-200%) translateY(-200%) rotate(45deg);
    }
    100% {
      transform: translateX(200%) translateY(200%) rotate(45deg);
    }
  }
`;

export default AboutCard;