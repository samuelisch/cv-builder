import React from 'react';
import SectionHeader from '../assets/SectionHeader';
import InfoView from './InfoView';
import styled from 'styled-components';
import EducationView from './EducationView';
import WorkView from './WorkView';
import ExpertiseView from './ExpertiseView';

const StyledTemplate = styled.div`
  font-family: Garamond;
  font-size: 1.1rem;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  height: 877px;
`;

const View = (props) => {
  const { userInfo, educationInfo, workInfo, expertiseInfo } = props
  return (
    <StyledTemplate id="capture">
      <InfoView userInfo={userInfo} />
      {educationInfo.length > 0 && 
        <>
          <SectionHeader className="educationView" text="EDUCATION" />
          <EducationView educationInfo={educationInfo} />
        </>
      }
      {workInfo.length > 0 && 
        <>
          <SectionHeader className="workView" text="WORK EXPERIENCE"/>
          <WorkView workInfo={workInfo} />
        </>
      }
      {expertiseInfo.items.length > 0 &&
        <>
          <SectionHeader className="expertiseView" text="EXPERTISE" />
          <ExpertiseView expertiseInfo={expertiseInfo} />
        </>
      }
    </StyledTemplate>
  )
}

export default View;