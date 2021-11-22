import React from 'react';
import styled from 'styled-components';
import SectionHeader from '../assets/SectionHeader';
import Info from './Info';
import Education from './Education';
import Work from './Work';
import Expertise from './Expertise';

const StyledForm = styled.form`
  padding: 20px;
  .sectionHeader {
    font-size: 2rem;
  }
`;

const Form = (props) => {
  const { 
    userInfo, 
    changeUserInfo, 
    education, 
    changeEducation,
    addEducationInstance,
    removeEducationInstance,
    work,
    changeWork,
    addWorkInstance,
    removeWorkInstance,
    expertise,
    changeExpertise,
    addExpertiseInstance,
    removeExpertiseInstance
  } = props

  return (
    <StyledForm className="mainForm">
      <SectionHeader className="info" text="General Info" />
      <Info changeHandler={changeUserInfo} user={userInfo} />
      <SectionHeader className="education" text="Education" />
      <Education changeHandler={changeEducation} education={education} addInstance={addEducationInstance} removeInstance={removeEducationInstance} />
      <SectionHeader className="work" text="Work Experience" />
      <Work changeHandler={changeWork} work={work} addInstance={addWorkInstance} removeInstance={removeWorkInstance} />
      <SectionHeader className="expertise" text="Expertise" />
      <Expertise changeHandler={changeExpertise} expertise={expertise} addInstance={addExpertiseInstance} removeInstance={removeExpertiseInstance} />
    </StyledForm>
  )
}

export default Form