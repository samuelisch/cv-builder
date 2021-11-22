import React from 'react';
import SectionHeader from '../assets/SectionHeader';
import InfoView from './InfoView';
import styled from 'styled-components';
import EducationView from './EducationView';

const StyledTemplate = styled.div`
  font-family: Garamond;
  font-size: 1.1rem;
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: 877px;
`;

const View = (props) => {
  const { userInfo, educationInfo, workInfo } = props
  return (
    <StyledTemplate>
      <InfoView userInfo={userInfo} />
      <SectionHeader className="educationView" text="EDUCATION" />
      <EducationView educationInfo={educationInfo} />
      <SectionHeader className="workView" text="WORK EXPERIENCE"/>
    </StyledTemplate>
  )
}

export default View;