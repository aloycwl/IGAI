import React, { useState, useEffect, useRef } from 'react';
import './DigitalFootprint.css';
import { useNavigate } from 'react-router-dom';
import faceIcon from '../../assets/form-assets/face.svg';
import videoIcon from '../../assets/form-assets/video.svg';
import footPrintIcon from '../../assets/form-assets/foot-print.svg';
import COUNTRY_CODES from './countryCodes';

const SECRET_KEY = 'c5UqVPihwtydCKe57YJPtpyE2ryB9AJn';

// Hàm định dạng balance từ wei sang IGAIR, làm tròn 2 chữ số thập phân
function formatIGAIR(balance) {
  if (!balance) return '0';
  const igair = Number(balance) / 1e18;
  return igair.toLocaleString(undefined, { maximumFractionDigits: 2 });
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

const DigitalFootprint = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    gender: '',
    birthdate: '',
    email: '',
    phoneCode: '',
    phoneNumber: ''
  });
  const [apiError, setApiError] = useState(null);
  const resultRef = useRef(null);

  const [igairInfo, setIgairInfo] = useState(null);
  const [igairLoading, setIgairLoading] = useState(false);
  const [igairError, setIgairError] = useState(null);

  const formatDate = (date) => {
    if (!date) return '';
    const [year, month, day] = date.split('-');
    return `${day}-${month}-${year}`;
  }

  const formatPhoneCode = (code) => {
    return code.replace('+', '');
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setApiError(null);
    
    try {
      // Kiểm tra dữ liệu đầu vào
      if (!formData.email || !formData.phoneCode || !formData.phoneNumber) {
        setApiError('Vui lòng điền đầy đủ thông tin email, mã quốc gia và số điện thoại.');
        setLoading(false);
        return;
      }
    
      // Tạo URL với query parameters
      const countryCode = formatPhoneCode(formData.phoneCode); // Loại bỏ dấu +

      // Lấy địa chỉ ví từ localStorage
      const walletAddress = localStorage.getItem('a');
        if (!walletAddress) {
          setApiError('Wallet address not found. Please log in again.');
          setLoading(false);
          return;
        }

      const apiUrl = `https://api.insightgenesis.ai/foot?e=${encodeURIComponent(formData.email)}&c=${encodeURIComponent(countryCode)}&n=${encodeURIComponent(formData.phoneNumber)}&a=${encodeURIComponent(walletAddress)}`;
  
      
      // const apiUrl = `https://api.insightgenesis.ai/foot?e=${encodeURIComponent(formData.email)}&c=${encodeURIComponent(countryCode)}&n=${encodeURIComponent(formData.phoneNumber)}`;
    
      // Gọi API mới
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'auth': SECRET_KEY
        }
      });
    
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    
      const data = await response.json();
      
      // Xử lý kết quả
      setAnalysisResult(data);
      setApiError(null);
      
      setTimeout(() => {
        if (resultRef.current) {
          resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 200);
      
    } catch (error) {
      console.error('Error calling digital footprint API:', error);
      setApiError(error.message || 'Có lỗi xảy ra khi gọi API.');
      setAnalysisResult(null);
    } finally {
      setLoading(false)
    }
  }

  // Hàm sinh danh sách Important Notes từ dữ liệu API
  function getImportantNotes(data) {
    if (!data) return [];
    const notes = [];
    const demo = data.demoCustomer || {};
    const email = demo.email;
    const phone = demo.phone;
    const emailBasic = demo.digitalSocialData?.email?.basic || {};
    const phoneBasic = demo.digitalSocialData?.phone?.basic || {};
    const emailSummary = demo.digitalSocialDataSummary?.emailSummary || {};
    const phoneSummary = demo.digitalSocialDataSummary?.phoneSummary || {};
    // Email deliverable
    if (emailBasic.deliverable) {
      notes.push('The email looks good. Plenty of information found');
    } else {
      notes.push('The email address could not be verified as deliverable');
    }
    // Digital info about phone
    if ((phoneSummary.registeredProfiles || 0) < 2) {
      notes.push("We haven't found much digital information about this phone");
    }
    // Phone spam
    if (phoneBasic.phoneValid && phoneBasic.isSpam === false) {
      notes.push("The phone number is not involved in spam activities.");
    }
    // Phone linked accounts
    if (phoneSummary.registeredProfiles) {
      notes.push(`The phone number is linked to ${phoneSummary.registeredProfiles} accounts.`);
    }
    // Phone country
    if (phoneBasic.country) {
      notes.push(`The phone number is from ${phoneBasic.country === 'AF' ? 'Afghanistan' : phoneBasic.country}`);
    }
    // Phone disposable
    if (phoneBasic.phoneDisposable === false) {
      notes.push('The phone number is not listed as disposable on provider sites.');
    }
    // Email can receive
    if (emailBasic.deliverable) {
      notes.push('The email address exists and can receive messages.');
    }
    // Email disposable
    if (emailBasic.domainDetails && emailBasic.domainDetails.disposable === false) {
      notes.push('The domains is not associated with disposable email address.');
    }
    // Email linked accounts
    if (emailSummary.registeredProfiles) {
      notes.push(`The email is linked to ${emailSummary.registeredProfiles} accounts.`);
    }
    // Email breached
    if (emailBasic.breach && emailBasic.breach.isBreached) {
      notes.push(`The email has been compromised in ${emailBasic.breach.noOfBreaches} data breaches.`);
    }
    return notes;
  }

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
    <div className="footprint-root">
      <header className="footprint-header">
        <h1 className="footprint-title">
          TEST OUR <span className="blue">PRE-BUILT BEHAVIOR<br/>MODULES</span> FOR YOURSELF
        </h1>
        <p className="footprint-subtitle">
          Our integrated behavior modules enable you to get started immediately. Try it for yourself.
        </p>
      </header>
      <div className="footprint-card-row">
        <div className="footprint-card" onClick={() => navigate('/insights-form/face-analysis')}>
          <img src={faceIcon} alt="Face Scan" className="footprint-card-icon" />
          <div className="footprint-card-title">Face Scan Analysis</div>    
        </div>
        <div className="footprint-card" onClick={() => navigate('/insights-form/video-analysis')}>
          <img src={videoIcon} alt="Voice" className="footprint-card-icon" />
          <div className="footprint-card-title">Voice Analysis</div>     
        </div>
        <div className="footprint-card" onClick={() => navigate('/insights-form/digital-footprint')}>
          <img src={footPrintIcon} alt="Digital Footprint" className="footprint-card-icon" />
          <div className="footprint-card-title">Digital Footprint</div>  
        </div>
      </div>
      <section className="footprint-section">
        <div className="footprint-section-title">
          <h2>DIGITAL FOOTPRINT</h2>
          <p>The Digital Footprints module enables improved sales conversions and enhanced risk profiles by modelling customer mobile and email usage.</p>
        </div>
        <form className="footprint-form" onSubmit={handleSubmit}>
          {apiError && (
            <div style={{color: 'red', marginBottom: 16, fontWeight: 500}}>{apiError}</div>
          )}
          <div className="footprint-form-group">
            <label className="footprint-form-label">Full name</label>
            <input
              type="text"
              className="footprint-form-input"
              placeholder="John Doe"
              value={formData.fullName}
              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
              required
            />
          </div>
          <div className="footprint-form-row">
            <div className="footprint-form-group">
              <label className="footprint-form-label">Gender</label>
              <select
                className="footprint-form-select"
                value={formData.gender}
                onChange={e => setFormData({...formData, gender: e.target.value})}
                required
              >
                <option value="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="footprint-form-group">
              <label className="footprint-form-label">Birthdate</label>
              <input
                className="footprint-form-input"
                type="date"
                value={formData.birthdate}
                onChange={(e) => setFormData({...formData, birthdate: e.target.value})}
                required
              />
            </div>
          </div>
          <div className="footprint-form-group">
            <label className="footprint-form-label">Email</label>
            <input
              className="footprint-form-input"
              type="email"
              placeholder="john@somemail.com"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>
          <div className="footprint-form-row">
            <div className="footprint-form-group">
              <label className="footprint-form-label">Country code</label>
              <select
                className="footprint-form-select"
                value={formData.phoneCode}
                onChange={e => setFormData({...formData, phoneCode: e.target.value})}
                required
              >
                <option value="">Code</option>
                {COUNTRY_CODES.map((c) => (
                  <option key={c.code} value={c.dial_code}>{c.emoji} {c.name} ({c.dial_code})</option>
                ))}
              </select>
            </div>
            <div className="footprint-form-group">
              <label className="footprint-form-label">Phone number</label>
              <input
                type="tel"
                className="footprint-form-input"
                placeholder="Phone number"
                value={formData.phoneNumber}
                onChange={e => setFormData({...formData, phoneNumber: e.target.value})}
                required
              />
            </div>
          </div>
          <p className="footprint-form-terms">
            By clicking 'Show insights', you agree to the Insight Geniesis AI's <a href="/terms-of-service">Terms of Service</a> and <a href="/privacy-policy">Privacy Policy</a>.
          </p>
          <button type="submit" className="footprint-submit" disabled={loading}>
            {loading ? 'Processing...' : 'Show insight'}
          </button>
        </form>
      </section>
      {analysisResult && (
        <div className="footprint-result-container" ref={resultRef}>
          <div className="footprint-result-header">
            <div className="footprint-result-main">
              <div className="footprint-report-label">REPORT</div>
              <h2 className="footprint-result-title">
                Data availability: {analysisResult.dataAvailability || 'High'}
              </h2>
              <div className="footprint-result-email">Email: {formData.email}</div>
              <p className="footprint-result-desc">
                The data availability score is a metric that assesses the sufficiency and quality of available data for conducting an accurate analysis or evaluation of an entity's digital footprint.
              </p>
              <div className="footprint-result-insights-list">
                <div className="footprint-result-insight-row">
                  <span>Phone insights:</span>
                  <span className="footprint-result-insight-value">{analysisResult.phoneInsights || 'Medium'}</span>
                  <span className="footprint-result-insight-icon success" />
                </div>
                <div className="footprint-result-insight-row">
                  <span>Email insights:</span>
                  <span className="footprint-result-insight-value">{analysisResult.emailInsights || 'Medium'}</span>
                  <span className="footprint-result-insight-icon success" />
                </div>
                <div className="footprint-result-insight-row">
                  <span>Social profile insights:</span>
                  <span className="footprint-result-insight-value">{analysisResult.socialProfileInsights || 'Low'}</span>
                  <span className="footprint-result-insight-icon danger" />
                </div>
                <div className="footprint-result-insight-row">
                  <span>eKYC verification:</span>
                  <span className="footprint-result-insight-value">{analysisResult.ekycVerification || 'Medium'}</span>
                  <span className="footprint-result-insight-icon success" />
                </div>
                <div className="footprint-result-insight-row">
                  <span>Online reputation:</span>
                  <span className="footprint-result-insight-value">{analysisResult.onlineReputation || 'Medium'}</span>
                  <span className="footprint-result-insight-icon success" />
                </div>
              </div>
            </div>
            <div className="footprint-result-risk">
              <div className="footprint-risk-circle">
                <div className="footprint-risk-label">High risk</div>
                <div className="footprint-risk-score">{analysisResult.scores?.risk || 57}%</div>
              </div>
              <div className="footprint-risk-note">
                * The risk probability score ranges from 0% to 100%. A lower percentage reflects a stronger digital profile, while a higher percentage indicates higher risk. To gain deeper insights into your score and explore ways to customize it, we encourage you to schedule a call.
              </div>
            </div>
          </div>
          <div className="footprint-result-notes">
            <h3>Important notes</h3>
            <ul>
              {getImportantNotes(analysisResult).map((note, idx) => (
                <li key={idx}>{note}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default DigitalFootprint;