/* eslint no-unused-vars : "off" */
import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='header-navbar'>
      <div className='logo'>
        <img alt='logo' src='./logo.png' />
      </div>
      <div className="header-logo">
        <h3>Space Traveler's Hub</h3>
      </div>
      <div className="header-nav">
        <ul className="header-nav_ul">
          <li className="rockets">
            <NavLink to='/' exact>Rockets</NavLink>
          </li>
          <li className="missions">
          <NavLink to='/Missions' exact>Missions</NavLink>
          </li>
          <li className="profile">
          <NavLink to='/Profile' exact>My Profile</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;