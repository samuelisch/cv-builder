import React, { useState } from 'react';
import styled from 'styled-components';
import SectionHeader from './assets/SectionHeader';

const StyledContainer = styled.div`
  border: 1px solid green;
  width: 100%;
  max-width: 650px;
  margin: 50px;
`;

const StyledForm = styled.form`
  padding: 20px;
  .sectionHeader {
    font-size: 2rem;
  }
`;

const Main = () => {
  return (
    <StyledContainer className="mainContainer">
      <StyledForm>
        <SectionHeader className="info" text="General Info" />
        <SectionHeader className="education" text="Education" />
        <SectionHeader className="work" text="Work Experience" />
      </StyledForm>
    </StyledContainer>
  )
}

export default Main;