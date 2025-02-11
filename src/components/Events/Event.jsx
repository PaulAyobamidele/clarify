import React from "react";
import "./event.css";

import nigeriaFlag from "../../assets/media/flags/Nigeria.gif";
import senegalFlag from "../../assets/media/flags/senegal.gif";
import liberiaFlag from "../../assets/media/flags/liberia.gif";
import congoFlag from "../../assets/media/flags/congo.gif";
import ghanaFlag from "../../assets/media/flags/ghana.gif";
import camerounFlag from "../../assets/media/flags/cameron.gif";
import gambiaFlag from "../../assets/media/flags/gambia.gif";
import namibiaFlag from "../../assets/media/flags/Namibia.gif";
import moroccoFlag from "../../assets/media/flags/morocco.gif";
import beninFlag from "../../assets/media/flags/benin.gif";

const Events = () => {
  // ✅ Corrected: Merge SVG and Image Flags into One Array

  const countries = [
    { name: "Nigeria", flag: <img src={nigeriaFlag} alt="Nigeria Flag" /> },
    { name: "Senegal", flag: <img src={senegalFlag} alt="Senegal Flag" /> },
    { name: "Liberia", flag: <img src={liberiaFlag} alt="Liberia Flag" /> },
    { name: "Congo", flag: <img src={congoFlag} alt="Congo Flag" /> },
    { name: "Ghana", flag: <img src={ghanaFlag} alt="Ghana Flag" /> },
    { name: "Cameroun", flag: <img src={camerounFlag} alt="Cameroun Flag" /> },
    { name: "Gambia", flag: <img src={gambiaFlag} alt="Gambia Flag" /> },
    { name: "Namibia", flag: <img src={namibiaFlag} alt="Namibia Flag" /> },
    { name: "Morocco", flag: <img src={moroccoFlag} alt="Morocco Flag" /> },
    { name: "Benin", flag: <img src={beninFlag} alt="Benin Flag" /> },
  ];

  return (
    <div className="events-page">
      {/* Gallery Section */}
      <section className="gallery-section">
        <h2>Gallery</h2>
        <div className="gallery-filters">
          <button>All</button>
          <button>Nigeria</button>
          <button>Kenya</button>
          <button>USA</button>
        </div>
        <div className="gallery-grid">
          <img src="/images/event1.jpg" alt="Event 1" />
          <img src="/images/event2.jpg" alt="Event 2" />
          <img src="/images/event3.jpg" alt="Event 3" />
          <img src="/images/event4.jpg" alt="Event 4" />
          <img src="/images/event5.jpg" alt="Event 5" />
          <img src="/images/event6.jpg" alt="Event 6" />
          <img src="/images/event7.jpg" alt="Event 7" />
          <img src="/images/event8.jpg" alt="Event 8" />
        </div>
      </section>

      {/* Outreaches Section */}
      <section className="outreach-section">
        <h2>Our Outreaches</h2>
        <p>
          We have impacted lives through several outreach programs worldwide.
        </p>
        <div className="outreach-cards">
          <div className="outreach-card">
            <h3>Africa Tech Drive</h3>
            <p>
              Empowering young tech enthusiasts in Africa with hands-on
              training.
            </p>
          </div>
          <div className="outreach-card">
            <h3>STEM for Girls</h3>
            <p>
              Encouraging young girls to explore Science, Technology,
              Engineering, and Math.
            </p>
          </div>
        </div>
      </section>

      {/* Scrolling Flags Section */}
      <section className="flags-section">
        <h2>Countries We've Impacted</h2>
        <div className="flags-container">
          <div className="flags-slider">
            {countries.map((country, index) => (
              <div key={index} className="flag-item">
                {country.flag} {/* Render either SVG or Image */}
                <p>{country.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers & Statistics */}
      <section className="stats-section">
        <h2>Our Impact</h2>
        <div className="stats-grid">
          <div className="stat-item">
            <h3>4+</h3>
            <p>Events Organized</p>
          </div>
          <div className="stat-item">
            <h3>300+</h3>
            <p>People Reached</p>
          </div>
          <div className="stat-item">
            <h3>20+</h3>
            <p>Countries Reached</p>
          </div>
        </div>
      </section>

      {/* Partners & Sponsors */}
      <section className="partners-section">
        <h2>Our Partners & Sponsors</h2>
        <div className="partners-logos">
          <img src="/images/partner1.png" alt="Partner 1" />
          <img src="/images/partner2.png" alt="Partner 2" />
          <img src="/images/partner3.png" alt="Partner 3" />
        </div>
      </section>
    </div>
  );
};

export default Events;
