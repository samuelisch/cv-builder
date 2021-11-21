import React from 'react';
import WorkExp from './WorkExp';
import Button from '../assets/Button'
import styled from 'styled-components'

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
      <StyledRemoveButton className="removeWork" type="button" clickHandler={removeInstance} text="Remove" />
      <StyledAddButton className="addWork" type="button" clickHandler={addInstance} text="Add" />
    </div>
  )
}

export default Work;