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

const DownloadButton = ({ handleClick }) => {
  return (
    <StyledButtons>
      <Button className="download" type="button" text="Download PDF" clickHandler={handleClick} />
    </StyledButtons>
  )
}

export default DownloadButton;