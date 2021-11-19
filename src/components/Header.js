import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  width: 100%;
  background: lightblue;

  h1 {
    font-size: 3rem;
    text-align: left;
    padding-left: 10px;
    margin: 15px;
  }
`;

const Header = () => {
  return (
    <StyledHeader> 
      <h1>CV builder</h1>
    </StyledHeader>
  )
}

export default Header;