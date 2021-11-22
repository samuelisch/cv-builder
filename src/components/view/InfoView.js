import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.p`
  font-family: Garamond;
  font-size: 3.2rem;
  font-weight: bold;
  margin: 20px 0 5px 0;
`;

const StyledDetails = styled.div`
  font-family: Garamond;
  font-size: 1.3rem;
`;

const StyledLine = styled.hr`
  margin-top: 0;
  border-top: 1px solid rgb(10, 10, 10);
`;

const InfoView = ({ userInfo }) => {
  const { firstName, lastName, city, email, number, portfolio } = userInfo

  return (
    <div>
      <StyledHeader>{firstName} {lastName}</StyledHeader>
      <StyledDetails>
        <span>{email}</span>
        <span> || </span>
        <span>{number}</span>
        {city && 
          <>
          <span> || </span>
          <span>{city}</span>
          <span> || </span>
          </>
        }
        {portfolio && <span>{portfolio}</span>}
      </StyledDetails>
      <StyledLine />
    </div>
  )
}

export default InfoView