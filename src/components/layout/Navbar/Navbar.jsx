import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll"; // Import scroll functionality
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">clarify</div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link> {/* Works with React Router */}
        </li>
        <li>
          <ScrollLink to="difference" smooth={true} duration={500}>
            What we are
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="hero" smooth={true} duration={500}>
            About Us
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="executives" smooth={true} duration={500}>
            Executives
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="awareness" smooth={true} duration={500}>
            Awareness
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="training" smooth={true} duration={500}>
            Outreaches
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="cta" smooth={true} duration={500}>
            Gallery
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="contact" smooth={true} duration={500}>
            Contact Us
          </ScrollLink>
        </li>
      </ul>
      <div className="contact-info">
        <button className="donate-button">Donation</button>
      </div>
    </nav>
  );
};

export default Navbar;
