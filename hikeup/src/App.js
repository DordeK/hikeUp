import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Login from './Pages/Login';
// import ContactPage from './page/ContactPage';

const App = () => {
  console.log('....');
  return (
    <Router>
      <Routes>
           <Route path="/login" element={<Login/>} />
           <Route path="/" element={<HomePage/>} />
      </Routes>
    </Router>
    );
};

export default App;