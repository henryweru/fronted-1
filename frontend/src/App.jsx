import React from 'react';
import Home from './components/Home';
import Water from './components/Water';
import Meals from './components/Meals';
import Login from './components/Login'
import SideNavBar from './components/SideNavBar';
import { Routes ,Route } from 'react-router-dom';

function App(){
  return(
    <div>
    <SideNavBar />

    <Routes>
    <Route path="/Home" element={<Home />} />
    <Route path="/Water" element={< Water/>} />
    <Route path="/Meals" element={<Meals />} />
    <Route path="/Login" element={<Login />} />
    </Routes>
    </div>
  )
}

export default App;