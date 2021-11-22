import React from 'react';
import WorkExp from './WorkExp';
import ActionButtons from './ActionButtons'

const Work = ({ changeHandler, work, addInstance, removeInstance }) => {
  const workInstances = work.map(instance => (
    <WorkExp
      key={instance.id}
      id={instance.id}
      work={instance}
      changeHandler={changeHandler}
    />
  ));

  return (
    <div>
      {workInstances}
      <ActionButtons addInstance={addInstance} removeInstance={removeInstance} />
    </div>
  )
}

export default Work;