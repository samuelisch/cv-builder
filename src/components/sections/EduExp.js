import React, { useState } from 'react';
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

const Education = () => {
  const [school, setSchool] = useState('');
  const [schoolCity, setSchoolCity] = useState('');
  const [major, setMajor] = useState('');
  const [studyFromDate, setStudyFromDate] = useState('');
  const [studyToDate, setStudyToDate] = useState('');
  const [schoolDescription, setSchoolDescription] = useState('')

  const handleSchoolChange = (e) => {
    setSchool(e.target.value);
  }

  const handleSchoolCityChange = (e) => {
    setSchoolCity(e.target.value);
  }

  const handleMajorChange = (e) => {
    setMajor(e.target.value);
  }

  const handleStudyFromDateChange = (e) => {
    setStudyFromDate(e.target.value.slice(0, 4));
  }

  const handleStudyToDateChange = (e) => {
    setStudyToDate(e.target.value.slice(0, 4));
  }

  const handleSchoolDescriptionChange = (e) => {
    setSchoolDescription(e.target.value)
  }

  return (
    <StyledSectionContainer>
      <StyledTwoSides>
        <Input 
          inputId="school"
          labelText="Name of Institute"
          inputValue={school}
          changeHandler={handleSchoolChange}
          required={false}
        />
        <Input 
          inputId="city"
          labelText="City"
          type="text"
          inputValue={schoolCity}
          changeHandler={handleSchoolCityChange}
          required={false}
        />
      </StyledTwoSides>
      <Input 
        inputId="major"
        labelText="Title of Study"
        type="text"
        inputValue={major}
        changeHandler={handleMajorChange}
        required={false}
      />
      <StyledTwoSides>
        <Input 
          inputId="from"
          labelText="Commenced Year"
          placeholderText="YYYY"
          type="number"
          inputValue={studyFromDate}
          changeHandler={handleStudyFromDateChange}
          required={false}
        />
        <Input 
          inputId="from"
          labelText="Expected / Graduation Year"
          placeholderText="YYYY"
          type="number"
          inputValue={studyToDate}
          changeHandler={handleStudyToDateChange}
          required={false}
        />
      </StyledTwoSides>
      <Input
        inputId="schoolDescription"
        labelText="Description"
        inputValue={schoolDescription}
        changeHandler={handleSchoolDescriptionChange}
        required={false}
      />
    </StyledSectionContainer>
  )
}

export default Education