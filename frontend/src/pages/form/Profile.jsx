import React, { useEffect, useState } from 'react';
import './Profile.css';
import faceIcon from '../../assets/form-assets/face.svg';
import videoIcon from '../../assets/form-assets/video.svg';
import footPrintIcon from '../../assets/form-assets/foot-print.svg';
import arrowIcon from '../../assets/form-assets/arrow.svg';
import voiceDetectImg from '../../assets/form-assets/voice-detect.png';
import videoDetectImg from '../../assets/form-assets/video-detect.png';
import faceDetectImg1 from '../../assets/form-assets/face-detect.png';
import { useNavigate } from 'react-router-dom';

// Hàm định dạng balance từ wei sang IGAIR, làm tròn 2 chữ số thập phân
function formatIGAIR(balance) {
  if (!balance) return '0';
  const igair = Number(balance) / 1e18;
  return igair.toLocaleString(undefined, { maximumFractionDigits: 2 });
}

// Helper: shorten wallet address
function shortAddress(addr) {
  if (!addr) return '';
  return addr.slice(0, 6) + '...' + addr.slice(-4);
}

// Component hiển thị trạng thái IGAIR
const IGAIRDisplay = ({ igairLoading, igairError, igairInfo, formatIGAIRPrefix = '', showPrefix = false }) => {
  if (igairLoading) {
    return <span className="igair-loading">Loading IGAIR...</span>;
  } else if (igairError) {
    return <span className="igair-error">{igairError}</span>;
  } else if (igairInfo && igairInfo.balance) {
    return (
      <span className="igair-value">
        {showPrefix ? formatIGAIRPrefix : ''}{formatIGAIR(igairInfo.balance)} IGAIR
      </span>
    );
  } else {
    return null;
  }
};

