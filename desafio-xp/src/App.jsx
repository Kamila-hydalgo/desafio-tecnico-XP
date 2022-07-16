import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Account from './pages/Account/Account';
import Assets from './pages/Assets/Assets';
import Login from './pages/Login/Login';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/assets" element={<Assets />} />
      <Route exact path="/account" element={<Account />} />
    </Routes>
  );
}

export default App;
