import React from 'react';
import styled from 'styled-components';
import Input from '../assets/Input';

const StyledSectionContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;

  #description {
    width: 100%;
    height: 80px;
  }
`;

const StyledTwoSides = styled.div`
  display: flex;
  justify-content: space-between;
`;

const WorkExp = ({ changeHandler, work, id }) => {
  const {company, city, position, from, to, description} = work

  return (
    <StyledSectionContainer>
      <StyledTwoSides>
        <Input 
          inputId="company"
          labelText="Name of Company"
          inputValue={company}
          changeHandler={(e) => changeHandler(e, id)}
          required={false}
        />
        <Input 
          inputId="city"
          labelText="City"
          type="text"
          inputValue={city}
          changeHandler={(e) => changeHandler(e, id)}
          required={false}
        />
      </StyledTwoSides>
      <Input 
        inputId="position"
        labelText="Title of Position"
        type="text"
        inputValue={position}
        changeHandler={(e) => changeHandler(e, id)}
        required={false}
      />
      <StyledTwoSides>
        <Input 
          inputId="from"
          labelText="From Year"
          placeholderText="YYYY"
          type="number"
          inputValue={from}
          changeHandler={(e) => changeHandler(e, id)}
          required={false}
        />
        <Input 
          inputId="to"
          labelText="To Year"
          placeholderText="YYYY"
          type="number"
          inputValue={to}
          changeHandler={(e) => changeHandler(e, id)}
          required={false}
        />
      </StyledTwoSides>
      <Input
        inputId="description"
        labelText="Description"
        inputValue={description}
        changeHandler={(e) => changeHandler(e, id)}
        required={false}
      />
    </StyledSectionContainer>
  )
}

export default WorkExp;