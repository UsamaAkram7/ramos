import React from 'react';
import './navbar.scss';

const Navbar = () => {
  return (
    <div className="top-nav">
      <div className='container'>
        <div className='navbar'>
          <div className="navbar-logo">
            <img className='logo-icon' src="/logo-icon.png" alt="" />
            <a href="#">ramos</a>
          </div>
          <div className="navbar-links">
            <a href="#">Dashboard</a>
            <a href="#">Reports</a>
            <a href="#">Documents</a>
            <a href="#">History</a>
            <a href="#">Settings</a>
          </div>
          <div className="navbar-signup">
            <a href="#">Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
