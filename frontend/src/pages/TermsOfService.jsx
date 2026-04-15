import React from 'react';
import './TermsOfService.css';

const TermsOfService = () => (
  <div className="tos-root">
    <div className="tos-content">
      <h1 className="tos-title">TERMS OF SERVICE</h1>
      <p className="tos-desc">
        By registering an account with Insight Genesis, you agree to the following terms of service:
      </p>
      <ol className="tos-list">
        <li>You agree not use Insight Genesis for any illegal purposes.</li>
        <li>You agree not reverse engineer, hack, exploit or otherwise attack Insight Genesis or Insight Genesis's servers.</li>
        <li>Attempting to exploit, hack or spam Insight Genesis will lead to the termination of your account.</li>
        <li>We are not responsible for damages to you, your servers, your users or your users' hardware caused directly or indirectly by Insight Genesis.</li>
        <li>You may only implement Insight Genesis into websites, services or apps for which you have the authorization to do so. If you implement Insight Genesis on websites you have hacked, we will terminate your account.</li>
        <li>You understand that we reserve the right to terminate your account at any time and for any reason.</li>
        <li>You understand that we reserve the right to extend these Terms of Service in the future.</li>
      </ol>
    </div>
  </div>
);

export default TermsOfService; 