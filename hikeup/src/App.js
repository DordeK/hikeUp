import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Login from './Pages/Login';
import Preferences from './Pages/Preferences';
import Leaderboard from './Pages/Leaderboard';
// import ContactPage from './page/ContactPage';

const App = () => {
  console.log('....');
  return (
    <Router>
      <Routes>
           <Route path="/" element={<Login/>} />
           <Route path="/home" element={<HomePage/>} />
           <Route path="/preferences" element={<Preferences/>} />
           <Route path="/Leaderboard" element={<Leaderboard/>} />
      </Routes>
    </Router>
    );
};

export default App;