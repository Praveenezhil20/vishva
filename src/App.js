
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcomepage from './components/Welcomepage';
import './App.css'
import AnotherPage from './components/AnotherPage'; // Import your target page component
import Signup from './components/signup'; 
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcomepage />} />
        <Route path="/another" element={<AnotherPage />} />
        <Route path="/signup" element={< Signup/>} /> {/* Define your route */}
      </Routes>
    </Router>
    
  );
}

export default App;
