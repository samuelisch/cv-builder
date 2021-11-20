import React, { useState } from 'react';
import styled from 'styled-components';
import SectionHeader from './assets/SectionHeader';
import ActionButtons from './sections/ActionButtons';
import CVTemplate from './sections/EmptyCV';
import View from './sections/View';
import Info from './sections/Info';
import Education from './sections/EduExp';
import {v4 as uuidv4} from 'uuid';

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledContainer = styled.div`
  border: 1px solid green;
  width: 658px;
  margin: 50px;
`;

const StyledForm = styled.form`
  padding: 20px;
  .sectionHeader {
    font-size: 2rem;
  }
`;

const Main = () => {
  const [cv, setCV] = useState(CVTemplate);

  const downloadForm = (e) => {
    e.preventDefault();
    console.log('clicked download');
  }

  return (
    <StyledMain>
      <StyledContainer className="mainContainer">
        <StyledForm className="mainForm" onSubmit={downloadForm}>
          <SectionHeader className="info" text="General Info" />
          <Info />
          <SectionHeader className="education" text="Education" />
          <Education />
          <SectionHeader className="work" text="Work Experience" />
        </StyledForm>
      </StyledContainer>

      <StyledContainer>
        <View />
        <ActionButtons />
      </StyledContainer>
    </StyledMain>
  )
}

export default Main;