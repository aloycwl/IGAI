import React from 'react';
import './css/DecentralizedPersonalInsights.css';

const DecentralizedPersonalInsights = () => {
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
          <h1 className="hero-title" id="dpi-hero-title">
              <div><span className="parabole-letter special-letter">D</span>ECENTRALIZED </div>
              <div className='dpi-hero-title-2'>PERS<span className="parabole-letter special-letter">O</span>NAL I<span className="parabole-letter special-letter">N</span>SIGHTS</div>
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
              <div className="section-badge" id="dpi-badge">
                <div className="badge-dots">
                  <span className="dot active"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
                <div className="badge-label">
                  <div className="text-left"><span className="parabole-font">D</span>ECENTRALIZED</div>
                  <div className="text-left personal-insights-line">PERS<span className="parabole-font">O</span>NAL I<span className="parabole-font">N</span>SIGHTS</div>
                </div>
              </div>
              <h3 className="main-heading">
                FULL CONTROL. YOUR PERSONAL DATA.
              </h3>
              
              <div className="intro-description">
                <p>
                  An AI-powered Decentralized Personal Insights (DPI) passport with unique insights enabling secure, 
                  transparent and tokenized data sharing.
                </p>
              </div>
              
              <div className="features-section">
                <div className="feature-group">
                  <div className="feature-header">
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
                    <h4>GET INSTANT NOTIFICATIONS ON EMPLOYEE SENTIMENT</h4>
                  </div>
                  <div className="feature-content">
                    <p>The Insight Genesis platform analyzes patterns of behavioral data over time to provide insights into employee sentiment. 
                    This enables companies to proactively address issues before they escalate into attrition, dissatisfaction, or wider 
                    systemic issues within the organization.</p>
                    <p>Companies can integrate the DPI with internal communication tools to receive real-time data and timely alerts 
                    when employee sentiment shifts, allowing for strategic interventions or targeted engagement.</p>
                  </div>
                </div>
                
                <div className="feature-group">
                  <div className="feature-header">
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
                    <h4>AI-ENHANCED DATA ANALYSIS</h4>
                  </div>
                  <div className="feature-content">
                    <p>Predictive Insight: Insight Genesis AI analyzes shared data to provide predictive insights, helping users 
                    understand trends and make informed decisions based on their information.</p>
                    <p>Advanced Pattern Recognition: Our system integrates multiple data streams to identify correlations, enhancing the 
                    understanding of the value and impact of their shared information.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="education-visual">
              <div className="education-bg-container">
              <div className="video-overlay"></div>
                    <video autoPlay muted loop playsInline>
                      <source src="/mp4/decentral-bg-1.mp4" type="video/mp4" />
                    </video>   
                
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
                  <span className="dot"></span>
                </div>
                <div className="badge-label">
                  <div className="text-left"><span className="parabole-font">D</span>ECENTRALIZED</div>
                  <div className="text-left personal-insights-line">PERS<span className="parabole-font">O</span>NAL I<span className="parabole-font">N</span>SIGHTS</div>
                </div>
              </div>
              <h3 className="secure-main-heading">
                SECURE.<br />
                TRANSPARENT.
              </h3>
              
              <div className="secure-description">
                <p>
                  Open-source, transparent platform with industry-standard 64-bit encryption, quantum-resistant blockchain cryptography, no personal data storage, and advanced zero-knowledge proof and key management technologies (KMS) —ensuring users fully own their personal insights safely.
                </p>
              </div>
                            
            </div>
            
            <div className="educators-visual">
              <div className="educators-bg-container">
              <div className="video-overlay"></div>
                      <video autoPlay muted loop playsInline>
                      <source src="/mp4/decentral-bg-2.mp4" type="video/mp4" />
                      </video>     
              </div>
            </div>
          </div>
        </div>
      </section>
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
                  <span className="dot"></span>
                  <span className="dot active"></span>
                </div>
                <div className="badge-label">
                  <div className="text-left"><span className="parabole-font">D</span>ECENTRALIZED</div>
                  <div className="text-left personal-insights-line">PERS<span className="parabole-font">O</span>NAL I<span className="parabole-font">N</span>SIGHTS</div>
                </div>
              </div>
              <h3 className="new-data-main-heading">
                NEW DATA ECONOMY.<br />
                POWERED BY YOU
              </h3>
              
              <div className="new-data-description">
                <p>
                  WE ARE NOT JUST CREATING A DECENTRALIZED PERSONAL INSIGHT. WE'RE CREATING A NEW DATA ECONOMY WHERE PRIVACY MEETS PROFIT AND USERS ARE FINALLY COMPENSATED FOR THEIR VALUABLE PERSONAL DATA. WHETHER YOU'RE A HEALTH ENTHUSIAST WITH FITNESS DATA OR A MULTILINGUAL SPEAKER WITH VOICE RECORDINGS, DPI HELPS YOU UNLOCK THE VALUE OF YOUR DIGITAL INSIGHTS AND OWN YOUR DESTINY.
                </p>
              </div>
            </div>
            
            <div className="educators-visual">
              <div className="educators-bg-container">
                
              <div className="video-overlay"></div>
                      <video autoPlay muted loop playsInline>
                      <source src="/mp4/decentral-bg-3.mp4" type="video/mp4" />
                      </video>                     
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DecentralizedPersonalInsights;