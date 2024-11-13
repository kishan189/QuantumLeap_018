import React, { useState } from 'react';
import './Footer.css';
import logo from '../../assets/CareSync_logo.jpeg'

function Footer() {
    const [useEmail,setUserEmail]=useState("")
    function handleFrom(e){
        e.preventDefault()
        console.log(useEmail)
}
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>CareSync</h2>
          <div>
            <img src={logo} alt=''/>
            </div>
          <div>
            <form onSubmit={(e)=>handleFrom(e)}>
                <div>
                    <input type='email' value={useEmail} onChange={(e)=>setUserEmail(e.target.value)} placeholder='Enter your email id' />
                </div>
                <div>
                    <button type='submit' >Submit</button>
                </div>
            </form>
            <div>
                <p>Emergency</p>
                <p>1021</p>
            </div>
            <div>
                <p>Health Help Line</p>
                <p>1850-100-222-444</p>
            </div>
          </div>
        </div>
        <div className="footer-links">
          <ul>
            <li>Find A Doctor</li>
            <li>Medical Services</li>
            <li>Patient Testimonials</li>
            <li>Value Added Services</li>
            <li>Pay Online</li>
            <li>Apollo Surgery</li>
          </ul>
        </div>
        <div className="footer-links">
          <ul>
            <li>Find A Doctor</li>
            <li>Medical Services</li>
            <li>Patient Testimonials</li>
            <li>Value Added Services</li>
            <li>Pay Online</li>
            <li>Apollo Surgery</li>
          </ul>
        </div>
        <div className="footer-links">
          <ul>
            <li>Find A Doctor</li>
            <li>Medical Services</li>
            <li>Patient Testimonials</li>
            <li>Value Added Services</li>
            <li>Pay Online</li>
            <li>Apollo Surgery</li>
          </ul>
        </div>
        <div className="footer-links">
          <ul>
            <li>Find A Doctor</li>
            <li>Medical Services</li>
            <li>Patient Testimonials</li>
            <li>Value Added Services</li>
            <li>Pay Online</li>
            <li>Apollo Surgery</li>
          </ul>
        </div>
        
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} CareSync. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
