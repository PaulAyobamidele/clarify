import React, { useRef, useEffect } from "react";
import CommunitySVG from "../../assets/media/svg/about-svg/community.svg";
import TeacherTrainingSVG from "../../assets/media/svg/about-svg/training.svg";
import TargetedInterventionsSVG from "../../assets/media/svg/about-svg/intervention.svg";
import ParentalSupportSVG from "../../assets/media/svg/about-svg/support.svg";
import PartnershipBuildingSVG from "../../assets/media/svg/about-svg/partnership.svg";
import MonitoringSVG from "../../assets/media/svg/about-svg/evaluation.svg";
import "./Hero.css";

const Hero = () => {
  const scrollContainerRef = useRef(null);
  const scrollSpeed = 1; // Adjust the scroll speed as needed

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let scrollAmount = 0;

    const scrollInterval = setInterval(() => {
      if (scrollContainer) {
        scrollAmount += scrollSpeed;
        scrollContainer.scrollLeft = scrollAmount;

        // Reset scroll position to create a continuous loop
        if (
          scrollAmount >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth
        ) {
          scrollAmount = 0;
        }
      }
    }, 20); // Adjust the interval timing as needed

    return () => clearInterval(scrollInterval);
  }, [scrollSpeed]);

  return (
    <div className="hero__source">
      <div className="about__herosection">
        <div className="hero__vision">
          <h1>About</h1>
          <p>
            We are a dedicated non-profit organization committed to transforming
            education for children with learning disabilities in Sub-Saharan
            Africa, Morocco, and Nigeria. Our goal is to create inclusive,
            equitable, and high-quality learning environments where every
            child—regardless of their learning ability—has the support they need
            to reach their full potential.
          </p>
          <p>
            We focus on evidence-based interventions, teacher training, and
            community engagement to address the stigma, underdiagnoses, and lack
            of resources that hinder academic and personal growth. Through
            strategic partnerships with schools, government agencies, NGOs, and
            private sponsors, we work to ensure that all children have access to
            the education they deserve.
          </p>
          <p>
            Our team includes educational psychologists, special education
            experts, and technology developers who are passionate about driving
            sustainable change. Together, we are breaking barriers and fostering
            a future where every child can thrive—academically, socially, and
            economically.
          </p>
        </div>
        <div className="hero__vision">
          <h1>Vision Statement</h1>
          <p>
            A future where every child—regardless of their learning ability—has
            access to inclusive, high-quality education, empowering them to
            unlock their full potential and shape a more equitable world.
          </p>
        </div>
        <div className="hero__mission">
          <h1>Mission Statement</h1>
          <p>
            To transform education systems in Sub-Saharan Africa, Morocco, and
            Nigeria by addressing the unique needs of children with learning
            disabilities through innovative interventions, comprehensive teacher
            training, community engagement, and evidence-based practices. Our
            mission is to eliminate stigma, enhance diagnostic and support
            services, and ensure that all children thrive academically,
            socially, and economically.
          </p>
        </div>
        <div className="core-pillars">
          <div className="core-pillars__list" ref={scrollContainerRef}>
            <div className="core-pillars__item">
              <img src={CommunitySVG} alt="Community Engagement" />
              <h3>Community Engagement</h3>
              <p>
                Raise awareness and reduce stigma surrounding learning
                disabilities through campaigns and workshops.
              </p>
            </div>
            <div className="core-pillars__item">
              <img src={TeacherTrainingSVG} alt="Teacher Training" />
              <h3>Teacher Training</h3>
              <p>
                Equip educators with skills to identify and support students
                with learning disabilities effectively.
              </p>
            </div>
            <div className="core-pillars__item">
              <img
                src={TargetedInterventionsSVG}
                alt="Targeted Interventions"
              />
              <h3>Targeted Interventions</h3>
              <p>
                Implement culturally relevant teaching methods and assistive
                technologies, such as phonics-based literacy programs, numeracy
                games, speech therapy, and tools like speech-to-text software.
              </p>
            </div>
            <div className="core-pillars__item">
              <img src={MonitoringSVG} alt="Monitoring and Evaluation" />
              <h3>Monitoring and Evaluation</h3>
              <p>
                Develop and maintain data systems to measure the impact of
                programs and refine strategies.
              </p>
            </div>
            <div className="core-pillars__item">
              <img src={PartnershipBuildingSVG} alt="Partnership Building" />
              <h3>Partnership Building</h3>
              <p>
                Collaborate with schools, government agencies, NGOs, and private
                sponsors to enhance reach and effectiveness.
              </p>
            </div>
            <div className="core-pillars__item">
              <img
                src={ParentalSupportSVG}
                alt="Parental and Community Support"
              />
              <h3>Parental and Community Support</h3>
              <p>
                Engage parents and caregivers through counseling sessions and
                resource-sharing initiatives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
