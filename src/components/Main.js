import React, { useState } from 'react';
import styled from 'styled-components';
import SectionHeader from './assets/SectionHeader';
import ActionButtons from './sections/ActionButtons';
import View from './sections/View';
import Info from './sections/Info';
import Education from './sections/Education';
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
  const [userInfo, setUserInfo] = useState(
    {
      firstName: "",
      lastName: "",
      city: "",
      email: "",
      number: "",
      portfolio: "",
    }
  );
  const [education, setEducation] = useState(
    [
      {
        id: uuidv4(),
        schoolName: "",
        city: "",
        major: "",
        from: "",
        to: "",
        description: "",
      },
    ]
  );
  const [work, setWork] = useState(
    [
      {
        id: uuidv4(),
        company: "",
        position: "",
        city: "",
        from: "",
        to: "",
        description: "",
      },
    ],
  );

  const changeUserInfo = (e) => {
    const id = e.target.id
    const value = e.target.value
    let objCopy = {...userInfo}
    objCopy[id] = value
    setUserInfo(objCopy)
    console.log(userInfo)
  }

  const changeEducation = (e, uniqueId) => {
    const targetId = e.target.id
    const targetValue = e.target.value
    const newEducation = education.map(instance => {
      if (instance.id === uniqueId) {
        let instanceCopy = {...instance}
        instanceCopy[targetId] = targetValue
        return instanceCopy
      }
      return instance
    })
    setEducation(newEducation)
    console.log(education)
  }

  const downloadForm = (e) => {
    e.preventDefault();
    console.log('clicked download');
  }

  return (
    <StyledMain>
      <StyledContainer className="mainContainer">
        <StyledForm className="mainForm" onSubmit={downloadForm}>
          <SectionHeader className="info" text="General Info" />
          <Info changeHandler={changeUserInfo} user={userInfo} />
          <SectionHeader className="education" text="Education" />
          <Education changeHandler={changeEducation} education={education} />
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