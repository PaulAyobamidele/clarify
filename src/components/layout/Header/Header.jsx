import React from 'react';
import './Header.css'; 
import Navbar from '../Navbar/Navbar.jsx';

const Header = () => {
  return (
    <header className="header">
    <Navbar />
    <div className="header-content">
        <p className="header-subtitle">Breaking Barriers, One Step at a Time</p>
        <h1 className="header-title">
              Empowering Every Learner
        </h1>
        <button className="donation-button">Get in Touch</button>
        {/* <button className="video-button">
            <span>▶</span> How we’re making a difference
        </button> */}
    </div>
</header>
  );
}

export default Header;
