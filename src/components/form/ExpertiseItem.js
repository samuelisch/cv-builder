import React from 'react';
import styled from 'styled-components';
import Input from '../assets/Input';

const StyledSectionContainer = styled.div`
  width: 100%;
  margin-bottom: 10px;

  #text {
    width: 100%;
    overflow-wrap: break-word;
  }
`;

const ExpertiseItem = ({ changeHandler, expertise, id }) => {
  const {example} = expertise

  return (
    <StyledSectionContainer>
      <Input 
        inputId="text"
        labelText="Subject"
        placeholderText="Discipline: subjects"
        inputValue={example}
        changeHandler={(e) => changeHandler(e, id)}
        required={false}
      />
    </StyledSectionContainer>
  )
}

export default ExpertiseItem