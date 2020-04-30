import React from 'react';
import Logo from '../assets/images/logo.png';
import DefaultProfile from '../assets/images/profile.png';
import './navbar.scss';

const Navbar = _ => {
  return (
    <div className="navbar">
      <div className="navbar-item-wrap">
        <div className="navbar-item">
          <img src={ Logo } alt="logo" />
        </div>
        <div className="navbar-item">
          <span>Stack</span>
          <span>Together</span>
        </div>
        <div className="navbar-item right">
          <img className="profile" src={ DefaultProfile } alt="profile_pic" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
