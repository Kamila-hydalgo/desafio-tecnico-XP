import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Account from './pages/Account/Account';
import Assets from './pages/Assets/Assets';
import Login from './pages/Login/Login';
import TradeAsset from './pages/TradeAsset/TradeAsset';
import GlobalStyles from './styles/global';
import defaultTheme from './styles/themes/default';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/assets" element={<Assets />} />
        <Route path="/assets/:asset/:id" element={<TradeAsset />} />
        <Route path="/account" element={<Account />} />
      </Routes>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
