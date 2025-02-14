import React, { useState } from "react";
import "./executive.css";
import Paul from "../../assets/media/images/executives/Ayobamidele.jpg";
import Chris from "../../assets/media/images/executives/Christianah.jpg";
import Segun from "../../assets/media/images/executives/Omotunde.jpg";
import Samuel from "../../assets/media/images/executives/Samuel.png";

const executives = [
  {
    id: 1,
    name: "Paul ADUBI",
    role: "Chief Executive Officer",
    image: Paul,
    about:
      "I am a Researcher, Software Engineer, and Data Scientist with a proven track record in leadership, innovation, and technical excellence. My expertise spans full-stack development, data-driven decision-making, and fostering team growth. I am committed to continuous learning, using my analytical skills and problem-solving abilities to deliver impactful solutions. I specialize in frameworks such as Django and React, ensuring technical projects align with business goals, and mentoring teams to cultivate a growth mindset. Skilled in AWS, Heroku, and cloud deployment, I excel in stakeholder management and collaboration. Key projects include developing a Django-based school management system, creating scalable APIs, and founding a tech company that delivers tailored web solutions. In addition to my technical work, I am passionate about music and enjoy public speaking on topics related to leadership and technology.",
    linkedin: "https://www.linkedin.com/in/adubiapaul",
    email: "mailto:paul.adubi@um6p.ma",
  },
  {
    id: 2,
    name: "Christianah OYEWALE",
    role: "Director of Advocacy and Partnerships",
    image: Chris,
    about:
      "I am Christianah T. Oyewale, the Partnerships Manager at Clarify. I am a native of Ogbomoso North in Nigeria and a top graduate in all three of my degrees. Due to the difficulties I faced navigating life challenges, I voluntarily dedicated my time to youth mentorship and supporting startups. I advocate for education, leadership, and technology, and I am passionate about making changes and breaking barriers. Currently, I am heading various leadership positions, such as UM6P Nigerian Ambassador, UM6P International Student Club Delegate for Academic Affairs, Secretary for ACM-W Nairobi Chapter, and Secretary for ACM SIGCHI Nigerian Chapter",
    linkedin: "mailto:christianah.oyewale@um6p.ma",
    email: "",
  },
  {
    id: 3,
    name: "Segun OMOTUNDE",
    role: "Program Director",
    image: Segun,
    about:
      "Omotunde Samuel Segun is the Program Director of the Clarify Project, an initiative transforming education for children with learning disabilities in Sub-Saharan Africa, Morocco, and Nigeria. With a strong education background and passion for inclusive learning, Omotunde leads efforts to design innovative interventions for children with ADHD, Dyslexia, Dyscalculia, Language Disorders, and Written Expression Disorders. As a visionary leader, he bridges educational gaps through evidencebased practices, teacher training, and community engagement. Omotunde fosters partnerships with experts, parents, and educators, ensuring environments where all children can thrive academically, socially, and economically, breaking stigmas and promoting culturally relevant teaching.",
    linkedin: "https://www.linkedin.com/in/omotunde-samuel-segun-44428219a",
    email: "omotunde.segun@um6p.ma",
  },
  {
    id: 4,
    name: "Samuel GYASI-KOBINA",
    role: "Adminstrative and Communications Manager",
    image: Samuel,
    about:
      "I am a dedicated professional with a strong foundation in Computer Science and ongoing studies in Collective Intelligence. I focus on enhancing collective wisdom through computer-assisted crowdsourcing, empowering groups to make informed decisions and solve complex problems. With over 15 years of experience leading teams, I inspire individuals toward shared goals and transformative outcomes. As a web developer, I bring ideas to life through coding and design. My passion for Civic Tech drives me to explore how technology can improve governance, public engagement, and societal well-being. I am committed to fostering positive change in my community and professional spheres",
    linkedin: "https://www.linkedin.com/in/samuel-k-gyasi",
    email: "mailto:samuel.gyasi@um6p.ma",
  },
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
            <button onClick={() => handleViewProfile(executive)}>
              View Profile
            </button>
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
            <h3>
              <strong>Role:</strong> {selectedExecutive.role}
            </h3>
            <p>
              <strong></strong> {selectedExecutive.about}
            </p>
            <div className="socials">
              <a
                href={selectedExecutive.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a href={`mailto:${selectedExecutive.email}`}>Email</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Executive;
