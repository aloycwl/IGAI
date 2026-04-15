import React from 'react';
import '../Solutions.css';
import './css/HealthWellness.css';
import { Link } from 'react-router-dom';
import narrowRightIcon from '../../assets/icons/narrow-right.svg';

const HealthWellness = () => {
  return (
    <div className="health-wellness">
      {/* health hero */}
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
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              H<span className="parabole-font">E</span>AL<span className="parabole-font">T</span>H<br />
              <div className="text-left personal-insights-line">& W<span className="parabole-font">E</span>LLN<span className="parabole-font">E</span>SS</div>
            </h1>
          </div>
        </div>
      </section>

      {/* empowering individuals */}
      <section className="empowering-individuals">
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
          <div className="empowering-grid">
            <div className="empowering-content">
              <div className="section-badge">
                <div className="badge-dots">
                  <span className="dot active"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
                <div className="badge-label">
                  <div className="text-left">EMP<span className="parabole-font">O</span>WERI<span className="parabole-font">N</span>G</div>
                  <div className="text-left personal-insights-line">INDIVI<span className="parabole-font">D</span>UALS</div>
                </div>
              </div>

              <p className="empowering-description">
              INSIGHT GENESIS EMPOWERS INDIVIDUALS WITH PERSONALIZED HEALTH AND WELLNESS INSIGHTS, LEVERAGING AI 93% ACCURACY TO ANALYZE BIOMETRIC DATA AND PROMOTE PROACTIVE HEALTH MANAGEMENT FOR A VIBRANT, BALANCED LIFE.
              </p>
              
              <div className="health-features">
                <h3>PERSONALIZED HEALTH INSIGHTS:</h3>
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
                  Data Analysis: Insight Genesis AI analyzes individual health data, including biometric information and lifestyle choices, to deliver tailored health recommendations that cater to users' specific needs.
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
                  Predictive Health Monitoring: AI algorithms can predict potential health risks based on historical data, allowing users to take proactive measures to improve their health.
                  </div>
                </div>
                
                <h3>BEHAVIORAL HEALTH SUPPORT:</h3>
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
                  Mental Health Insights: The platform can offer insights and resources for mental health.
                  </div>
                </div>
              </div>
            </div>
            
            <div className="empowering-visual">
              <video 
                className="visual-video-bg" 
                autoPlay 
                muted 
                loop 
                playsInline
              >
                <source src="/mp4/health-bg-1.mp4" type="video/mp4" />
              </video>
              <div className="health-dashboard">
                <div className="stat-diamond top">
                  <span className="percentage">76%</span>
                </div>
                <div className="stat-diamond bottom">
                  <span className="percentage">50%</span>
                </div>
                {/* <div className="center-stat">
                  <div className="main-percentage">76%</div>
                  <div className="stat-label">State of Health: Good</div>
                </div> */}

                <div className="analysis-data">
                    <div className="intent-score">
                      <div className="main-percentage">76%</div>
                      <div className="stat-label">State of Health: Good</div>
                    </div>
                    <div className="connection-line">
                      <div className='outline-dot'>
                        <div className="dot left"></div>
                      </div>
                      <div className="line"></div>
                      <div className='outline-dot'>
                        <div className="dot right"></div>
                      </div>  
                    </div>
                    <div className="burnout-metrics">
                        <div className="metric-row">
                          <div className="metric-info">
                            <span className="metric-label">Risk of Stroke</span>
                            <span className="metric-value">0.3%</span>
                          </div>
                          <div className="metric-bar">
                            <div className="metric-fill" style={{width: '3%'}}></div>
                          </div>
                        </div>
                        <div className="metric-row">
                          <div className="metric-info">
                          <span className="metric-label">Risk of Coronary</span>
                            <span className="metric-value">1.3%</span>
                          </div>
                          <div className="metric-bar">
                            <div className="metric-fill" style={{width: '3%'}}></div>
                          </div>
                        </div>
                        <div className="metric-row">
                          <div className="metric-info">
                          <span className="metric-label">Oxygen in Blood</span>
                            <span className="metric-value">97.67%</span>
                          </div>
                          <div className="metric-bar">
                            <div className="metric-fill" style={{width: '97%'}}></div>
                          </div>
                        </div>
                        <div className="metric-row">
                          <div className="metric-info">
                          <span className="metric-label">Burnout</span>
                            <span className="metric-value">7/10</span>
                          </div>
                          <div className="metric-bar">
                            <div className="metric-fill" style={{width: '70%'}}></div>
                          </div>
                        </div>
                    </div>
                </div>

                {/* <div className="health-metrics">
                  <div className="metric-item">
                    <span className="metric-label">Risk of Stroke</span>
                    <div className="metric-bar">
                      <div className="metric-fill" style={{width: '3%'}}></div>
                    </div>
                    <span className="metric-value">0.3%</span>
                  </div>
                  <div className="metric-item">
                    <span className="metric-label">Risk of Coronary</span>
                    <div className="metric-bar">
                      <div className="metric-fill" style={{width: '13%'}}></div>
                    </div>
                    <span className="metric-value">1.3%</span>
                  </div>
                  <div className="metric-item">
                    <span className="metric-label">Oxygen in Blood</span>
                    <div className="metric-bar">
                      <div className="metric-fill" style={{width: '97%'}}></div>
                    </div>
                    <span className="metric-value">97.67%</span>
                  </div>
                  <div className="metric-item">
                    <span className="metric-label">Burnout</span>
                    <div className="metric-bar">
                      <div className="metric-fill" style={{width: '70%'}}></div>
                    </div>
                    <span className="metric-value">7/10</span>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* telehealth-insurance */}
      <section className="telehealth-insurance">
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
          <div className="telehealth-grid">
            <div className="telehealth-content">
              <div className="section-badge">
                <div className="badge-dots">
                  <span className="dot"></span>
                  <span className="dot active"></span>
                  <span className="dot"></span>
                </div>
                <div className="badge-label">
                  <div className="text-left"><span className="parabole-font">T</span>ELEHEALTH &</div>
                  <div className="text-left personal-insights-line">INS<span className="parabole-font">U</span>RA<span className="parabole-font">N</span>CE</div>
                </div>
              </div>
              
              <p className="telehealth-description">
              TELEHEALTH COMPANIES CAN LEVERAGE INSIGHT GENESIS TO ENHANCE PATIENT CARE BY INTEGRATING ITS AI PERSONAL INSIGHTS, WHICH ANALYZE BIOMETRIC DATA LIKE VOICE AND FACIAL SCANS TO DETECT HEALTH RISKS WITH 93% ACCURACY.
              </p>
              
              <div className="telehealth-features">
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
                  Offer personalized wellness plans, improve remote diagnostics, and empower patients with actionable health insights, all while ensuring complete data privacy.
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
                  Streamline the creation of personalized patient profiles while ensuring data security, ultimately reducing onboarding time and enhancing care delivery.
                  </div>
                </div>
              </div>
              
              <div className="cta-section">
              <Link to="/insights-form" className="cta-button">
              <span>Get Your Own Insights Now</span>
              <img src={narrowRightIcon} alt="arrow" className="cta-icon" />
              </Link>
                <p className="cta-note">
                  *a free report is available once a day. For a more in-depth report get it here
                </p>
              </div>
            </div>
            
            <div className="telehealth-visual">
              <video 
                className="visual-video-bg" 
                autoPlay 
                muted 
                loop 
                playsInline
              >
                <source src="/mp4/health-bg-2.mp4" type="video/mp4" />
              </video>
              <div className="brain-visualization">
                <div className="brain-container">
                  <div className="brain-particles"></div>
                  <div className="brain-glow"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
            {/* pharmaceutical-companies */}
      <section className="pharmaceutical-companies">
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
          <div className="pharmaceutical-grid">
            <div className="pharmaceutical-content">
              <div className="section-badge">
                <div className="badge-dots">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot active"></span>
                </div>
                <div className="badge-label">
                  <div className="text-left">P<span className="parabole-font">H</span>ARMAC<span className="parabole-font">E</span>UTICAL</div>
                  <div className="text-left personal-insights-line">COM<span className="parabole-font">P</span>ANIES</div>
                </div>
              </div>
              
              <p className="pharmaceutical-description">
              ACCELERATE YOUR RESEARCH WITH LATEST AND ACCURATE DATA FROM CONSENTING INDIVIDUALS. BOOST YOUR REVENUE!
              </p>
              
              <div className="cta-section">
                <Link to="/insights-form" className="cta-button">
                  <span>Get Your Own Insights Now</span>
                  <img src={narrowRightIcon} alt="arrow" className="cta-icon" />
                </Link>
              </div>
              
              <div className="quote-section">
                <blockquote className="founder-quote">
                “Imagine a world where your fitness goals aren’t just about self-improvement but about real rewards. Insight Genesis makes this possible by combining personalized wellness insights with blockchain-powered incentives. You earn, you improve, and you own at the same time.”
                </blockquote>
                <cite className="quote-attribution">
                  _Quoted by Founder of Insight Genesis- Jay Koh_
                </cite>
              </div>
            </div>
            
            <div className="pharmaceutical-visual">
              <div className="analytics-container">
                <div className="analytics-title">SMALL BUSINESS LENDING DEFAULT PROBABILITY</div>
                
                <div className="percentage-circle">
                  <video 
                    className="circle-video-bg" 
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                  >
                    <source src="/mp4/health-bg-1-3.mp4" type="video/mp4" />
                  </video>
                  <div className="circle-overlay"></div>
                  {/* <div className="percentage-display">85.2%</div> */}
                </div>

                <div className="metrics-container">
                <div className="burnout-metrics">
                        <div className="metric-row">
                          <div className="metric-info">
                            <span className="metric-label">Access to Rich, Real-World Data</span>
                          </div>
                        </div>
                        <div className="metric-row">
                          <div className="metric-info">
                          <span className="metric-label">Accelerated Clinical Trials & Research</span>
                          </div>
                        </div>
                        <div className="metric-row">
                          <div className="metric-info">
                          <span className="metric-label">Enhanced Pharmacovigilance</span>
                          </div>
                        </div>
                </div>
                <div className="burnout-metrics">
                        <div className="metric-row">
                          <div className="metric-info">
                            <span className="metric-label">Patent-Centric Engagement</span>
                          </div>
                        </div>
                        <div className="metric-row">
                          <div className="metric-info">
                          <span className="metric-label">Regulatory-Grade Security & Complimance</span>
                          </div>
                        </div>
                        <div className="metric-row">
                          <div className="metric-info">
                          <span className="metric-label">New Data Monetization Models</span>
                          </div>
                        </div>
                </div>
                </div>                
                
                {/* <div className="metrics-container">
                <div className="burnout-metrics">
                        <div className="metric-row">
                          <div className="metric-info">
                            <span className="metric-label">Burnout</span>
                            <span className="metric-value">8/10</span>
                          </div>
                          <div className="metric-bar">
                            <div className="metric-fill" style={{width: '80%'}}></div>
                          </div>
                        </div>
                        <div className="metric-row">
                          <div className="metric-info">
                          <span className="metric-label">Emotional stability</span>
                            <span className="metric-value">1/5</span>
                          </div>
                          <div className="metric-bar">
                            <div className="metric-fill" style={{width: '20%'}}></div>
                          </div>
                        </div>
                        <div className="metric-row">
                          <div className="metric-info">
                          <span className="metric-label">Financial risk</span>
                            <span className="metric-value">8/10</span>
                          </div>
                          <div className="metric-bar">
                            <div className="metric-fill" style={{width: '80%'}}></div>
                          </div>
                        </div>
                </div>
                <div className="burnout-metrics">
                        <div className="metric-row">
                          <div className="metric-info">
                            <span className="metric-label">Cooperation</span>
                            <span className="metric-value">2/10</span>
                          </div>
                          <div className="metric-bar">
                            <div className="metric-fill" style={{width: '20%'}}></div>
                          </div>
                        </div>
                        <div className="metric-row">
                          <div className="metric-info">
                          <span className="metric-label">Energy level</span>
                            <span className="metric-value">1/10</span>
                          </div>
                          <div className="metric-bar">
                            <div className="metric-fill" style={{width: '10%'}}></div>
                          </div>
                        </div>
                        <div className="metric-row">
                          <div className="metric-info">
                          <span className="metric-label">Open</span>
                            <span className="metric-value">7/10</span>
                          </div>
                          <div className="metric-bar">
                            <div className="metric-fill" style={{width: '70%'}}></div>
                          </div>
                        </div>
                </div>
                </div> */}

              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default HealthWellness;