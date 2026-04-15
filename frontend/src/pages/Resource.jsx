import React from 'react';
import './Resource.css';

const Resource = () => {
  const resources = [
    {
      category: 'Documentation',
      items: [
        { title: 'API Documentation', description: 'Complete API reference guide', link: '#', type: 'doc' },
        { title: 'Developer Guide', description: 'Step-by-step integration guide', link: '#', type: 'guide' },
        { title: 'Best Practices', description: 'Recommended implementation patterns', link: '#', type: 'doc' }
      ]
    },
    {
      category: 'Whitepapers',
      items: [
        { title: 'Technical Whitepaper', description: 'Deep dive into our technology', link: '#', type: 'pdf' },
        { title: 'Tokenomics', description: 'IGT token economics and distribution', link: '#', type: 'pdf' },
        { title: 'Roadmap 2024-2025', description: 'Future development plans', link: '#', type: 'pdf' }
      ]
    },
    {
      category: 'Tools & SDKs',
      items: [
        { title: 'JavaScript SDK', description: 'Client-side SDK for web applications', link: '#', type: 'code' },
        { title: 'Python SDK', description: 'Server-side SDK for Python developers', link: '#', type: 'code' },
        { title: 'Testing Toolkit', description: 'Comprehensive testing tools', link: '#', type: 'tool' }
      ]
    }
  ];

  return (
    <div className="resource">
      <section className="resource-hero">
        <div className="container">
          <h1 className="page-title">Resources</h1>
          <p className="page-subtitle">
            Everything you need to build with InSight Genesis
          </p>
        </div>
      </section>

      <section className="resource-content">
        <div className="container">
          {resources.map((category, index) => (
            <div key={index} className="resource-category">
              <h2 className="category-title">{category.category}</h2>
              <div className="resource-grid">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="resource-card">
                    <div className="resource-icon">
                      {item.type === 'doc' && '📄'}
                      {item.type === 'guide' && '📚'}
                      {item.type === 'pdf' && '📋'}
                      {item.type === 'code' && '💻'}
                      {item.type === 'tool' && '🛠️'}
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <a href={item.link} className="resource-link">
                      Access Resource →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="community-resources">
        <div className="container">
          <h2 className="section-title">Community & Support</h2>
          <div className="community-grid">
            <div className="community-card">
              <div className="community-icon">💬</div>
              <h3>Discord Community</h3>
              <p>Join our developer community for discussions and support</p>
              <button className="btn btn-primary">Join Discord</button>
            </div>
            <div className="community-card">
              <div className="community-icon">📝</div>
              <h3>GitHub Repository</h3>
              <p>Access our open-source code and contribute to the project</p>
              <button className="btn btn-secondary">View GitHub</button>
            </div>
            <div className="community-card">
              <div className="community-icon">🎓</div>
              <h3>Learning Center</h3>
              <p>Tutorials, courses, and educational content</p>
              <button className="btn btn-outline">Start Learning</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resource; 