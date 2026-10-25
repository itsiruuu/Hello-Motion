import React, { useState } from 'react';
import { experienceData } from '../data';

export default function Experience() {
  const [activeTab, setActiveTab] = useState('experience');

  const currentList = experienceData[activeTab] || experienceData.experience;

  // Render SVG icons matching reference (orange basketball/dribbble, green app, orange art)
  const renderExpIcon = (type) => {
    switch (type) {
      case 'dribbble':
        return (
          <div className="timeline-circle-icon icon-dribbble">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
              <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
              <path d="M8.56 2.75c4.37 6 6 11.42 7.15 19.18" />
            </svg>
          </div>
        );
      case 'spotify':
        return (
          <div className="timeline-circle-icon icon-spotify">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M8 11.5c3-1 7-.5 10 1.2" />
              <path d="M7 14.5c3.5-1 6.5-.5 9.5 1.2" />
              <path d="M9 8.5c3.5-1 8-.5 11 1.2" />
            </svg>
          </div>
        );
      default:
        return (
          <div className="timeline-circle-icon icon-default">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <polygon points="12 6 15 12 9 12" />
            </svg>
          </div>
        );
    }
  };

  return (
    <section className="section-block">
      <div className="site-wrapper">

        {/* Center Header */}
        <div className="section-center-head">
          <span className="tiny-section-tag">EDUCATION & EXPERIENCE</span>
          <h2 className="block-title">
            MY BACKGROUND AND<br />
            ACHIEVEMENTS
          </h2>
        </div>

        {/* Segmented Pill Switcher matching reference */}
        <div className="capsule-tab-switcher">
          <button 
            className={`capsule-tab-item ${activeTab === 'experience' ? 'active' : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            Experience
          </button>
          <button 
            className={`capsule-tab-item ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            Education
          </button>
          <button 
            className={`capsule-tab-item ${activeTab === 'awards' ? 'active' : ''}`}
            onClick={() => setActiveTab('awards')}
          >
            Awards
          </button>
        </div>

        {/* Single Box with Horizontal Dividers matching screenshot */}
        <div className="experience-grouped-container">
          {currentList.map((item, idx) => (
            <div key={item.id} className="timeline-row-item">
              
              {/* Left Column: Icon + Role & Company */}
              <div className="timeline-left-info">
                {renderExpIcon(item.icon)}
                <div>
                  <h3 className="timeline-role-title">{item.role}</h3>
                  <div className="timeline-company-name">{item.company}</div>
                  <p className="timeline-detail-desc">{item.description}</p>
                </div>
              </div>

              {/* Right Column: Period Badge */}
              <div className="timeline-period-badge">
                {item.period}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
