import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Account from './pages/Account/Account';
import Assets from './pages/Assets/Assets';
import Login from './pages/Login/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/account" element={<Account />} />
      <Route path="/assets" element={<Assets />} />
    </Routes>
  );
}

export default App;
