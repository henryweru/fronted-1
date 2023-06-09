import React from 'react';
import { Link } from "react-router-dom";
import './SideNavBar.css'

const SideNavBar = () => {
  return (
    
    <div className="list">
    <Link to="/Home">Home</Link>
    <Link to ="/water">Water</Link>
    <Link to="/Meals">Meals</Link>
    <Link to="/Login">Login</Link>
    </div>
    
  );
};

export default SideNavBar;
