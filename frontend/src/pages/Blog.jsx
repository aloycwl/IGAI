import React from 'react';
import './Blog.css';
import blogImage from '../assets/blog.png';
import blogImage1 from '../assets/blog1.png';
import blogImage2 from '../assets/blog2.png';
import blogImage3 from '../assets/blog3.png';
import blogImage4 from '../assets/blog4.png';
import blogImage5 from '../assets/blog5.png';
import blogImage6 from '../assets/blog6.png';

const Blog = () => {
  const featuredPost = {
    id: 0,
    title: 'EXPLORING THE WONDERS OF THE UNKNOWN',
    excerpt: 'Unraveling the Secrets of the Invisible World\nJoin us as we delve into the fascinating realm of the unseen, exploring the hidden forces and phenomena that shape our reality. From the microscopic wonders of Nanotex undiscovered gems.',
    author: 'Community',
    date: 'April 25, 2025',
    category: 'Insight',
    readTime: '12 min read',
    image: blogImage
  };

  const blogPosts = [
    {
      id: 1,
      title: 'EXPLORING THE WONDERS OF THE UNKNOWN',
      excerpt: 'Unraveling the Secrets of the Invisible World\nJoin us as we delve into the fascinating realm of the unseen...',
      author: 'Community',
      date: 'April 5, 2025',
      category: 'Community',
      readTime: '8 min read',
      image: blogImage1,
      url: "https://insightgenesis0.wordpress.com/"
    },
    {
      id: 2,
      title: 'EXPLORING THE WONDERS OF THE UNKNOWN',
      excerpt: 'Unraveling the Secrets of the Invisible World\nJoin us as we delve into the fascinating realm of the unseen...',
      author: 'Community',
      date: 'April 10, 2025',
      category: 'Community',
      readTime: '6 min read',
      image: blogImage2,
      url: null
    },
    {
      id: 3,
      title: 'EXPLORING THE WONDERS OF THE UNKNOWN',
      excerpt: 'Unraveling the Secrets of the Invisible World\nJoin us as we delve into the fascinating realm of the unseen...',
      author: 'Community',
      date: 'April 13, 2025',
      category: 'Community',
      readTime: '10 min read',
      image: blogImage3,
      url: null
    },
    {
      id: 4,
      title: 'EXPLORING THE WONDERS OF THE UNKNOWN',
      excerpt: 'Unraveling the Secrets of the Invisible World\nJoin us as we delve into the fascinating realm of the unseen...',
      author: 'Community',
      date: 'April 5, 2025',
      category: 'Community',
      readTime: '7 min read',
      image: blogImage4,
      url: null
    },
    {
      id: 5,
      title: 'EXPLORING THE WONDERS OF THE UNKNOWN',
      excerpt: 'Unraveling the Secrets of the Invisible World\nJoin us as we delve into the fascinating realm of the unseen...',
      author: 'Community',
      date: 'April 13, 2025',
      category: 'Community',
      readTime: '9 min read',
      image: blogImage5,
      url: null
    },
    {
      id: 6,
      title: 'EXPLORING THE WONDERS OF THE UNKNOWN',
      excerpt: 'Unraveling the Secrets of the Invisible World\nJoin us as we delve into the fascinating realm of the unseen...',
      author: 'Community',
      date: 'April 13, 2025',
      category: 'Community',
      readTime: '5 min read',
      image: blogImage6,
      url: null
    }
  ];

  const categories = ['All', 'Community', 'Insight', 'Products', 'News'];
  const [selectedCategory, setSelectedCategory] = React.useState('Community');

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="blog">
      <section className="trending-header">
        <div className="trending-text">
          // TRENDING // HOT NEWS // TRENDING
        </div>
      </section>

      <section className="featured-post">
        <div className="container">
          <div className="featured-card">
            <div className="featured-image">
              <img src={featuredPost.image} alt={featuredPost.title} />
            </div>
            <div className="featured-content">
              <h2 className="featured-title">{featuredPost.title}</h2>
              <p className="featured-excerpt">{featuredPost.excerpt}</p>
              <div className="featured-meta">
                <span className="featured-read-time">{featuredPost.readTime}</span>
                <span className="featured-date">{featuredPost.date}</span>
              </div>
            </div>
          </div>
          <div className="carousel-dots">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      </section>

      <section className="blog-content">
        <div className="container">
          <div className="blog-header">
            <h2 className="blog-section-title">BLOGS</h2>
            <div className="blog-controls">
              <div className="blog-filters">
                <span className="category-label">Category</span>
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <button className="newest-btn">
                <span className="sort-icon">⚡</span>
                Newest First
              </button>
            </div>
          </div>

          <div className="blog-grid">
            {filteredPosts.map((post) => (
              <article key={post.id} className="blog-card">
                <div className="blog-image">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="blog-content-area">
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <div className="blog-footer">
                    <div className="blog-meta">
                      <span className="category-tag">{post.category}</span>
                      <span className="blog-date">{post.date}</span>
                    </div>
                    {post.url ? (
                      <a
                        className="read-tag"
                        href={post.url.startsWith('http') ? post.url : `https://${post.url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read
                      </a>
                    ) : (
                      <span className="read-tag">Read</span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="view-more">
            <button className="view-more-btn">View more</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog; 