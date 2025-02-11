import React from "react";
import photoOne from '../../assets/media/images/photoone.jpg';
import photoThree from '../../assets/media/images/photothree.jpg';
import Spiral from "../../assets/media/svg/spiral.svg";
import Spark from "../../assets/media/svg/spark.svg";

const HeroSection = () => {
  return (
    <section className="hero-container">
      {/* Hero Images */}
      <div className="hero-images">
        <div className="image image-one">
          <img src={photoOne} alt="Diverse group of people collaborating" />
        </div>
        <div className="image image-two">
          <img src={photoThree} alt="Group of children learning together" />
        </div>
        <div className="statistic">
          <h2>150k</h2>
          <p>...to be impacted</p>
        </div>
      </div>

      {/* Decorative Elements */}
      <img className="hero-doodle" src={Spiral} alt="Spiral decorative element" />
      <img className="hero-spark" src={Spark} alt="Spark decorative element" />

      {/* Hero Content */}
      <article className="hero-content">
        <h1>How We’re Making a Difference</h1>
        <p>
          We are raising awareness for teachers and parents about learning disabilities like 
          <strong> Dyslexia, Dyscalculia, and ADHD</strong> in Morocco and Nigeria, ensuring all students receive the support they need.
        </p>

        {/* Features Section */}
        <div className="features">
          <FeatureItem 
            icon="🎓" 
            text="Empowering Teachers: Training teachers to recognize learning disabilities and apply effective strategies in the classroom." 
          />
          <FeatureItem 
            icon="👨‍👩‍👧‍👦" 
            text="Building Awareness: Raising awareness among parents and educators to improve support for students with learning disabilities." 
          />
        </div>

        <p>
          We measure our impact by tracking the number of awareness sessions and training programs conducted, continuously improving our reach and effectiveness.
        </p>

        <button className="learn-more-btn">Learn More</button>
      </article>
    </section>
  );
};

// Reusable Feature Component
const FeatureItem = ({ icon, text }) => (
  <div className="feature-item">
    <span className="icon">{icon}</span>
    <p>{text}</p>
  </div>
);

export default HeroSection;
