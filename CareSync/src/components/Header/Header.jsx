import React, { useState } from 'react';
import './Header.css';
import {NavLink } from 'react-router-dom';
import logo from '../../assets/CareSync_logo.jpeg'
const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="Health & Wellness" />
      </div>

      {/* Navigation Links */}
      <nav className="nav-links">
     
        <NavLink to="/" >Home</NavLink>
        <a href="#about">About Us</a>
        <a href="#programs">Programs</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button type="submit">🔍</button>
      </div>

      {/* User Profile Icon */}
      <div className="profile-icon">
        <a href="#profile">
           Login
        </a>
        <NavLink to="/Admin">Admin</NavLink>
        
      </div>

      {/* Theme Switcher */}
      <div className="theme-switcher">
        <button onClick={toggleTheme}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </header>
  );
};

export default Header;
