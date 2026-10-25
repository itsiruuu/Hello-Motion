import React, { useState } from 'react';
import { testimonialsData } from '../data';
import { ArrowUpRight, Star } from 'lucide-react';

export default function Testimonials({ onOpenContact }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = testimonialsData[activeIdx] || testimonialsData[0];

  return (
    <section className="section-block">
      <div className="site-wrapper">
        <div className="testimonials-two-col">

          {/* Left Column: Heading, Tag and Button */}
          <div className="testimonials-left-col">
            <span className="tiny-section-tag">TESTIMONIALS</span>
            <h2 className="block-title">
              LET'S HEAR FROM<br />
              DEAR CLIENTS
            </h2>

            <button onClick={onOpenContact} className="btn-pill-purple" style={{ marginTop: '24px' }}>
              SEE MORE <ArrowUpRight size={16} />
            </button>
          </div>

          {/* Right Column: Stacked Glowing Purple Border Card */}
          <div className="testimonials-right-col">
            <div className="testimonial-glow-card">
              
              {/* Client Info Header */}
              <div className="client-header-row">
                <div className="client-user-group">
                  <img 
                    src={current.avatar} 
                    alt={current.name} 
                    className="client-round-avatar" 
                  />
                  <div>
                    <h4 className="client-full-name">{current.name}</h4>
                    <span className="client-role-tag">{current.role}</span>
                  </div>
                </div>

                {/* 5 Stars */}
                <div className="stars-rating-wrap">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
              </div>

              {/* Quote Text */}
              <p className="client-quote-paragraph">
                "{current.quote}"
              </p>

            </div>

            {/* Peeking Second Tab below card matching screenshot */}
            <div className="testimonial-stacked-peek" onClick={() => setActiveIdx(activeIdx === 0 ? 1 : 0)}>
              <div className="peek-user-hint">
                <div className="peek-avatar-mini"></div>
                <span className="peek-text">View Next Client Feedback →</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
