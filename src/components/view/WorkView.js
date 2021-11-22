import React from 'react';
import styled from 'styled-components';

const StyledInstance = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  font-size: 1.2rem;

  .titleAndDate {
    font-size: 1.3rem;
    font-weight: bold;
  }

  .double {
    display: flex;
    justify-content: space-between;
  }

  .position {
    font-style: italic;
  }

  .description {
    font-family: Georgia;
    margin: 5px 0 0;
    padding: 0 15px;
    overflow-wrap: break-word;
  }
`;

const WorkView = ({ workInfo }) => {
  const workInstances = workInfo.map(instance => (
    <StyledInstance key={instance.id}>
      <div className="titleAndDate double">
        <div className="name">{instance.company}</div>
        <div className="date">{instance.from} - {instance.to}</div>
      </div>
      <div className="position double">
        <div>{instance.position}</div>
        <div>{instance.city}</div>
      </div>
      {instance.description && 
        <ul className="description">
          <li>{instance.description}</li>
        </ul>
      }
    </StyledInstance>
  ))
  return (
    <div>
      {workInstances}
    </div>
  )
}

export default WorkView;