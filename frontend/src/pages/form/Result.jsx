import React from 'react';
import './Result.css';
import checkIcon from '../../assets/form-assets/group3.svg';
import checkYellow from '../../assets/form-assets/group3.svg';

const resultData = [
  {
    group: 'CARDIOVASCULAR',
    items: [
      { status: 'EXCELLENT', value: '0.1%', desc: 'Risk of congestive heart failure', type: 'excellent' },
      { status: 'GOOD', value: '0.1%', desc: 'Risk of congestive heart failure', type: 'good' },
      { status: 'EXCELLENT', value: '0.1%', desc: 'Risk of congestive heart failure', type: 'excellent' },
      { status: 'EXCELLENT', value: '0.1%', desc: 'Risk of congestive heart failure', type: 'excellent' },
    ]
  },
  {
    group: 'CARDIOVASCULAR',
    items: [
      { status: 'EXCELLENT', value: '0.1%', desc: 'Risk of congestive heart failure', type: 'excellent' },
      { status: 'EXCELLENT', value: '0.1%', desc: 'Risk of congestive heart failure', type: 'excellent' },
      { status: 'EXCELLENT', value: '0.1%', desc: 'Risk of congestive heart failure', type: 'excellent' },
      { status: 'EXCELLENT', value: '0.1%', desc: 'Risk of congestive heart failure', type: 'excellent' },
    ]
  },
  {
    group: 'BLOOD',
    items: [
      { status: '9.68 BMP', value: '', desc: 'Risk of congestive heart failure', type: 'danger' },
      { status: 'EXCELLENT', value: '0.1%', desc: 'Risk of congestive heart failure', type: 'excellent' },
      { status: 'EXCELLENT', value: '0.1%', desc: 'Risk of congestive heart failure', type: 'excellent' },
    ]
  }
];

const Result = () => {
  return (
    <div className="result-root">
      <header className="result-header">
        <h1 className="result-title">
          TEST OUR <span className="blue">PRE-BUILT BEHAVIOR<br/>MODULES</span> FOR YOURSELF
        </h1>
        <p className="video-analysis-subtitle">
          Our integrated behavior modules enable you to get started immediately. Try it for yourself.
        </p>
      </header>
      <div className="result-section">
        <div className="result-main-title">YOUR VIDEO ANALYSIS RESULT</div>
        {resultData.map((group, idx) => (
          <div key={idx}>
            <div className="result-group-title">{group.group}</div>
            <div className="result-card-row">
              {group.items.map((item, i) => (
                <div className={`result-card ${item.type}`} key={i}>
                  {item.type === 'danger' ? (
                    <div className="result-status danger">{item.status}</div>
                  ) : (
                    <>
                      <div className={`result-status${item.type === 'good' ? ' good' : ''}`}>{item.status}</div>
                      <img
                        src={item.type === 'good' ? checkYellow : checkIcon}
                        alt="check"
                        className={`result-check${item.type === 'good' ? ' good' : ''}`}
                      />
                    </>
                  )}
                  <div className={`result-value${item.type === 'good' ? ' good' : ''}${item.type === 'danger' ? ' danger' : ''}`}>{item.value}</div>
                  <div className="result-desc">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Result; 