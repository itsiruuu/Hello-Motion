import React from 'react';
import { portfolioData } from '../data';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

export default function Portfolio({ onSelectProject }) {
  return (
    <section id="works" className="section-block">
      <div className="site-wrapper">

        {/* Header row with Title and Prev/Next arrows on the right */}
        <div className="portfolio-header-row">
          <div>
            <span className="tiny-section-tag">PORTFOLIO</span>
            <h2 className="block-title">
              RECENT WORK FOR<br />
              MY CLIENTS!
            </h2>
          </div>

          <div className="portfolio-arrow-controls">
            <button className="portfolio-circle-btn" aria-label="Previous Project">
              <ChevronLeft size={20} />
            </button>
            <button className="portfolio-circle-btn" aria-label="Next Project">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* 3 Project Cards */}
        <div className="portfolio-three-grid">
          {portfolioData.map((project) => (
            <div 
              key={project.id} 
              className="portfolio-mockup-card"
              onClick={() => onSelectProject(project)}
            >
              <div className="mockup-img-wrap">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="mockup-screen-img"
                  onError={(e) => {
                    // Fallback to high res if needed
                    e.target.src = project.highResImage;
                  }}
                />
              </div>

              {/* Card Footer: Category Label + Arrow */}
              <div className="mockup-card-footer">
                <span className="mockup-cat-label">{project.category}</span>
                <span className="mockup-arrow-icon">
                  <ArrowUpRight size={16} />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
