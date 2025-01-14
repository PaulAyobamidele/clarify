import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">clarify</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li> 
        <li><Link to="/about-us">About Us</Link></li> 
        <li><Link to="/executives">Executives</Link></li> 
        <li><Link to="/awareness">Awareness</Link></li> 
        <li><Link to="/training">Training</Link></li> 
        <li><Link to="/cta">Donation</Link></li> 
        <li><Link to="/contact">Contact Us</Link></li> 
      </ul>
      <div className="contact-info">
        <button className="donate-button">Donation</button>
      </div>
    </nav>
  );
};

export default Navbar;
