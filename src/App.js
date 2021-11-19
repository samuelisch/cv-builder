import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root,
  body {
    font-family: Helvetica;
    font-size : 10px;
    background: rgb(250, 250, 250);
    margin: 0;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const App = () => {
  return (
    <div className="content">
      <GlobalStyle />
      <Header />
      <Main />
    </div>
  );
}

export default App;
