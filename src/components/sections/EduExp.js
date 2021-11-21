import React from 'react';
import styled from 'styled-components';
import Input from '../assets/Input';

const StyledSectionContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;

  #schoolDescription {
    width: 100%;
    height: 80px;
  }
`;

const StyledTwoSides = styled.div`
  display: flex;
  justify-content: space-between;
`;

const EduExp = ({ changeHandler, education, id }) => {
  const {schoolName, city, major, from, to, description} = education

  return (
    <StyledSectionContainer>
      <StyledTwoSides>
        <Input 
          inputId="schoolName"
          labelText="Name of Institute"
          inputValue={schoolName}
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
        inputId="major"
        labelText="Title of Study"
        type="text"
        inputValue={major}
        changeHandler={(e) => changeHandler(e, id)}
        required={false}
      />
      <StyledTwoSides>
        <Input 
          inputId="from"
          labelText="Commenced Year"
          placeholderText="YYYY"
          type="number"
          inputValue={from}
          changeHandler={(e) => changeHandler(e, id)}
          required={false}
        />
        <Input 
          inputId="to"
          labelText="Expected / Graduation Year"
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

export default EduExp;