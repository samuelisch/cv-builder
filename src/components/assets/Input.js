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

const StyledInput = styled.input`
  width: 175px;
`;

const Input = ({ inputId, type, labelText, placeholderText, changeHandler, inputValue, required}) => {
  return (
    <StyledContainer>
      <StyledLabel htmlFor={inputId}>{labelText}</StyledLabel>
      <StyledInput 
        type={type} 
        id={inputId} 
        placeholder={placeholderText} 
        value={inputValue} 
        onChange={changeHandler} 
        required={required} 
      />
    </StyledContainer>
  )
}

export default Input;