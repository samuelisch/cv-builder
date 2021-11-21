import React from 'react';
import EduExp from './EduExp';

const Education = ({ changeHandler, education }) => {
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
    </div>
  )
}

export default Education;