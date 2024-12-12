import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {Home} from './HomePage/HomePage.jsx';
import {About} from './AboutPage/AboutPage.jsx';

export const Main = () => {

    return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
    </Routes>
    )
  }