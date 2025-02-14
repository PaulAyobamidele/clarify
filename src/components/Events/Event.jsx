import React, { useState } from "react";
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

// FES Images
import img1 from "../../assets/media/outreach/Fes/_MG_6351.jpg";
import img3 from "../../assets/media/outreach/Fes/IMG_6339.jpg";
import img4 from "../../assets/media/outreach/Fes/_MG_6354.jpg";
import img16 from "../../assets/media/outreach/Fes/_MG_6355.jpg";
// import img5 from "../../assets/media/outreach/Fes/_MG_6354.jpg";
import img17 from "../../assets/media/outreach/Fes/IMG_6345.jpg";
import img18 from "../../assets/media/outreach/Fes/IMG_6364.jpg";
import img19 from "../../assets/media/outreach/Fes/IMG_6346.jpg";
import img20 from "../../assets/media/outreach/Fes/IMG_6365.jpg";
import img21 from "../../assets/media/outreach/Fes/IMG_6333.jpg";

// Rabat Images
import r1 from "../../assets/media/outreach/Rabat/7K4A9264.jpg";
import r2 from "../../assets/media/outreach/Rabat/7K4A9284.jpg";
import r3 from "../../assets/media/outreach/Rabat/7K4A9281.jpg";
import r4 from "../../assets/media/outreach/Rabat/7K4A9411.jpg";
import r5 from "../../assets/media/outreach/Rabat/7K4A9278.jpg";
import r6 from "../../assets/media/outreach/Rabat/7K4A9333.jpg";
import r7 from "../../assets/media/outreach/Rabat/7K4A9292.jpg";
import r8 from "../../assets/media/outreach/Rabat/7K4A9353.jpg";
import r9 from "../../assets/media/outreach/Rabat/7K4A9402.jpg";
import r10 from "../../assets/media/outreach/Rabat/7K4A9362.jpg";
import r11 from "../../assets/media/outreach/Rabat/7K4A9350.jpg";
import r14 from "../../assets/media/outreach/Rabat/7K4A9408.jpg";

// Beijing Images
import one from "../../assets/media/outreach/Beijing/one.jpg";
import two from "../../assets/media/outreach/Beijing/two.jpg";
import three from "../../assets/media/outreach/Beijing/three.jpg";

const Events = () => {
  // ✅ Corrected: Merge SVG and Image Flags into One Array
  const [selectedCountry, setSelectedCountry] = useState("All");

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

  const galleryImages = {
    Fes: [img1, img3, img4, img16, img17, img18, img19, img20, img21],
    Rabat: [r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r14],
    Beijing: [one, two, three],
  };

  const youtubeVideos = [
    {
      title: "Opening Ceremony",
      url: "https://www.youtube.com/embed/chQL3n1GVac?start=30",
    },
    {
      title: "Panel Discussion",
      url: "https://www.youtube.com/embed/chQL3n1GVac?start=120",
    },
    {
      title: "Keynote Speech",
      url: "https://www.youtube.com/embed/chQL3n1GVac?start=300",
    },
    {
      title: "Q&A Session",
      url: "https://www.youtube.com/embed/chQL3n1GVac?start=600",
    },
    {
      title: "Clarify Project Interview With Wilfried Part One",
      url: "https://www.youtube.com/embed/87vn_D77tzQ",
    },
    {
      title: "Clarify Project Interview With Ms Faith",
      url: "https://www.youtube.com/embed/EXJFGaFLAmk",
    },
    {
      title: "Clarify Project Interview With Mr. Oke",
      url: "https://www.youtube.com/embed/7YwUShQJ1ds",
    },
    {
      title: "Clarify Project Interview With Wilfried Part Two",
      url: "https://www.youtube.com/embed/yBtBWs0O9Zo",
    },
  ];

  return (
    <div className="events-page">
      {/* Outreaches Section */}
      <section className="outreach-section">
        <h2>Our Outreaches</h2>
        <p>
          We have impacted lives through several outreach programs worldwide.
        </p>
        <div className="outreach-cards">
          <div className="outreach-card">
            <h3>Young People's Awareness</h3>
            <p>
              We have visited several meetings with young people and youths to
              not just raise awareness, but also get their feedbacks and
              diverser experiences.
            </p>
          </div>
          <div className="outreach-card">
            <h3>Workshops and Webinars</h3>
            <p>
              We gatherered experts from different yet related fields to share
              their knowledge and experiences with over 70 teachers and Parents
              across Africa.
            </p>
          </div>
          <div className="outreach-card">
            <h3>Special Interviews</h3>
            <p>
              We have conducted several interviews with experts in the field of
              education and child development to share their knowledge and
              experiences with our audience, and also form a basis for needs
              assessments
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
        <h2>Our Impact in Numbers</h2>
        <div className="stats-grid">
          <div className="stat-item">
            <h3>4+</h3>
            <p>Events Organized</p>
          </div>
          <div className="stat-item">
            <h3>200+</h3>
            <p>People Reached</p>
          </div>
          <div className="stat-item">
            <h3>20+</h3>
            <p>Countries Reached</p>
          </div>
        </div>
      </section>

      <section className="live-events-section">
        <h2>Watch Our Live Events</h2>
        <div className="live-events-grid">
          {youtubeVideos.map((video, index) => (
            <div key={index} className="live-event-item">
              <h3>{video.title}</h3>
              <iframe
                width="100%"
                height="250"
                src={video.url}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </section>

      {/* Partners & Sponsors */}
      {/* <section className="partners-section">
        <h2>Our Partners & Sponsors</h2>
        <div className="partners-logos">
          <img src="/images/partner1.png" alt="Partner 1" />
          <img src="/images/partner2.png" alt="Partner 2" />
          <img src="/images/partner3.png" alt="Partner 3" />
        </div>
      </section> */}

      {/* Gallery Section */}
      <section className="gallery-section">
        <h2>Gallery</h2>

        {/* Country Filter Buttons */}
        <div className="gallery-filters">
          {Object.keys(galleryImages).map((country) => (
            <button key={country} onClick={() => setSelectedCountry(country)}>
              {country}
            </button>
          ))}
        </div>

        {/* Image Carousel */}
        <div className="gallery-carousel">
          <div className="gallery-slide">
            {galleryImages[selectedCountry] ? (
              galleryImages[selectedCountry].map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Event in ${selectedCountry}`}
                />
              ))
            ) : (
              <p>Please select an event to view our gallery</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
