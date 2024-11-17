
import React, { useEffect, useState } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/CareSync_logo.jpeg';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [userName, setUserName] = useState("User");

  const homeNagigate = useNavigate()
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
    <>
      

      <header className="header">
        <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ width: "100%",padding: '0'}}>
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <div className="logo">
                <img src={logo} alt="Health & Wellness" />
              </div>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <div className='d-flex'>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#"><NavLink to="/">Home</NavLink></a>
                  </li>
                  {/* <li className="nav-item">
                    <a className="nav-link" href="#"><a href="#about">About Us</a></a>
                  </li> */}
                  <li className="nav-item">
                    <a className="nav-link" href="#"><NavLink to="/Nutrition">Nutrition</NavLink></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#"><NavLink to="/HomePhysicalActivityTracker">Physical Activity Trainer</NavLink></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#"><NavLink to='/book-appointment'> Book Appointment</NavLink></a>
                  </li>
                </div>
                <div className='d-flex'>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      {isLogin ? (
                        <button onClick={handleLocalDelete} style={{ marginRight: 15 }}>
                          Logout
                        </button>
                      ) : (
                        <NavLink to="/Login" style={{ marginRight: 15 }}>
                          Login
                        </NavLink>
                      )}
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="#">{userName}</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#"><NavLink to="/Admin" >Admin</NavLink></a>
                  </li>

                  <li className="nav-item">
                    <div className="theme-switcher">
                      <button onClick={toggleTheme}>
                        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                      </button>
                    </div>
                  </li>

                </div>
              </ul>

            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;

