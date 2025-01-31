import React from 'react';
import styled from 'styled-components';

const NameCard = (props) => {
  return (
    <StyledWrapper>
      <div>
        <img  className="w-fit h-fit card " src={props.image}/>
      </div>
      <p className='font-secFont1 text-3xl text-white pl-3 pt-2'>{props.name}</p>
      <p className='font-secFont1 text-2xl text-white pl-3 pt-1'>{props.post}</p>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
   width: 12.5rem;
   height: 17rem;
   background-color: pink;
   border-radius: 1rem;
   border: #212121 0.2rem solid;
   transition: all 0.4s ease-in;
   box-shadow: 0.4rem 0.4rem 0.6rem #00000040;
  }

  .card:hover {
   transform: translateY(-1.5rem);
   border: #f2295bf0 0.2em solid;
   border-radius: 2.5rem 0 2.5rem 0;
  }`;

export default NameCard;
