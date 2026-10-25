import React from 'react';
import { blogData } from '../data';

export default function Blog() {
  return (
    <section id="blog" className="section-block">
      <div className="site-wrapper">

        {/* Center Header */}
        <div className="section-center-head">
          <span className="tiny-section-tag">ARTICLES</span>
          <h2 className="block-title">READ MY RECENT BLOG</h2>
        </div>

        {/* 3 Blog Cards */}
        <div className="blog-three-grid">
          {blogData.map((blog) => (
            <article key={blog.id} className="blog-article-card">
              
              {/* Thumbnail Container with Category Badge */}
              <div className="blog-image-container">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="blog-cover-img"
                  onError={(e) => {
                    e.target.src = blog.exactImage;
                  }}
                />
                <span className="blog-category-pill">{blog.tag}</span>
              </div>

              {/* Text Body */}
              <div className="blog-text-body">
                <div className="blog-date-meta">
                  <span>{blog.date}</span>
                  <span className="meta-separator">•</span>
                  <span>{blog.readTime}</span>
                </div>

                <h3 className="blog-article-title">{blog.title}</h3>
                <p className="blog-article-desc">{blog.excerpt}</p>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
