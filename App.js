import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Stories from './components/Stories';
import Settings from './components/Settings';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-blue-500 p-4">
          <div className="container mx-auto flex justify-between">
            
            <Link to="/" className="text-white text-lg mr-4">Home</Link>
            <Link to="/stories" className="text-white text-lg mr-4">Stories</Link>
            <Link to="/settings" className="text-white text-lg">Settings</Link>
          </div>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
