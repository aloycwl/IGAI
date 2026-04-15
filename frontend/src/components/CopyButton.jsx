import React, { useState } from 'react';
import copyIcon from '../assets/icons/copy.svg';

const CopyButton = ({ text, className = '' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`copy-button ${className}`}
      title="Copy to clipboard"
    >
      {copied ? (
        <span className="copy-success">✓</span>
      ) : (
        <img src={copyIcon} alt="copy" className="copy-icon" />
      )}
    </button>
  );
};

export default CopyButton; 