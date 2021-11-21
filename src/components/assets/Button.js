import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  border-radius: 5px;
  border: 1px solid black;
  background-color: rgb(240, 240, 240);
`;

const Button = ({ className, type, clickHandler, text}) => {
  return (
    <StyledButton className={className} type={type} onClick={clickHandler} >{text}</StyledButton>
  )
}

export default Button;