import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login.jsx';
import Cadastro from './Cadastro.jsx';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="cadastro" element={<Cadastro />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
