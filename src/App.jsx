import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Navbar } from './Components/NavComponent/NavComponent.jsx';
import { Main } from './PageComponents/Router.jsx';
import { Footer } from './Components/FooterComponent/FooterComponent.jsx';
import './Styles/Index.scss'

function App() {

  return (
    <Router>
      <Navbar bgColor="#fff" ulColor="tomato" />
      <Main/>
    <Footer/>
    </Router>
  )
}

export default App

