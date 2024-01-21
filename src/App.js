
import logo from './logo.svg';

import './App.css';



// src/App.js



import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MakeBlessing from './components/MakeBlessing';

import Blessing from './components/Blessing';

import Home from './components/Home';



const App = () => {

  return (

    <Router>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/makeBlessing" element={<MakeBlessing />} />

        <Route path="/blessing" element={<Blessing />} />

      </Routes>

    </Router>

  );

};



export default App;