import React from 'react';
import Button from '../assets/Button';
import styled from 'styled-components';

const StyledButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .download:hover {
    background: green;
  }
`;

const DownloadButton = () => {
  return (
    <StyledButtons>
      <Button className="download" type="submit" text="Download PDF" />
    </StyledButtons>
  )
}

export default DownloadButton;