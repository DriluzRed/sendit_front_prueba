import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Lista from './components/Lista';
import Formulario from './components/Formulario';

import ENV from './components/env';
function App() {
  useEffect(() => {
    fetch(`${ENV.BACK_URL}savesource`)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
  }
  , []);
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Lista />} />
          <Route path="/crear" element={<Formulario />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
