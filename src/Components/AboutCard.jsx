import React from "react";
import styled from "styled-components";

const AboutCard = (props) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="card2">
            <img className="w-[190px] h-[254px] rounded-[20px]" src={props.image} />
        </div>
      </div>
      <p className="font-secFont1 text-3xl text-[#C90F5B] pl-3 pt-2">
        {props.name}
      </p>
      <p className="font-secFont1 text-2xl text-white pl-3">
        {props.post}
      </p>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 190px;
    height: 254px;
    background-image: linear-gradient(163deg, white 0%, #C90F5B 100%);
    border-radius: 20px;
    transition: all 0.6s;
  }

  .card2 {
    width: 190px;
    height: 254px;
    background-color: #ffffff;
    border-radius: 20px;
    transition: all 0.4s;
  }

  .card2:hover {
    transform: scale(0.96);
    border-radius: 20px;
  }

  .card:hover {
    box-shadow: 0px 0px 30px 1px rgba(201, 15, 91, 0.5);
  }
`;

export default AboutCard;
