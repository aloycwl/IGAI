import React from 'react';
import './css/HumanResource.css';

import humanBg from '../../assets/human-bg1.png';
import cardImage1 from '../../assets/Card.png';
import cardImage2 from '../../assets/Card-2.png';
import cardImage3 from '../../assets/Card-3.png';

const HumanResource = () => {
  return (
    <div className="human-resource-solution">
      {/* human resource hero */}
      <section className="solutions-hero">
        <video 
          className="hero-video-bg" 
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="/mp4/085e4b8dcc96a5df48e607c966bcfbfec4318516hls_abr_3_00001.mp4" type="video/mp4" />
        </video>        
        <div className="container" id="education-hero-container">
          <div className='title-1'>
            <h1 className="hero-title">
                <span>H</span>UMAN
            </h1>
          </div>
          <div className='title-2'>
            <h1 className="hero-title">
                RES<span>O</span>URCES
            </h1>
          </div>
          
        </div>
      </section>
      {/* human-resources-section */}
      <section className="human-resources-section">
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
          <div className="hr-grid">
            <div className="hr-content">
              <div className="section-badge">
                <div className="badge-dots">
                  <span className="dot active"></span>
                  <span className="dot"></span>
                </div>
              </div>
              <div>
                <div className='title-1'>
                  <h2 className="section-title">
                      <span>H</span>UMAN
                  </h2>
                </div>
                <div className='title-2'>
                  <h2 className="section-title">
                      RES<span>O</span>URCES
                  </h2>
                </div>
              </div>

              <p className="hr-description">
              Supercharge your HR team without increasing headcount.
              </p>
              
              <div className="hr-details">
                <p>
                  From hiring to employee health and wellness, our Genesis Score™ 
                  helps HR teams make better decisions, faster.
                </p>
              </div>
            </div>
            
            <div className="hr-visual">
              <div className="hr-image-container">
                <img 
                  src={humanBg} 
                  alt="Human Resources Visualization" 
                  className="hr-image"
                />
              </div>
              
              <div className="hr-evaluation">
                <div className="evaluation-header">
                  <h3>Technical Evaluation</h3>
                  <div className="evaluation-score">
                    <span className="score-percentage">83<span>%</span></span>
                    <span className="score-description">of their skills fits with your requirement</span>
                  </div>
                </div>
                
                <div className="evaluation-traits">
                  <div className="trait-row">
                    <div className="trait-item">
                      <span className="checkmark">✓</span>
                      <span className="trait-name">Openness</span>
                    </div>
                    <div className="trait-item">
                      <span className="checkmark">✓</span>
                      <span className="trait-name">Trust</span>
                    </div>
                  </div>
                  <div className="trait-row">
                    <div className="trait-item">
                      <span className="checkmark">✓</span>
                      <span className="trait-name">Drive</span>
                    </div>
                    <div className="trait-item">
                      <span className="checkmark">✓</span>
                      <span className="trait-name">Team Player</span>
                    </div>
                  </div>
                </div>
                
                <div className="evaluation-conclusion">
                  They are a good match for the role
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* candidate assessment */}
      <section className="candidate-assessment">
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
          <div className="assessment-grid">
            <div className="assessment-content">
              <div className="section-badge">
                <div className="badge-dots">
                  <span className="dot"></span>
                  <span className="dot active"></span>
                </div>
              </div>
              <h2 className="assessment-title">
                CANDIDATE <br />
                <span>ASSESSMENT</span>
              </h2>
              <h3 className="assessment-slogan">
                HIRE FAST, HIRE RIGHT!
              </h3>
              
              <div className="assessment-description">
                <p>
                  Our psychometric evaluations with quantitative behavioural analysis, 
                  helps you find the right candidate in minutes, not days.
                </p>
              </div>
              
              <div className="assessment-features">
                <div className="feature-item">
                  <div className='mark'>
                    <div className="feature-dots">
                      <span className="dot-blue"></span>
                      <span className="dot-blue"></span>
                    </div>                  
                    <div className="feature-dots">
                      <span className="dot-blue"></span>
                      <span className="dot-blue"></span>
                    </div>
                  </div>
                  <div className="feature-text">
                    Customers increase their job fit rate by 27% on average
                  </div>
                </div>
                
                <div className="feature-item">
                  <div className='mark'>
                    <div className="feature-dots">
                      <span className="dot-blue"></span>
                      <span className="dot-blue"></span>
                    </div>                  
                    <div className="feature-dots">
                      <span className="dot-blue"></span>
                      <span className="dot-blue"></span>
                    </div>
                  </div>
                  <div className="feature-text">
                    Real time assessment during interviews with Genie Score™
                  </div>
                </div>
                
                <div className="feature-item">
                  <div className='mark'>
                    <div className="feature-dots">
                      <span className="dot-blue"></span>
                      <span className="dot-blue"></span>
                    </div>                  
                    <div className="feature-dots">
                      <span className="dot-blue"></span>
                      <span className="dot-blue"></span>
                    </div>
                  </div>
                  <div className="feature-text">
                    Easily integrates into your existing applicant tracking system
                  </div>
                </div>
              </div>
              
              <div className="cta-section">
                <a href="/insights-form" className="cta-button">
                  Get Your Own Insights Now
                  <span className="arrow-icon">→</span>
                </a>
              </div>
            </div>
            
            <div className="assessment-visual">
              <div className="applicants-section">
                <h3 className="applicants-title">APPLICANTS WITH THE BEST SCORE</h3>
                <p className="applicants-description">
                  Based on a complete skills and personality analysis and 
                  complemented by feedback from your team
                </p>
                
                <div className="candidate-cards">
                  <div className="candidate-card">
                    <img src={cardImage1} alt="Candidate 1" className="card-image" />
                  </div>
                  <div className="candidate-card">
                    <img src={cardImage2} alt="Candidate 2" className="card-image" />
                  </div>
                  <div className="candidate-card">
                    <img src={cardImage3} alt="Candidate 3" className="card-image" />
                  </div>
                </div>
              </div>
              
              <div className="review-statistics">

                
                <div className="stats-content">                  
                  <div className="best-matches">
                    <div className="stats-header">
                      <h4>Review Statistics</h4>                                    
                    </div>
                    <div className="stats-badge">42 new applicants +26.4%</div>
                    <div className='score'>
                      <span className="matches-percentage">87%</span>
                      <span className="matches-label">Best <br />Matches</span>
                    </div>

                  </div>
                  
                  <div className="weekly-chart">
                    <div className="chart-bars">
                      <div className="chart-bar" style={{height: '60%'}}></div>
                      <div className="chart-bar" style={{height: '40%'}}></div>
                      <div className="chart-bar" style={{height: '70%'}}></div>
                      <div className="chart-bar" style={{height: '50%'}}></div>
                      <div className="chart-bar" style={{height: '80%'}}></div>
                      <div className="chart-bar" style={{height: '100%'}}></div>
                      <div className="chart-bar" style={{height: '65%'}}></div>
                    </div>
                    <div className="chart-labels">
                      <span>M</span>
                      <span>T</span>
                      <span>W</span>
                      <span>T</span>
                      <span>F</span>
                      <span>S</span>
                      <span>S</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default HumanResource; 