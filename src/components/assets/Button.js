import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  border-radius: 10px;
  border: 1px solid black;
  background-color: grey;

  ${({ type }) => 
    type === 'submit' &&
    css`
      &:hover {
        background-color: lightblue;
      }
  `}

  ${({ text }) => 
    text === 'Reset form' &&
    css`
      &:hover {
        background-color: red;
      }
  `}

  ${({ text }) => 
    text === 'Download template' &&
    css`
      &:hover {
        background-color: green;
      }
  `}
`;

const Button = ({ type, clickHandler, text}) => {
  return (
    <StyledButton type={type} onClick={clickHandler} >{text}</StyledButton>
  )
}

export default Button;