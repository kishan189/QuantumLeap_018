// src/App.jsx
import React from 'react';
import DoctorList from './DoctorList';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="app-header">
        <h1>Find the Best Doctors in India</h1>
      </header>
      <main>
        <DoctorList />
      </main>
    </div>
  );
};

export default App;
