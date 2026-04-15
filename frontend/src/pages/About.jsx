import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1 className="page-title">About InSight Genesis</h1>
          <p className="page-subtitle">
            Pioneering the Future of AI and Blockchain Technology
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission">
        <div className="container">
          <div className="content-grid">
            <div className="text-content">
              <h2>Our Mission</h2>
              <p>
                Tại InSight Genesis, chúng tôi tin rằng sự kết hợp giữa AI và Blockchain sẽ tạo nên 
                một cuộc cách mạng trong cách con người tương tác với dữ liệu và công nghệ. Sứ mệnh 
                của chúng tôi là democratize access to intelligent insights và tạo ra một tương lai 
                phi tập trung hơn.
              </p>
              <p>
                Chúng tôi phát triển các giải pháp cutting-edge giúp cá nhân và tổ chức khai thác 
                sức mạnh của dữ liệu một cách an toàn, minh bạch và hiệu quả.
              </p>
            </div>
            <div className="image-content">
              <div className="mission-visual">
                <div className="visual-element">🎯</div>
                <h3>Vision 2030</h3>
                <p>Leading the decentralized AI revolution</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values">
        <div className="container">
          <h2 className="section-title">Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🔍</div>
              <h3>Transparency</h3>
              <p>Chúng tôi tin vào sự minh bạch trong mọi quy trình và thuật toán</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Collaboration</h3>
              <p>Xây dựng cộng đồng mạnh mẽ thông qua sự hợp tác và chia sẻ</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🚀</div>
              <h3>Innovation</h3>
              <p>Không ngừng đổi mới và tiên phong trong công nghệ</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🛡️</div>
              <h3>Security</h3>
              <p>Bảo mật và quyền riêng tư là ưu tiên hàng đầu</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team">
        <div className="container">
          <h2 className="section-title">Our Leadership Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">👨‍💼</div>
              <h3>Dr. Alex Chen</h3>
              <p className="member-role">CEO & Co-Founder</p>
              <p className="member-bio">
                Former AI researcher at Stanford with 15+ years in machine learning
              </p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👩‍💻</div>
              <h3>Sarah Johnson</h3>
              <p className="member-role">CTO & Co-Founder</p>
              <p className="member-bio">
                Blockchain expert and former Lead Engineer at Ethereum Foundation
              </p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👨‍🔬</div>
              <h3>Dr. Michael Roberts</h3>
              <p className="member-role">Chief Data Scientist</p>
              <p className="member-bio">
                PhD in Computer Science with expertise in deep learning and NLP
              </p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👩‍💼</div>
              <h3>Lisa Park</h3>
              <p className="member-role">VP of Business Development</p>
              <p className="member-bio">
                Strategic partnerships expert with MBA from Wharton
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline">
        <div className="container">
          <h2 className="section-title">Our Journey</h2>
          <div className="timeline-container">
            <div className="timeline-item">
              <div className="timeline-year">2021</div>
              <div className="timeline-content">
                <h3>Company Founded</h3>
                <p>InSight Genesis được thành lập với tầm nhìn kết hợp AI và Blockchain</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2022</div>
              <div className="timeline-content">
                <h3>First Product Launch</h3>
                <p>Ra mắt nền tảng AI insights đầu tiên với 10,000 người dùng</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2023</div>
              <div className="timeline-content">
                <h3>Series A Funding</h3>
                <p>Gọi vốn thành công $50M để mở rộng quy mô và phát triển</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2024</div>
              <div className="timeline-content">
                <h3>Global Expansion</h3>
                <p>Mở rộng ra 50+ quốc gia với 1M+ người dùng hoạt động</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="contact-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Join Our Mission</h2>
            <p>Be part of the future of AI and Blockchain technology</p>
            <div className="cta-buttons">
              <button className="btn btn-primary">Contact Us</button>
              <button className="btn btn-secondary">View Careers</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 