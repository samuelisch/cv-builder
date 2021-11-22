import React from 'react';
import styled from 'styled-components';

const StyledList = styled.ul`
  padding: 0 15px;
`;

const StyledInstance = styled.li`
  font-family: Georgia;
  margin: 5px 0 0;
`;

const ExpertiseView = ({ expertiseInfo }) => {
  const expertiseInstances = expertiseInfo.items.map(instance => (
    <StyledInstance key={instance.id}>
      {instance.example}
    </StyledInstance>
  ))

  return (
    <StyledList>
      {expertiseInstances}
    </StyledList>
  )
}

export default ExpertiseView