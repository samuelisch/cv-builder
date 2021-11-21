import React, { useState } from 'react';
import styled from 'styled-components';
import SectionHeader from './assets/SectionHeader';
import ActionButtons from './sections/ActionButtons';
import View from './sections/View';
import Info from './sections/Info';
import Education from './sections/Education';
import Work from './sections/Work';
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
    let userCopy = {...userInfo}
    userCopy[id] = value
    setUserInfo(userCopy)
  }

  const changeEducation = (e, uniqueId) => {
    const targetId = e.target.id
    if (targetId === 'from' || targetId === 'to') {
      e.target.value = e.target.value.slice(0, 4)
    }
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
  }

  const addEducationInstance = () => {
    const educationCopy = [...education]
    educationCopy.push(
      {
        id: uuidv4(),
        schoolName: "",
        city: "",
        major: "",
        from: "",
        to: "",
        description: "",
      },
    )
    setEducation(educationCopy)
  }

  const removeEducationInstance = () => {
    const educationCopy = [...education]
    educationCopy.pop()
    setEducation(educationCopy)
  }

  const changeWork = (e, uniqueId) => {
    const targetId = e.target.id
    if (targetId === 'from' || targetId === 'to') {
      e.target.value = e.target.value.slice(0, 4)
    }
    const targetValue = e.target.value
    const newWork = work.map(instance => {
      if (instance.id === uniqueId) {
        let instanceCopy = {...instance}
        instanceCopy[targetId] = targetValue
        return instanceCopy
      }
      return instance
    })
    setWork(newWork)
  }

  const addWorkInstance = () => {
    const workCopy = [...work]
    workCopy.push(
      {
        id: uuidv4(),
        company: "",
        position: "",
        city: "",
        from: "",
        to: "",
        description: "",
      },
    )
    setWork(workCopy)
  }

  const removeWorkInstance = () => {
    const workCopy = [...work]
    workCopy.pop()
    setWork(workCopy)
  }

  return (
    <StyledMain>
      <StyledContainer className="mainContainer">
        <StyledForm className="mainForm">
          <SectionHeader className="info" text="General Info" />
          <Info changeHandler={changeUserInfo} user={userInfo} />
          <SectionHeader className="education" text="Education" />
          <Education changeHandler={changeEducation} education={education} addInstance={addEducationInstance} removeInstance={removeEducationInstance} />
          <SectionHeader className="work" text="Work Experience" />
          <Work changeHandler={changeWork} work={work} addInstance={addWorkInstance} removeInstance={removeWorkInstance} />
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