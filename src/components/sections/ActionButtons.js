import React from 'react';
import Button from '../assets/Button';
import styled from 'styled-components';

const ResetButton = styled(Button)`
  &:hover {
    background: red;
  }
`;

const DownloadButton = styled(Button)`
&:hover {
  background: green;
}
`;

const ActionButtons = ({ clearForm, downloadHandler }) => {
  return (
    <div>
      <ResetButton className="reset" type="button" clickHandler={clearForm} text="Reset form"/>
      <DownloadButton className="download" type="submit" clickHandler={downloadHandler} text="Download PDF" />
    </div>
  )
}

export default ActionButtons;