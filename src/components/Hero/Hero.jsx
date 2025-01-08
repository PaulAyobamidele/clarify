import React from 'react';
import './Hero.css';
import photoOne from '../../assets/media/images/photoone.jpg';
import photoThree from '../../assets/media/images/photothree.jpg';
import Spiral from "../../assets/media/svg/spiral.svg";
import Spark from "../../assets/media/svg/spark.svg";

const Hero = () => {
  return (
    <div className="hero__source">
        <div className="about__herosection">
          <div className="hero__vision">
              <h1>Vision Statement</h1>
              <p>A future where every child in Sub-Saharan Africa, Morocco, and Nigeria, regardless of learning ability, 
                has access to inclusive, equitable, and quality education, empowering them to reach their full potential 
                and contribute meaningfully to society.</p>
          </div>

          <div className="hero__mission">
              <h1>Mission Statement</h1>
              <p>To transform education systems in Sub-Saharan Africa, Morocco, and Nigeria by addressing the unique needs of children with learning disabilities through innovative interventions, comprehensive teacher training, community engagement, and evidence-based practices.
                Our mission is to eliminate stigma, enhance diagnostic and support services, and ensure that all children thrive academically, socially, and economically.</p>
          </div>
        </div>


        
        <div className="hero-container">
      <div className="hero-images">
        <div className="image image-one">
          <img src={photoOne} alt="Group of people" />
        </div>
        <div className="image image-two">
          <img src={photoThree} alt="Group of children" />
        </div>
        <div className="statistic">
          <h2>150k</h2>
          <p>...to be impacted</p>
        </div>
      </div>

      <div className="hero-doodle">
        <img src={Spiral} alt="Decorative Doodle" />
      </div>

      <div className="hero-spark">
        <img src={Spark} alt="Decorative Doodle" />
      </div>


      <div className="hero-content">
        <h1>How We’re Making a Difference</h1>
        <p>We are raising awareness for teachers and parents about learning disabilities like dyslexia, dyscalculia, and ADHD in Morocco and Nigeria, ensuring all students receive the support they need.</p>
        <div className="features">
          <div className="feature-item">
            <span className="icon">🎓</span>
            <p>Empowering Teachers: Training teachers to recognize learning disabilities and apply effective strategies in the classroom.</p>
          </div>
          <div className="feature-item">
            <span className="icon">👨‍👩‍👧‍👦</span>
            <p>Building Awareness: Raising awareness among parents and educators to improve support for students with learning disabilities.</p>
          </div>
        </div>
        <p>We measure our impact by tracking the number of awareness sessions and trainings held, continuously improving our reach and effectiveness.</p>
        <button className="learn-more-btn">Learn More</button>
      </div>
    </div>


    </div>

  );
};

export default Hero;
