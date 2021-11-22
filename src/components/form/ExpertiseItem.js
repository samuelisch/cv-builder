import React from 'react';
import styled from 'styled-components';
import Input from '../assets/Input';

const StyledSectionContainer = styled.div`
  width: 70%;
  margin-bottom: 10px;
`;

const ExpertiseItem = ({ changeHandler, expertise, id }) => {
  const {example} = expertise

  return (
    <StyledSectionContainer>
      <Input 
        inputId="text"
        labelText="Subject"
        inputValue={example}
        changeHandler={(e) => changeHandler(e, id)}
        required={false}
      />
    </StyledSectionContainer>
  )
}

export default ExpertiseItem