const Profile = () => {
  const navigate = useNavigate();
  const [igairInfo, setIgairInfo] = useState(null);
  const [igairLoading, setIgairLoading] = useState(false);
  const [igairError, setIgairError] = useState(null);
  const [copySuccess, setCopySuccess] = useState(false);

  // useEffect để xử lý URL callback từ API
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const addressFromUrl = urlParams.get('a');
    
    if (addressFromUrl) {
      // Lưu địa chỉ từ URL vào localStorage
      localStorage.setItem('a', addressFromUrl);
      
      // Xóa parameter khỏi URL để clean up
      const newUrl = new URL(window.location);
      newUrl.searchParams.delete('a');
      window.history.replaceState({}, '', newUrl);
      
      console.log('Đã lưu địa chỉ từ API callback:', addressFromUrl);
    }
  }, []);
  
  // Fetch IGAIR info balance
  useEffect(() => {
    const fetchIGAIrInfo = async () => {
      const address = localStorage.getItem('a');
      if (!address) return;
      setIgairLoading(true);
      setIgairError(null);
      try {
        const res = await fetch(`https://api.insightgenesis.ai/info?addr=${address}`);
        if (!res.ok) throw new Error('Failed to fetch IGAIr info');
        const data = await res.json();
        setIgairInfo(data);
      } catch (err) {
        setIgairError('Failed to load IGAIr info');
      } finally {
        setIgairLoading(false);
      }
    };
    fetchIGAIrInfo();
  }, []);
  return (
    <div className="profile-root">
      <header className="profile-header">
        <h1 className="profile-title">
          TEST OUR <span className="blue">PRE-BUILT BEHAVIOR<br/>MODULES</span> FOR YOURSELF
        </h1>
        <p className="profile-subtitle">
          Our integrated behavior modules enable you to get started immediately. Try it for yourself.
        </p>
        <div className='web3-balance-container'>
          <div className='web3-balance-card'>
            <div className='web3-balance-header'>
              <div className='web3-balance-icon'>
                <div className='web3-icon-inner'>💎</div>
                <div className='web3-icon-glow'></div>
              </div>
              <div className='web3-balance-info'>
                <div className='web3-balance-label'>TOTAL IGAIR</div>
                <div className='web3-balance-value'>
                  <IGAIRDisplay igairLoading={igairLoading} igairError={igairError} igairInfo={igairInfo} />
                </div>
              </div>
            </div>
            <div className='web3-balance-footer'>
              <div className='web3-balance-stats'>
                <div className='web3-stat'>
                  <div className='web3-stat-label'>Referred</div>
                  <div className='web3-stat-value'>
                    {igairInfo && igairInfo.from && igairInfo.from.length > 0 ? igairInfo.from.length : '0'}
                  </div>
                </div>
                <div className='web3-stat'>
                  <div className='web3-stat-label'>Referral</div>
                  <div className='web3-stat-value'>
                    {igairInfo && igairInfo.to ? shortAddress(igairInfo.to) : 'None'}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Invite Block */}
          <div className='web3-invite-card'>
            <div className='web3-invite-header'>
              <div className='web3-invite-icon'>
                <div className='web3-icon-inner'>🎯</div>
                <div className='web3-icon-glow'></div>
              </div>
              <div className='web3-invite-info'>
                <div className='web3-invite-label'>INVITE FRIENDS</div>
                <div className='web3-invite-desc'>Share your referral link</div>
              </div>
            </div>
            <div className='web3-invite-footer'>
              <button 
                className={`web3-invite-btn ${copySuccess ? 'copied' : ''}`}
                onClick={() => {
                  const hostName = window.location.origin;
                  const walletAddress = localStorage.getItem('a');
                  const referralLink = `${hostName}/ref=${walletAddress}`;
                  navigator.clipboard.writeText(referralLink).then(() => {
                    setCopySuccess(true);
                    setTimeout(() => {
                      setCopySuccess(false);
                    }, 2000);
                    console.log('Referral link copied to clipboard:', referralLink);
                  }).catch(err => {
                    console.error('Failed to copy referral link:', err);
                  });
                }}
              >
                <span>{copySuccess ? 'Copied!' : 'Invite'}</span>
                <div className='web3-invite-btn-icon'>
                  {copySuccess ? '✅' : ''}
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className="profile-card-row">
        <div className="profile-card" onClick={() => navigate('/profile/face-analysis')}>
          <img src={faceIcon} alt="Face Scan" className="profile-card-icon" />
          <div className="profile-card-title">Face Scan Analysis</div>
          <div>
            <IGAIRDisplay igairLoading={igairLoading} igairError={igairError} igairInfo={igairInfo} />
          </div>
        </div>
        <div className="profile-card" onClick={() => navigate('/profile/video-analysis')}>
          <img src={videoIcon} alt="Voice" className="profile-card-icon" />
          <div className="profile-card-title">Voice Analysis</div>
          <div>
            <IGAIRDisplay igairLoading={igairLoading} igairError={igairError} igairInfo={igairInfo} />
          </div>
        </div>
        <div className="profile-card" onClick={() => navigate('/profile/digital-footprint')}>
          <img src={footPrintIcon} alt="Digital Footprint" className="profile-card-icon" />
          <div className="profile-card-title">Digital Footprint</div>
          <div>
            <IGAIRDisplay igairLoading={igairLoading} igairError={igairError} igairInfo={igairInfo} />
          </div>
        </div>
      </div>
      
      {/* Referral Table */}
      <section className="profile-referral-section">
        <div className="profile-referral-container">
          <h2 className="profile-referral-title">Referral Information</h2>
          <div className="profile-referral-table">
            <div className="profile-referral-header">
              <div className="profile-referral-header-cell">No</div>
              <div className="profile-referral-header-cell">Wallet Address</div>
              <div className="profile-referral-header-cell">Type</div>
            </div>
            
            {/* Loading State */}
            {igairLoading && (
              <div className="profile-referral-row empty-row">
                <div className="profile-referral-cell empty-cell">
                  <span className="profile-loading">Loading...</span>
                </div>
              </div>
            )}
            
            {/* Error State */}
            {igairError && (
              <div className="profile-referral-row empty-row">
                <div className="profile-referral-cell empty-cell">
                  <span className="profile-error">{igairError}</span>
                </div>
              </div>
            )}
            
            {/* Referrer Row */}
            {!igairLoading && !igairError && igairInfo && igairInfo.to && (
              <div className="profile-referral-row">
                <div className="profile-referral-cell">1</div>
                <div className="profile-referral-cell">
                  <div className="profile-address-item">
                    {shortAddress(igairInfo.to)}
                    <CopyButton text={igairInfo.to} />
                  </div>
                </div>
                <div className="profile-referral-cell">
                  <span className="profile-type referrer">Referrer</span>
                </div>
              </div>
            )}
            
            {/* Referred Users Rows */}
            {!igairLoading && !igairError && igairInfo && igairInfo.from && igairInfo.from.length > 0 && 
              igairInfo.from.map((address, index) => (
                <div key={index} className="profile-referral-row">
                  <div className="profile-referral-cell">{igairInfo.to ? index + 2 : index + 1}</div>
                  <div className="profile-referral-cell">
                    <div className="profile-address-item">
                      {shortAddress(address)}
                      <CopyButton text={address} />
                    </div>
                  </div>
                  <div className="profile-referral-cell">
                    <span className="profile-type referred">Referred</span>
                  </div>
                </div>
              ))
            }
            
            {/* Empty State */}
            {!igairLoading && !igairError && (!igairInfo || (!igairInfo.to && (!igairInfo.from || igairInfo.from.length === 0))) && (
              <div className="profile-referral-row empty-row">
                <div className="profile-referral-cell empty-cell">
                  <span className="profile-empty">No referral data available</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      
      <footer className="profile-footer-placeholder"></footer>
    </div>
  );
};

export default Profile; 