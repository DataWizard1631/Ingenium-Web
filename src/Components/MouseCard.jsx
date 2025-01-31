import React from 'react'
import styled from 'styled-components';

function MouseCard() {
  return (
    <StyledWrapper>
      <div className="container noselect">
        <div className="canvas">
          {[...Array(25)].map((_, i) => (
            <div key={i} className={`tracker tr-${i + 1}`} />
          ))}
          <div id="card">
            <p id="prompt">HOVER OVER :D</p>
            <div className="title">look mom,<br />no JS</div>
            <div className="subtitle">
              mouse hover tracker
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .container {
    position: relative;
    width: clamp(150px, 90vw, 190px);
    height: clamp(200px, 90vw, 254px);
    transition: 200ms;
    margin: 0 auto;

    @media (min-width: 768px) {
      &:active {
        width: 180px;
        height: 245px;
      }
    }
  }

  #card {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 1rem;
    background: rgb(255, 255, 255);
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    overflow: hidden;
    
    &:hover {
      box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
  }

  .title {
    font-size: clamp(1rem, 4vw, 1.5rem);
    font-weight: bold;
    text-align: center;
    margin: 1rem 0;
  }

  .subtitle {
    font-size: clamp(0.8rem, 3vw, 1rem);
    text-align: center;
    color: #666;
  }

  #prompt {
    font-size: clamp(0.8rem, 3vw, 1rem);
    text-align: center;
    color: #999;
    margin-bottom: 0.5rem;
  }

  .canvas {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .tracker {
    position: absolute;
    width: 20%;
    height: 20%;
    z-index: 1;
  }

  /* Generate tracker positions dynamically */
  ${[...Array(25)].map((_, i) => `
    .tr-${i + 1} {
      top: ${Math.floor(i / 5) * 20}%;
      left: ${(i % 5) * 20}%;
    }
  `).join('')}

  /* Add hover effects for desktop */
  @media (hover: hover) {
    ${[...Array(25)].map((_, i) => `
      .tr-${i + 1}:hover ~ #card {
        transition: 125ms ease-in-out;
        transform: rotateX(${-20 + Math.floor(i / 5) * 10}deg) 
                 rotateY(${-10 + (i % 5) * 5}deg) 
                 rotateZ(0deg);
      }
    `).join('')}
  }

  .noselect {
    user-select: none;
  }
`;

export default MouseCard;
