import React from 'react';
import ExpertiseItem from './ExpertiseItem';
import ActionButtons from './ActionButtons';

const Expertise = ({ changeHandler, expertise, addInstance, removeInstance }) => {
  const expertiseInstances = expertise.map(instance => (
    <ExpertiseItem 
      key={instance.id}
      id={instance.id}
      expertise={instance}
      changeHandler={changeHandler}
    />
  ));

  return (
    <div>
      {expertiseInstances}
      <ActionButtons info={expertise} addInstance={addInstance} removeInstance={removeInstance} />
    </div>
  )
}

export default Expertise