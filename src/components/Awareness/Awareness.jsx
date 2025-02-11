import React, { useState, useEffect } from "react";
import "./Awareness.css";

// Importing images from src/assets/images/slide
import Slide1 from "../../assets/media/outreach/rabat.jpg";
import Slide2 from "../../assets/media/outreach/fes.jpg";
import Slide3 from "../../assets/media/outreach/fes2.jpg";

const slides = [
  {
    id: 1,
    title: "Empowering Communities",
    subtitle: "Creating awareness for a better tomorrow.",
    image: Slide1,
  },
  {
    id: 2,
    title: "Inspiring Change",
    subtitle: "Together, we can make a difference.",
    image: Slide2,
  },
  {
    id: 3,
    title: "Transforming Lives",
    subtitle: "Awareness is the first step towards action.",
    image: Slide3,
  },
];

const Awareness = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 1200); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="hero-slideshow">
      <div
        className="slide"
        style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
      >
        <div className="slide-content">
          <h1>{slides[currentIndex].title}</h1>
          <p>{slides[currentIndex].subtitle}</p>
        </div>
      </div>
      <button className="prev" onClick={goToPrevious}>
        &#10094;
      </button>
      <button className="next" onClick={goToNext}>
        &#10095;
      </button>
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Awareness;
