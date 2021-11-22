import React, { useState } from 'react';
import styled from 'styled-components';
import Form from './form/MainForm';
import View from './view/MainView';
import DownloadButton from './view/DownloadButton';
import {v4 as uuidv4} from 'uuid';

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledContainer = styled.div`
  border: 1px solid green;
  width: 620px;
  margin: 50px;
`;

const Main = () => {
  const [userInfo, setUserInfo] = useState(
    {
      firstName: "Samuel",
      lastName: "Chan",
      city: "Singapore",
      email: "cwksamuel@gmail.com",
      number: "91120075",
      portfolio: "www.linkedin.com/in/samuel-chan-4622bba3",
    }
  );
  const [education, setEducation] = useState(
    [
      {
        id: uuidv4(),
        schoolName: "National University of Singapore",
        city: "Singapore",
        major: "Graduate Certificate in Computing - *currently ongoing part-time",
        from: "2021",
        to: "2022",
        description: "Led several outreach workshops conducted for the public’s music enrichment",
      },
      {
        id: uuidv4(),
        schoolName: "Nanyang Academy of Fine Arts / Royal College of Music",
        city: "Singapore / London",
        major: "Bachelor of Music with Honours (BMus)",
        from: "2018",
        to: "2020",
        description: "Represented student body in module feedback and the school’s adoption of more frequent chamber group formations and performances",
      }
    ]
  );
  const [work, setWork] = useState(
    [
      {
        id: uuidv4(),
        company: "Aureus Academy ",
        position: "Administrative Executive",
        city: "Singapore",
        from: "2020",
        to: "2021",
        description: "Largest music education business in Singapore, I worked with a team of five others in sales, client follow-ups and Salesforce support, in phone and in person, while handling all operating aspects of the branch’s existing 1800 enrolled students under 50 teachers",
      },
      {
        id: uuidv4(),
        company: "MOE Freelance Instrumental Tutor ",
        position: "Clarinet coach for school bands",
        city: "Singapore",
        from: "2018",
        to: "2020",
        description: "As clarinet tutor of several secondary and primary school bands, I drew up weekly lesson plans for each session per school, and ensured proper delivery of theory and performance practices",
      },
    ],
  );
  const [expertise, setExpertise] = useState({
    expertise: "",
    portfolio : "",
    items: []
  }
  )

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
      <StyledContainer>
        <View 
          userInfo={userInfo}
          educationInfo={education}
          workInfo={work}
          expertiseInfo={expertise}
        />
      </StyledContainer>
      <DownloadButton />
    </StyledMain>
  )
}

export default Main;