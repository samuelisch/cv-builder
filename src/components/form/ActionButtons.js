import React from 'react';
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

const ActionButtons = ({ info, addInstance, removeInstance }) => {
  return (
    <div>
      {info.length > 0 && 
        <StyledRemoveButton className="removeWork" type="button" clickHandler={removeInstance} text="Remove" />
      }
      <StyledAddButton className="addWork" type="button" clickHandler={addInstance} text="Add" />
    </div>
  )
}

export default ActionButtons;