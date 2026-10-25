import React from 'react';
import { skillsData } from '../data';

export default function Skills({ onOpenContact }) {
  // SVG Icons for each skill matching the circular icons in the picture
  const renderSkillIcon = (id) => {
    switch (id) {
      case 1:
        // Motion Graphics (Purple Ae / 3D layers)
        return (
          <div className="skill-circle-icon icon-purple">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c084fc" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
        );
      case 2:
        // Color Grading (Color Wheel DaVinci)
        return (
          <div className="skill-circle-icon icon-multi">
            <svg width="22" height="22" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke="url(#colorWheelGrad)" strokeWidth="3" fill="none" />
              <defs>
                <linearGradient id="colorWheelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f59e0b" />
                  <stop offset="50%" stopColor="#ec4899" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
              <circle cx="12" cy="12" r="3" fill="#ffffff" />
            </svg>
          </div>
        );
      case 3:
        // Video Editing (Premiere Blue / Film)
        return (
          <div className="skill-circle-icon icon-blue">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="4" />
              <line x1="7" y1="2" x2="7" y2="22" />
              <line x1="17" y1="2" x2="17" y2="22" />
              <line x1="2" y1="12" x2="22" y2="12" />
            </svg>
          </div>
        );
      case 4:
        // Sound Design (Red Play / Wave)
        return (
          <div className="skill-circle-icon icon-red">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f43f5e" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <polygon points="10,8 16,12 10,16" fill="#f43f5e" />
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="services" className="section-block">
      <div className="site-wrapper">
        
        {/* Header row: Left title, Right button */}
        <div className="skills-header-row">
          <div>
            <span className="tiny-section-tag">MY EXPERTISE</span>
            <h2 className="block-title">
              MY MASTERING VIDEO<br />
              EDITING SKILLS
            </h2>
          </div>

          <button onClick={onOpenContact} className="btn-pill-purple">
            GET IN TOUCH
          </button>
        </div>

        {/* 4 Cards Grid */}
        <div className="skills-cards-grid">
          {skillsData.map((item) => (
            <div key={item.id} className="skill-card-box">
              <div className="skill-card-header">
                {renderSkillIcon(item.id)}
                <div className="skill-title-group">
                  <h3 className="skill-name">{item.title}</h3>
                  <span className="skill-type-tag">{item.type}</span>
                </div>
              </div>

              <p className="skill-desc-text">{item.description}</p>

              {/* Progress Bar line with circle knob as in screenshot */}
              <div className="skill-progress-bar-wrapper">
                <div 
                  className="skill-progress-fill" 
                  style={{ width: `${item.percentage}%` }}
                >
                  <span className="progress-knob"></span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
