import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Login from './Pages/Login';
import HomeMap from './Pages/HomeMap';
import StreetView from './Pages/StreetView';
import { GoogleMap, DirectionsService, useLoadScript, DirectionsRenderer } from '@react-google-maps/api';

import Preferences from './Pages/Preferences';
import Leaderboard from './Pages/Leaderboard';
// import ContactPage from './page/ContactPage';

const App = () => {
  const { isLoaded } = useLoadScript({ 
    googleMapsApiKey: 'AIzaSyBOlRdYQnAAxd2x_MP0GcXrBhS6PthaaDk',
  });
  console.log('....');
  if(!isLoaded) return <></>
  return (
    <Router>
      <Routes>
          <Route path="/map" element={
          <>
            <StreetView/>
            <HomeMap/>
          </>
          } />
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<HomePage/>} />
           <Route path="/" element={<Login/>} />
           <Route path="/home" element={<HomePage/>} />
           <Route path="/preferences" element={<Preferences/>} />
           <Route path="/Leaderboard" element={<Leaderboard/>} />
      </Routes>
    </Router>
    );
};

export default App;