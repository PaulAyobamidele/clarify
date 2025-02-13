import React from "react";
import "./footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="overall_footer">
      <div className="footer_top">
        <div className="footer_section">
          <h3>About Us</h3>
          <p>
            We empower children with learning disabilities in Africa through
            inclusive education, advocacy, and teacher training.
          </p>
        </div>
        <div className="footer_section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="footer_section">
          <h3>Contact Us</h3>
          <p>
            123 Main Street, Suite 500
            <br />
            YourCity, YourCountry
            <br />
            Email: <a href="mailto:info@example.com">info@example.com</a>
            <br />
            Phone: <a href="tel:+1234567890">+1 234-567-890</a>
          </p>
        </div>
        <div className="footer_section">
          <h3>Follow Us</h3>
          <div className="social_icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://youtu.be/chQL3n1GVac"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <p>&copy; {new Date().getFullYear()} Clarify. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
