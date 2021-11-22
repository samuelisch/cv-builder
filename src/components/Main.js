import React, { useState } from 'react';
import styled from 'styled-components';
import Form from './form/MainForm';
import View from './view/MainView';
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
        <Form
          userInfo={userInfo}
          changeUserInfo={changeUserInfo}
          education={education}
          changeEducation={changeEducation}
          addEducationInstance={addEducationInstance}
          removeEducationInstance={removeEducationInstance}
          work={work}
          changeWork={changeWork}
          addWorkInstance={addWorkInstance}
          removeWorkInstance={removeWorkInstance}
        />
      </StyledContainer>
      <StyledContainer>
        <View />
      </StyledContainer>
    </StyledMain>
  )
}

export default Main;