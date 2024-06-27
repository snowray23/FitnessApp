import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Exercises from './components/Exercises';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>  {/* Use Routes instead of Route */}
        <Route path="/" element={<Home />} />
        <Route path="/exercises" element={<Exercises />} />
      </Routes>
    </Router>
  );
};

export default App;