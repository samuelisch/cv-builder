import React from 'react';
import EduExp from './EduExp';
import ActionButtons from './ActionButtons'

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
      <ActionButtons info={education} addInstance={addInstance} removeInstance={removeInstance} />
    </div>
  )
}

export default Education;