import React, { useState } from 'react';
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

const Info = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userCity, setUserCity] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [portfolio, setPortfolio] = useState('');

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  }

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  }

  const handleUserCityChange = (e) => {
    setUserCity(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handleNumberChange = (e) => {
    setNumber(e.target.value)
  }

  const handlePortfolioChange = (e) => {
    setPortfolio(e.target.value)
  }

  return (
    <StyledSectionContainer>
      <StyledTwoSides>
        <Input 
          inputId="firstName" 
          labelText="First name*"
          type="text"
          inputValue={firstName}
          changeHandler={handleFirstNameChange}
          required={true}
        />
        <Input 
          inputId="lastName"
          labelText="Last name"
          type="text"
          inputValue={lastName}
          changeHandler={handleLastNameChange}
          required={false}
        />
      </StyledTwoSides>
      <Input 
        inputId="city"
        labelText="City"
        type="text"
        inputValue={userCity}
        changeHandler={handleUserCityChange}
        required={false}
      />
      <StyledTwoSides>
        <Input 
          inputId="email"
          labelText="E-mail*"
          type="email"
          inputValue={email}
          changeHandler={handleEmailChange}
          required={true}
        />
        <Input 
          inputId="number"
          labelText="Contact number*"
          type="number"
          inputValue={number}
          changeHandler={handleNumberChange}
          required={true}
        />
      </StyledTwoSides>
      <Input 
        inputId="portfolio"
        labelText="LinkedIn / Portfolio site"
        inputValue={portfolio}
        changeHandler={handlePortfolioChange}
        required={false}
      />
    </StyledSectionContainer>
  )
}

export default Info;