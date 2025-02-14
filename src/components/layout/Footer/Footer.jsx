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
            Lot 660, Hay Moulay Rachid.
            <br />
            Ben Guerir, 43150, Morocco
            <br />
            Email:{" "}
            <a href="mailto:gethelp.revayah@gmail.com">
              gethelp.revayah@gmail.com
            </a>
            <br />
            Phone: <a href="tel:+212712588870">+212 712 5888 70</a>
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
              href="https://www.linkedin.com/company/105996923/admin/dashboard/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.youtube.com/watch?v=chQL3n1GVac&list=PLTVSb8AFDFph17dXoOCdiXPmN-luU3PWG"
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
