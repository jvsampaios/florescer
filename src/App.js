import React from 'react';

import { Normalize } from 'styled-normalize';

import Routes from './routes';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Theme from './styles/Theme';
import GlobalStyle from './styles/global';

function App() {
  return (
    <Theme>
      <BrowserRouter/>
      <Routes/>
      <GlobalStyle />
      <Normalize />
    </Theme>
  );
}

export default App;
