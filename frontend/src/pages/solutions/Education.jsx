import React from 'react';
import './css/Education.css';
import { Link } from 'react-router-dom';
import narrowRightIcon from '../../assets/icons/narrow-right.svg';
import educationBg1 from '../../assets/education-bg1.png';
import educationBg2 from '../../assets/education-bg2.png';
const Education = () => {
  return (
    <div className="education">
      {/* education hero */}
      <section className="solutions-hero">
        <video 
          className="hero-video-bg" 
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="/mp4/bg-homepage4.mp4" type="video/mp4" />
        </video>
        
        <div className="container" id="education-hero-container">
          <h1 className="hero-title">
              ED<span className="parabole-letter">U</span>CATI<span className="parabole-letter">O</span>N
            </h1>
        </div>
      </section>
      {/* Personalized Student Guidance & Holistic */}
      <section className="personalized-student-guidance">
        <video 
          className="section-video-bg" 
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="/mp4/bg-homepage4.mp4" type="video/mp4" />
        </video>
        <div className="section-overlay"></div>
        
        <div className="container">
          <div className="education-grid">
            <div className="education-content">
              <div className="section-badge">
                <div className="badge-dots">
                  <span className="dot active"></span>
                  <span className="dot"></span>
                </div>
              </div>
              <h2 className="education-title">
                PERSONALIZED STUDENT<br />
                GUIDANCE & HOLISTIC
              </h2>
              
              <div className="education-description">
                <p>
                UNLOCK TAILORED STUDY AND CAREER RECOMMENDATIONS WITH AL-POWERED PSYCHOMETRIC AND WELLNESS ASSESSMENTS. INSIGHT GENESIS PROVIDES STUDENTS AND EDUCATORS WITH A COMPREHENSIVE VIEW OF STRENGTHS, INTERESTS, AND WELLBEING- ENABLING SMARTER CHOICES, EARLY SUPPORT, AND IMPROVED ACADEMIC OUTCOMES.
                </p>
              </div>
              
              <div className="cta-section">
                <Link to="/insights-form" className="cta-button">
                <span>Get Your Own Insights Now</span>
                <img src={narrowRightIcon} alt="arrow" className="cta-icon" />
                </Link>
              </div>
            </div>
            
            <div className="education-visual">
              <div className="education-bg-container">
                <img 
                  src={educationBg1} 
                  alt="Education Visualization" 
                  className="education-bg-image"
                />
                
              </div>
            </div>
          </div>
        </div>
      </section>
            {/* Secure, Data-Driven Decisions for Educators */}
      <section className="secure-data-driven-decisions">
        <video 
          className="section-video-bg" 
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="/mp4/bg-homepage4.mp4" type="video/mp4" />
        </video>
        <div className="section-overlay"></div>
        
        <div className="container">
          <div className="educators-grid">
            <div className="educators-content">
              <div className="section-badge">
                <div className="badge-dots">
                  <span className="dot"></span>
                  <span className="dot active"></span>
                </div>
              </div>
              <h2 className="educators-title">
                SECURE, DATA-DRIVEN<br />
                DECISIONS FOR EDUCATORS
              </h2>
              
              <div className="educators-description">
                <p>
                EMPOWER TEACHERS AND INSTITUTIONS WITH PRIVACY-FIRST, BLOCKCHAIN-SECURED ANALYTICS. ACCESS ACTIONABLE INSIGHTS TO CUSTOMIZE INSTRUCTION, ALLOCATE RESOURCES, AND SUPPORT EVERY LEARNER-WHILE STUDENTS RETAIN CONTROL AND CAN EVEN EARN REWARDS FOR SHARING THEIR DATA.
                </p>
              </div>
              
              <div className="cta-section">
              <Link to="/insights-form" className="cta-button">
              <span>Get Your Own Insights Now</span>
              <img src={narrowRightIcon} alt="arrow" className="cta-icon" />
              </Link>
              </div>
            </div>
            
            <div className="educators-visual">
              <div className="educators-bg-container">
                <img 
                  src={educationBg2} 
                  alt="Educators Analytics Visualization" 
                  className="educators-bg-image"
                />                
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Education; 