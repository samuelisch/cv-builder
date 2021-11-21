import React from 'react';
import styled from 'styled-components';
import Input from '../assets/Input';

const StyledSectionContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
`;

const StyledTwoSides = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = ({ changeHandler, user }) => {
  const { firstName, lastName, city, email, number, portfolio } = user

  return (
    <StyledSectionContainer>
      <StyledTwoSides>
        <Input 
          inputId="firstName" 
          labelText="First name*"
          type="text"
          inputValue={firstName}
          changeHandler={changeHandler}
          required={true}
        />
        <Input 
          inputId="lastName"
          labelText="Last name"
          type="text"
          inputValue={lastName}
          changeHandler={changeHandler}
          required={false}
        />
      </StyledTwoSides>
      <Input 
        inputId="city"
        labelText="City"
        type="text"
        inputValue={city}
        changeHandler={changeHandler}
        required={false}
      />
      <StyledTwoSides>
        <Input 
          inputId="email"
          labelText="E-mail*"
          type="email"
          inputValue={email}
          changeHandler={changeHandler}
          required={true}
        />
        <Input 
          inputId="number"
          labelText="Contact number*"
          type="number"
          inputValue={number}
          changeHandler={changeHandler}
          required={true}
        />
      </StyledTwoSides>
      <Input 
        inputId="portfolio"
        labelText="LinkedIn / Portfolio site"
        inputValue={portfolio}
        changeHandler={changeHandler}
        required={false}
      />
    </StyledSectionContainer>
  )
}

export default Info;