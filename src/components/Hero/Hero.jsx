import React from 'react';
import './Hero.css';
import photoOne from '../../assets/media/images/photoone.jpg';
import photoThree from '../../assets/media/images/photothree.jpg';
import photoFour from '../../assets/media/images/photofour.jpg';




const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-images">
        <div className="hero-image hero-image-one">
          <img src={photoOne} alt="Hero" />
        </div>
        <div className="hero-image hero-image-two">
          <img src={photoThree} alt="Hero" />
        </div>
        <div className="hero-image hero-image-three">
          <img src={photoFour} alt="Hero" />
        </div>
      </div>
      <div className="hero-text">
        <h1>Your Hero Title</h1>
        <p>Your hero section description goes here. Add more text as needed.</p>
      </div>
    </div>
  );
};

export default Hero;
