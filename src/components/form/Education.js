import React from 'react';
import EduExp from './EduExp';
import Button from '../assets/Button';
import styled from 'styled-components';

const StyledAddButton = styled(Button)`
  font-size: 1.5rem;
  background: rgb(120, 255, 120);
  &:hover {
    background: rgb(120, 240, 120);
  }
  margin: 10px;
`;

const StyledRemoveButton = styled(Button)`
  font-size: 1.5rem;
  background: rgb(255, 120, 120);
  &:hover {
    background: rgb(240, 120, 120);
  }
  margin: 10px;
`;

const Education = ({ changeHandler, education, addInstance, removeInstance }) => {
  const educationInstances = education.map(instance => (
    <EduExp
      key={instance.id}
      id={instance.id}
      education={instance}
      changeHandler={changeHandler}
    />
  ));

  return (
    <div>
      {educationInstances}
      <StyledRemoveButton className="removeEducation" type="button" clickHandler={removeInstance} text="Remove" />
      <StyledAddButton className="addEducation" type="button" clickHandler={addInstance} text="Add" />
    </div>
  )
}

export default Education;