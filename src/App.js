
import './App.css';
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import Home from './Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ErrorPage" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
