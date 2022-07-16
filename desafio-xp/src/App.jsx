import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';

function App() {
  <div>Desafio Técnico XP </div>;
  return (
    <BrowserRouter>
      <Route>
        <Routes exact path="/" component={Login} />
      </Route>

    </BrowserRouter>

  );
}

export default App;
