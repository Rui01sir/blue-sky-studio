import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hompage from './components/Homepage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hompage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
