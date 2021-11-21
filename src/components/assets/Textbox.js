import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 7px 0;
`;

const StyledLabel = styled.label`
  font-size: 1.4rem;
`;

const StyledTextbox = styled.textarea`
  width: 80%;
  font-family: Helvetica
`;

const Textbox = ({ inputId, type, labelText, placeholderText, changeHandler, inputValue, required}) => {
  return (
    <StyledContainer>
      <StyledLabel htmlFor={inputId}>{labelText}</StyledLabel>
      <StyledTextbox 
        id={inputId} 
        value={inputValue} 
        onChange={changeHandler} 
        required={required}
        rows="5"
      />
    </StyledContainer>
  )
}

export default Textbox;