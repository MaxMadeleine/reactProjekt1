import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './Components/NavComponent/NavComponent.jsx';
import { Main } from './Components/Main/Main.jsx';
import './Styles/Index.scss';

import {Home} from './HomePage/HomePage.jsx';
import {About} from './AboutPage/AboutPage.jsx';

function App() {
  return (
    <Router>
      <Navbar bgColor="lightblue" ulColor="green" />
      <Main />
    </Router>
  );
}

export const Main = () => {

    return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
    </Routes>
    )
  }

export default App;