import React, { useState } from 'react';
import './GetAIInsight.css';

const GetAIInsight = () => {
  const [inputText, setInputText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('general');
  const [insights, setInsights] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const categories = [
    { value: 'general', label: 'General Analysis', icon: '🔍' },
    { value: 'finance', label: 'Financial Insights', icon: '💰' },
    { value: 'health', label: 'Health & Wellness', icon: '🏥' },
    { value: 'education', label: 'Educational Content', icon: '📚' },
    { value: 'business', label: 'Business Strategy', icon: '📊' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    setIsLoading(true);
    
    // Simulate AI processing
    setTimeout(() => {
      const mockInsights = {
        summary: "Dựa trên dữ liệu bạn cung cấp, đây là phân tích chi tiết:",
        keyPoints: [
          "Điểm mạnh chính được xác định trong dữ liệu",
          "Cơ hội cải thiện và tối ưu hóa",
          "Xu hướng và pattern được phát hiện",
          "Khuyến nghị hành động cụ thể"
        ],
        confidence: 94,
        category: categories.find(c => c.value === selectedCategory)?.label
      };
      setInsights(mockInsights);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="get-ai-insight">
      <section className="insight-hero">
        <div className="container">
          <h1 className="page-title">Get AI Insights</h1>
          <p className="page-subtitle">
            Harness the power of AI to gain intelligent insights from your data
          </p>
        </div>
      </section>

      <section className="insight-form-section">
        <div className="container">
          <div className="form-container">
            <form onSubmit={handleSubmit} className="insight-form">
              <div className="form-group">
                <label htmlFor="category">Select Analysis Category</label>
                <div className="category-grid">
                  {categories.map((category) => (
                    <div
                      key={category.value}
                      className={`category-card ${selectedCategory === category.value ? 'selected' : ''}`}
                      onClick={() => setSelectedCategory(category.value)}
                    >
                      <div className="category-icon">{category.icon}</div>
                      <span>{category.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="input-text">Your Data or Question</label>
                <textarea
                  id="input-text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Enter your data, question, or describe what you need insights about..."
                  rows={6}
                  className="input-textarea"
                />
              </div>

              <button
                type="submit"
                className={`submit-btn ${isLoading ? 'loading' : ''}`}
                disabled={isLoading || !inputText.trim()}
              >
                {isLoading ? 'Analyzing...' : 'Get AI Insights'}
              </button>
            </form>

            {isLoading && (
              <div className="loading-animation">
                <div className="ai-processing">
                  <div className="processing-icon">🤖</div>
                  <h3>AI is analyzing your input...</h3>
                  <div className="progress-bar">
                    <div className="progress-fill"></div>
                  </div>
                </div>
              </div>
            )}

            {insights && !isLoading && (
              <div className="insights-result">
                <div className="result-header">
                  <h2>✨ AI Insights Generated</h2>
                  <div className="confidence-badge">
                    Confidence: {insights.confidence}%
                  </div>
                </div>

                <div className="insight-content">
                  <div className="summary-section">
                    <h3>Summary</h3>
                    <p>{insights.summary}</p>
                  </div>

                  <div className="key-points-section">
                    <h3>Key Insights</h3>
                    <ul className="insights-list">
                      {insights.keyPoints.map((point, index) => (
                        <li key={index} className="insight-item">
                          <span className="bullet">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="actions-section">
                    <button className="btn btn-primary">Download Report</button>
                    <button className="btn btn-secondary">Share Insights</button>
                    <button className="btn btn-outline">Save to Dashboard</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="features-preview">
        <div className="container">
          <h2 className="section-title">AI Capabilities</h2>
          <div className="capabilities-grid">
            <div className="capability-card">
              <div className="capability-icon">🧠</div>
              <h3>Deep Learning Analysis</h3>
              <p>Advanced neural networks for complex pattern recognition</p>
            </div>
            <div className="capability-card">
              <div className="capability-icon">📈</div>
              <h3>Predictive Modeling</h3>
              <p>Forecast trends and outcomes with high accuracy</p>
            </div>
            <div className="capability-card">
              <div className="capability-icon">🔒</div>
              <h3>Secure Processing</h3>
              <p>Your data is encrypted and processed securely</p>
            </div>
            <div className="capability-card">
              <div className="capability-icon">⚡</div>
              <h3>Real-time Results</h3>
              <p>Get insights in seconds, not hours</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetAIInsight; 