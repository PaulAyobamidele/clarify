import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import layout components
import Navbar from './components/layout/Navbar/Navbar.jsx'; // Navbar that contains links
import Header from './components/layout/Header/Header.jsx';
import Footer from './components/layout/Footer/Footer.jsx';

// Import other components
import Hero from './components/Hero/Hero.jsx';
import AboutUs from './components/AboutUs/AboutUs.jsx';
import Awareness from './components/Awareness/Awareness.jsx';
import Training from './components/Training/Training.jsx';
import CTA from './components/CTA/CTA.jsx';
import Contact from './components/Contact/Contact.jsx';
import Executive from './components/Executives/Executive.jsx';

function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/executives" element={<Executive />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/awareness" element={<Awareness />} />
        <Route path="/training" element={<Training />} />
        <Route path="/cta" element={<CTA />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer /> 
    </Router>
  );
}

export default App;
