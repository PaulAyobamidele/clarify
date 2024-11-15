// Navbar.jsx
import React from 'react';
import './navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">clarify</div>
            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About us</a></li>
                <li><a href="#causes">Awareness</a></li>
                <li><a href="#page">Training</a></li>
                <li><a href="#donation">Donation</a></li>
                <li><a href="#blog">Contact US</a></li>
            </ul>
            <div className="contact-info">
                <button className="donate-button">Donation</button>
            </div>
        </nav>
    );
};

export default Navbar;
