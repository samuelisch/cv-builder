import React from 'react';
import styled from 'styled-components';

const StyledSectionHeader = styled.h2`
  margin-bottom: 0;
`;

const StyledLine = styled.hr`
  margin-top: 0;
  border-top: 1px solid rgb(10, 10, 10);
`;

const SectionHeader = ({ className, text }) => {
  return (
    <div>
      <StyledSectionHeader className={`sectionHeader ${className}`}>{text}</StyledSectionHeader>
      <StyledLine />
    </div>
  )
}

export default SectionHeader;