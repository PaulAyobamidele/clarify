import React from 'react';
import './App.css';

// Import layout components
import Header from './components/layout/Header/Header.jsx';
import Footer from './components/layout/Footer/Footer.jsx';

// Import other components
import Hero from './components/Hero/Hero.jsx';
import AboutUs from './components/AboutUs/AboutUs';
import Awareness from './components/Awareness/Awareness.jsx';
import Training from './components/Training/Training.jsx';
import CTA from './components/CTA/CTA.jsx';
import Contact from './components/Contact/Contact.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <AboutUs />
      <Awareness />
      <Training />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
