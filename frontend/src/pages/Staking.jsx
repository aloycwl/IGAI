import React, { useState } from 'react';
import './Staking.css';
import loadingIcon from '../assets/load-button.png';

const Staking = () => {
  const [stakingAmount, setStakingAmount] = useState('');
  const [stakingPeriod, setStakingPeriod] = useState('30');

  const stakingOptions = [
    { days: 30, apy: 8, risk: 'Low', minAmount: 100 },
    { days: 90, apy: 12, risk: 'Medium', minAmount: 500 },
    { days: 180, apy: 18, risk: 'Medium', minAmount: 1000 },
    { days: 365, apy: 25, risk: 'High', minAmount: 5000 }
  ];

  const calculateRewards = () => {
    const amount = parseFloat(stakingAmount);
    const option = stakingOptions.find(opt => opt.days.toString() === stakingPeriod);
    if (!amount || !option) return 0;
    return (amount * option.apy / 100 * option.days / 365).toFixed(2);
  };

  return (
    <div className="staking">
      <section className="staking-main">
        <div className="container">
          <div className="staking-grid">
            <div className="staking-left-column">
              <div className="loading-icon-container">
                <img src={loadingIcon} alt="Loading Icon" className="main-loading-icon" />
              </div>
              
              <div className="staking-stats">
                <div className="stat-item">
                  <div className="stat-label">TOTAL IGAI LOCKED</div>
                  <div className="stat-number">665,918,122.11</div>
                </div>
                
                <div className="stats-divider">//</div>
                
                <div className="stat-item">
                  <div className="stat-label">AVERAGE APR</div>
                  <div className="stat-number">15.12%</div>
                </div>
              </div>
            </div>
            
            <div className="staking-right-column">
              <div className="staking-form-container">
                <h1 className="staking-title">START STAKING <span className="highlight-text">IGAI</span><br />EARN REWARDS</h1>
                
                <div className="form-section">
                  <div className="form-group">
                    <label className="form-label">Lock up period</label>
                    <div className="period-tabs">
                      <button className={`period-tab ${stakingPeriod === '7' ? 'active' : ''}`} 
                              onClick={() => setStakingPeriod('7')}>Min</button>
                      <button className={`period-tab ${stakingPeriod === '28' ? 'active' : ''}`} 
                              onClick={() => setStakingPeriod('28')}>4 Weeks</button>
                      <button className={`period-tab ${stakingPeriod === '365' ? 'active' : ''}`} 
                              onClick={() => setStakingPeriod('365')}>1 Year</button>
                      <button className={`period-tab ${stakingPeriod === '1095' ? 'active' : ''}`} 
                              onClick={() => setStakingPeriod('1095')}>3 Years</button>
                      <button className={`period-tab ${stakingPeriod === '1825' ? 'active' : ''}`} 
                              onClick={() => setStakingPeriod('1825')}>Max</button>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Enter Staking Amount</label>
                    <div className="amount-input-container">
                      <input
                        type="text"
                        value={stakingAmount}
                        onChange={(e) => setStakingAmount(e.target.value)}
                        placeholder="IGAI Amount"
                        className="amount-input"
                      />
                      <button className="max-button">Max</button>
                    </div>
                  </div>
                  
                  <div className="staking-details">
                    <div className="detail-row">
                      <span className="detail-label">Staking Period Ends</span>
                      <span className="detail-value">April 10/2025</span>
                    </div>
                    
                    <div className="detail-row">
                      <span className="detail-label">Estimated Week APR</span>
                      <span className="detail-value">20%</span>
                    </div>
                    
                    <div className="detail-row">
                      <span className="detail-label">Estimated Year APR</span>
                      <span className="detail-value">13%</span>
                    </div>
                    
                    <div className="detail-row">
                      <span className="detail-label">Estimated Rewards Next Week</span>
                      <span className="detail-value highlight">13%</span>
                    </div>
                  </div>
                  
                  <button className="connect-wallet-btn">Connect Wallet</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Staking; 