import React from 'react';
import './executive.css';
import Paul from "../../assets/media/images/executives/Ayobamidele.jpg";
import Segun from "../../assets/media/images/executives/Omotunde.jpg";
import Samuel from "../../assets/media/images/executives/Samuel.png";
import Chris from "../../assets/media/images/executives/Christianah.jpg";
import Arrow from "../../assets/media/svg/arrow.svg";

const Executive = () => {
  return (
    <div className="executive-grid">
      <div className="executive-item">
        <img src={Paul} alt="Executive 1" />
        <h3>Paul ADUBI</h3>
        <p>Chief Executive Officer</p>
        <button>View Profile</button>
      </div>
      <div className="executive-item">
        <img src={Chris} alt="Executive 2" />
        <h3>Christianah OYEWALE</h3>
        <p>Chief Operating Officer</p>
        <button>View Profile</button>
      </div>
      <div className="executive-item">
        <img src={Segun} alt="Executive 3" />
        <h3>Segun OMOTUNDE</h3>
        <p>Chief Financial Officer</p>
        <button>View Profile</button>
      </div>
      <div className="executive-item">
        <img src={Samuel} alt="Executive 4" />
        <h3>Samuel GYASI-KOBINA</h3>
        <p>Chief Technology Officer</p>
        <button>View Profile</button>
      </div>

      <div className="arrow-doodle">
        <img src={Arrow} alt="Decorative Arrow" />
      </div>

    </div>
  );
};

export default Executive;
