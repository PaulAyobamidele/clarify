import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import layout components
import Navbar from "./components/layout/Navbar/Navbar.jsx";
import Header from "./components/layout/Header/Header.jsx";
import Footer from "./components/layout/Footer/Footer.jsx";

// Import other components
import Hero from "./components/Hero/Hero.jsx";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import Awareness from "./components/Awareness/Awareness.jsx";
import Training from "./components/Training/Training.jsx";
import CTA from "./components/CTA/CTA.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Executive from "./components/Executives/Executive.jsx";
import MyChatbot from "./components/Chat/Chatbot.jsx";
import Difference from "./components/Difference/Difference.jsx";
import Events from "./components/Events/Event.jsx";

// Sequential Page Component
const HomePage = () => {
  return (
    <div>
      <Header />
      <Difference />
      <Hero />
      <Executive />
      <AboutUs />
      <Awareness />
      <Training />
      <CTA />
      <Contact />
      <Events />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* All components sequentially rendered on the homepage */}
        <Route path="/" element={<HomePage />} />
        {/* Keep individual routes functional */}
        <Route path="/header" element={<Header />} />
        <Route path="/executives" element={<Executive />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/awareness" element={<Awareness />} />
        <Route path="/training" element={<Training />} />
        <Route path="/cta" element={<CTA />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
      </Routes>
      <Footer />

      {/* The chatbot is placed outside the Routes, so it appears on all pages */}
      <MyChatbot />
    </Router>
  );
}

export default App;
