import React from 'react';
import WorkExp from './WorkExp';

const Work = ({ changeHandler, work }) => {
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
    </div>
  )
}

export default Work;