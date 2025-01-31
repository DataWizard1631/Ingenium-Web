import React from 'react';
import styled from 'styled-components';

const InfoCard = () => {
  return (
    <StyledWrapper>
      <div className="book">
        <p>Hello</p>
        <div className="cover">
          <p>Hover Me</p>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .book {
    position: relative;
    border-radius: 10px;
    width: clamp(180px, 80vw, 220px);
    height: clamp(260px, 90vw, 300px);
    background-color: whitesmoke;
    box-shadow: 1px 1px 12px #000;
    transform: preserve-3d;
    perspective: 2000px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
    transition: all 0.3s ease;

    @media (min-width: 768px) {
      &:hover {
        transform: scale(1.05);
      }
    }
  }

  .cover {
    top: 0;
    position: absolute;
    background-color: lightgray;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.5s;
    transform-origin: 0;
    box-shadow: 1px 1px 12px #000;
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media (hover: hover) {
      &:hover {
        transform: rotatey(-80deg);
      }
    }

    @media (hover: none) {
      &:active {
        transform: rotatey(-80deg);
      }
    }
  }

  p {
    font-size: clamp(16px, 5vw, 20px);
    font-weight: bolder;
    text-align: center;
    padding: 1rem;
  }

  @media (max-width: 480px) {
    .book {
      margin: 0 auto;
    }
  }
`;

export default InfoCard;
