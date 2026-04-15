import React, { useRef, useState } from 'react';
import './PopupAudioDropzone.css';

const SECRET_KEY = 'c5UqVPihwtydCKe57YJPtpyE2ryB9AJn';

const PopupAudioDropzone = ({ open, onClose, industryOptions = [], selectedIndustry, onAnalysisComplete }) => {
  const [file, setFile] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);
  const inputRef = useRef();

  if (!open) return null;

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleAnalyze = async () => {
    if (!file) return;
    setIsAnalyzing(true);
  
    try {
      // Lấy địa chỉ ví từ localStorage
      const walletAddress = localStorage.getItem('a');
      if (!walletAddress) {
        throw new Error('Wallet address not found. Please log in again.');
      }
  
      // Tạo FormData cho API mới
      const formData = new FormData();
      formData.append('audio', file, file.name);
      // Đảm bảo selectedIndustry là số
      formData.append('v', Number(selectedIndustry));
      formData.append('a', walletAddress); // ADDRESS từ localStorage
  
      // Gọi API voice scanning mới
      const response = await fetch('https://api.insightgenesis.ai/v', {
        method: 'POST',
        headers: {
          'auth': SECRET_KEY
        },
        body: formData
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const result = await response.json();
      
      // Xử lý kết quả
      if (onAnalysisComplete) {
        onAnalysisComplete(result);
      }
      
      setAnalysisResult(result);
      
    } catch (error) {      
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      alert(`An error occurred while parsing voice: ${errorMessage}`);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="popup-upload-overlay" onClick={onClose}>
      <div className="popup-upload-modal" onClick={e => e.stopPropagation()}>
        <button className="popup-upload-close" onClick={onClose}>&times;</button>
        <div className="audio-dropzone-box"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onClick={handleClick}
        >
          <input
            type="file"
            accept="audio/*, .mp3, .mp4, .wav, .ogg, .flac, .aac, .aiff, .alac, .pcm, .wma"
            style={{ display: 'none' }}
            ref={inputRef}
            onChange={handleFileChange}
          />
          <div className="audio-dropzone-icon">&#8682;</div>
          <div className="audio-dropzone-text">
            {file ? file.name : 'Drag and drop your audio file here, or click to select'}
          </div>
        </div>
        <div className="audio-dropzone-note">
          Please talk continuously for 45 seconds to get an accurate result. Talk about the weather, your job, your family, or anything else you like.
        </div>
        <button className="audio-dropzone-analyze" disabled={!file || isAnalyzing} onClick={handleAnalyze}>
          {isAnalyzing ? 'Analyzing...' : 'Analyze now'}
        </button>
      </div>
    </div>
  );
};

export default PopupAudioDropzone;