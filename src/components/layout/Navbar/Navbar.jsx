import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">clarify</div>
      <ul className="nav-links">
        {/* Use anchor tags for smooth scrolling within the page */}
        <li><a href="#header">Home</a></li> 
        <li><a href="#hero">About Us</a></li> 
        <li><a href="#executives">Executives</a></li> 
        <li><a href="#awareness">Awareness</a></li> 
        <li><a href="#training">Training</a></li> 
        <li><a href="#cta">Donation</a></li> 
        <li><a href="#contact">Contact Us</a></li> 
      </ul>
      <div className="contact-info">
        <button className="donate-button">Donation</button>
      </div>
    </nav>
  );
};

export default Navbar;
