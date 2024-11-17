
import React, { useEffect, useState } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/CareSync_logo.jpeg';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [userName, setUserName] = useState("User");
  
  const homeNagigate=useNavigate()
  // Check for login data on component mount
  useEffect(() => {
    const obj = JSON.parse(localStorage.getItem("loginData")) || {};
    if (obj && obj["displayName"]) {
      setUserName(obj["displayName"]);
      setIsLogin(true);
     
    } else {
      setUserName("User");
      setIsLogin(false);
    }
  }, [userName]);

  

  // Handle logout functionality
  const handleLocalDelete = () => {
    localStorage.removeItem("loginData");
    setIsLogin(false);
    setUserName("User");
    homeNagigate("/")
  };

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
        <NavLink to="/">Home</NavLink>
        <a href="#about">About Us</a>
        <a href="#programs">Programs</a>
        <NavLink to="/Nutrition">Nutrition</NavLink>
        <NavLink to="/HomePhysicalActivityTracker">Physical Activity Trainer</NavLink>
      </nav>

      {/* Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button type="submit">🔍</button>
      </div>

      {/* User Profile Icon */}
      <div className="nav-links">
        {isLogin ? (
          <button onClick={handleLocalDelete} style={{ marginRight: 15 }}>
            Logout
          </button>
        ) : (
          <NavLink to="/Login" style={{ marginRight: 15 }}>
            Login
          </NavLink>
        )}
        {userName}
        <NavLink to="/Admin" >Admin</NavLink>
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

