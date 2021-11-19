import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div``;

const StyledInput = styled.input``;

const Input = ({ inputId, type, labelText, placeholderText, changeHandler, inputValue, required }) => {
  return (
    <StyledContainer>
      <label htmlFor={inputId}>{labelText}</label>
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