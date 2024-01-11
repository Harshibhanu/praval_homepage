import React from 'react';
import Homepage from './components/homepage';
import Whypraval from './components/whypraval';
import Life from './components/life at praval';
import Signin from './components/signin';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/whypraval" element={<Whypraval/>} />
        <Route path="/lifeatpraval" element={<Life/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Router>
  );
}



