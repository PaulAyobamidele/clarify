import React from 'react';
import './Hero.css';
import photoOne from '../../assets/media/images/photoone.jpg';
import photoThree from '../../assets/media/images/photothree.jpg';
// import photoFour from '../../assets/media/images/photofour.jpg';

const Hero = () => {
  return (
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
      <div className="hero-content">
        <h1>How we’re making a difference</h1>
        <p>Alia muciues ex nam, ea facer liber usu, e aliquam platonem est. Ut melo cum comune similique in accumsan noluisse.</p>
        <div className="features">
          <div className="feature-item">
            <span className="icon">👋</span>
            <p>Alia muciues ex nam, ea facer liber usu, e aliquam platonem est. Help us to protect children.</p>
          </div>
          <div className="feature-item">
            <span className="icon">🌍</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in magna ac tellus fringilla eleifend.</p>
          </div>
        </div>
        <p>Donec pellentesque nunc sed neque congue, ut lobortis odio sollicitudin. Curabitur orci orci, maximus necsed.</p>
        <button className="learn-more-btn">Learn More</button>
      </div>
    </div>
  );
};

export default Hero;
