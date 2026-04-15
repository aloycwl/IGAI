import React, { useState } from 'react';
import './FAQ.css';
import faqData from './faqData.js';

const FAQ = () => {
  const [openAccordion, setOpenAccordion] = useState(null);
  const [openQuestions, setOpenQuestions] = useState({});

  const toggleAccordion = (idx) => {
    setOpenAccordion(openAccordion === idx ? null : idx);
  };

  const toggleQuestion = (accordionIdx, questionIdx) => {
    setOpenQuestions((prev) => ({
      ...prev,
      [accordionIdx]: prev[accordionIdx] === questionIdx ? null : questionIdx
    }));
  };

  return (
    <div className="faq">
      <div className="faq-content">
        <div className="" style={{marginTop: '90px'}}>
          <div className="section-badge" id="dpi-badge">
            <div className="hero-title">
              <div><span className="parabole-letter special-letter">F</span>REQUENTLY ASKED</div>
              <div className='dpi-hero-title-2'><span className="parabole-letter special-letter">Q</span>UESTI<span className="parabole-letter special-letter">O</span>NS<span className="parabole-letter special-letter">N</span>SIGHTS</div>
            </div>
          </div>
          <div className="faq-list flat">
            {faqData.map((group, accordionIdx) => (
              <div key={accordionIdx} className={`faq-accordion-group ${openAccordion === accordionIdx ? 'open' : ''}`}>
                <button className="faq-accordion-title" onClick={() => toggleAccordion(accordionIdx)}>
                  <span className="accordion-title-text">{group.accordion}</span>
                  <span className="accordion-arrow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                      className={openAccordion === accordionIdx ? 'rotated' : ''}>
                      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>
                {openAccordion === accordionIdx && (
                  <div className="faq-accordion-questions">
                    {group.questions.map((item, questionIdx) => (
                      <div key={questionIdx} className={`faq-item flat ${openQuestions[accordionIdx] === questionIdx ? 'open' : ''}`}>
                        <button className="faq-question flat" onClick={() => toggleQuestion(accordionIdx, questionIdx)}>
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
                          <span className="question-text">{item.question}</span>
                          <span className="accordion-arrow">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                              className={openQuestions[accordionIdx] === questionIdx ? 'rotated' : ''}>
                              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                        </button>
                        <div className={`faq-answer flat ${openQuestions[accordionIdx] === questionIdx ? 'open' : ''}`}>
                          {openQuestions[accordionIdx] === questionIdx && item.answer.split('\n').map((line, i) => (
                            <div key={i} className="faq-answer-line">{line}</div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ; 