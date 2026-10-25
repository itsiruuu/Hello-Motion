import React from 'react';
import { aboutData } from '../data';
import { ArrowUpRight } from 'lucide-react';
import aboutPortrait from '../assets/about-portrait.png';

export default function About({ onOpenContact }) {
  return (
    <section id="about" className="section-block about-section-bg">
      <div className="site-wrapper">
        <div className="about-two-col">

          {/* Left Column: Editor Portrait Card with User's Exact High-Res Image */}
          <div className="about-photo-wrapper">
            <img 
              src={aboutPortrait} 
              alt="Digital Marketer & Video Editor" 
              className="about-portrait-img"
            />
          </div>

          {/* Right Column: Bio, Stats & Button */}
          <div className="about-info-col">
            <span className="tiny-section-tag">{aboutData.tag}</span>
            <h2 className="block-title about-title-exact">
              PASSIONATE ON DIGITAL<br />
              MARKETER FOCUSED ON<br />
              DRIVING RESULTS.
            </h2>

            <p className="about-paragraph">
              {aboutData.description}
            </p>

            {/* 3 Stats Boxes */}
            <div className="about-stats-row">
              {aboutData.stats.map((stat, idx) => (
                <div key={idx} className="about-stat-card">
                  <div className="stat-big-num">{stat.number}</div>
                  <div className="stat-small-label">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Action Pill Button */}
            <button onClick={onOpenContact} className="btn-pill-purple">
              {aboutData.buttonText} <ArrowUpRight size={16} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
