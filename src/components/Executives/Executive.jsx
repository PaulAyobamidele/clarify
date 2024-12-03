import React, { useState } from 'react';
import './executive.css';
import Paul from '../../assets/media/images/executives/Ayobamidele.jpg';
import Chris from '../../assets/media/images/executives/Christianah.jpg';
import Segun from '../../assets/media/images/executives/Omotunde.jpg';
import Samuel from '../../assets/media/images/executives/Samuel.png';

const executives = [
  {
    id: 1,
    name: "Paul ADUBI",
    role: "Chief Executive Officer",
    image: Paul,
    about: "Paul oversees the company strategy and ensures operational efficiency.",
    linkedin: "https://www.linkedin.com/in/pauladubi",
    email: "paul.adubi@example.com"
  },
  {
    id: 2,
    name: "Christianah OYEWALE",
    role: "Chief Operating Officer",
    image: Chris,
    about: "Christianah manages the daily operations and ensures smooth processes.",
    linkedin: "https://www.linkedin.com/in/christianahoyewale",
    email: "christianah.oyewale@example.com"
  },
  {
    id: 3,
    name: "Segun OMOTUNDE",
    role: "Chief Financial Officer",
    image: Segun,
    about: "Segun is responsible for financial planning and risk management.",
    linkedin: "https://www.linkedin.com/in/segunomotunde",
    email: "segun.omotunde@example.com"
  },
  {
    id: 4,
    name: "Samuel GYASI-KOBINA",
    role: "Chief Technology Officer",
    image: Samuel,
    about: "Samuel leads the development of cutting-edge technological solutions.",
    linkedin: "https://www.linkedin.com/in/samuelgyasi-kobina",
    email: "samuel.gyasi@example.com"
  }
];

const Executive = () => {
  const [selectedExecutive, setSelectedExecutive] = useState(null);

  const handleViewProfile = (executive) => {
    setSelectedExecutive(executive);
  };

  const handleCloseOverlay = () => {
    setSelectedExecutive(null);
  };

  return (
    <div className="executive__container">
      <h1>Meet the Executives</h1>
      <div className="executive-grid">
        {executives.map((executive) => (
          <div className="executive-item" key={executive.id}>
            <img src={executive.image} alt={executive.name} />
            <h3>{executive.name}</h3>
            <p>{executive.role}</p>
            <button onClick={() => handleViewProfile(executive)}>View Profile</button>
          </div>
        ))}
      </div>

      {selectedExecutive && (
        <div className="overlay">
          <div className="overlay-content">
            <button className="close-button" onClick={handleCloseOverlay}>
              &times;
            </button>
            <img src={selectedExecutive.image} alt={selectedExecutive.name} />
            <h2>{selectedExecutive.name}</h2>
            <p><strong>Role:</strong> {selectedExecutive.role}</p>
            <p><strong>About:</strong> {selectedExecutive.about}</p>
            <div className="socials">
              <a href={selectedExecutive.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href={`mailto:${selectedExecutive.email}`}>Email</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Executive;
