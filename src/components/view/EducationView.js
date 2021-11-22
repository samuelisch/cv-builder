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

  .major {
    font-style: italic;
  }

  .description {
    flex: 1;
    font-family: Georgia;
    margin: 0;
    padding: 0 15px;
    overflow-wrap: break-word;
  }
`;


const EducationView = ({ educationInfo }) => {
  const educationInstances = educationInfo.map(instance => (
    <StyledInstance key={instance.id}>
      <div className="titleAndDate double">
        <div className="name">{instance.schoolName}</div>
        <div className="date">{instance.from} - {instance.to}</div>
      </div>
      <div className="major double">
        <div className="major">{instance.major}</div>
        <div>{instance.city}</div>
      </div>
      {instance.description &&
      <ul className="description">
        <li>{instance.description}</li>
      </ul>
      }
    </StyledInstance>
  ));

  return (
    <div>
      {educationInstances}
    </div>
  )
}

export default EducationView