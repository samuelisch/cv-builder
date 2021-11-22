import React, { useState } from 'react';
import styled from 'styled-components';
import Form from './form/MainForm';
import View from './view/MainView';
// import DownloadButton from './view/DownloadButton';"" TEMPORARY
import {v4 as uuidv4} from 'uuid';

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1320px) {
    flex-direction: row;
    justify-content: space-around;

    .mainView {
      max-height: 877px;
      position: sticky;
      top: 50px;
    }
  }
`;

const StyledContainer = styled.div`
  border: 1px solid green;
  width: 620px;
  margin: 30px 20px;
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
  const [education, setEducation] = useState([]);
  const [work, setWork] = useState([]);
  const [expertise, setExpertise] = useState({
    expertise: "",
    portfolio : "",
    items: []
  })

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

  const addExpertiseInstance = () => {
    let itemsCopy = [...expertise.items]
    itemsCopy.push(
      {
        id: uuidv4(),
        example: "",
      },
    )
    setExpertise({...expertise, items: itemsCopy})
  }

  const removeExpertiseInstance = () => {
    let itemsCopy = [...expertise.items]
    itemsCopy.pop()
    setExpertise({...expertise, items: itemsCopy})
  }

  const changeExpertise = (e, uniqueId) => {
    const targetValue = e.target.value
    let items = expertise.items
    const newItems = items.map(item => {
      if (item.id === uniqueId) {
        item.example = targetValue
      }
      return item
    })
    setExpertise({...expertise, items: newItems})
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
          expertise={expertise.items}
          changeExpertise={changeExpertise}
          addExpertiseInstance={addExpertiseInstance}
          removeExpertiseInstance={removeExpertiseInstance}
        />
      </StyledContainer>
      <StyledContainer className="mainView">
        {/*<DownloadButton />*/""}
        <View 
          userInfo={userInfo}
          educationInfo={education}
          workInfo={work}
          expertiseInfo={expertise}
        />
      </StyledContainer>
    </StyledMain>
  )
}

export default Main;