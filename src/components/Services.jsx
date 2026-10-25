import React from 'react';
import { servicesData } from '../data';
import { ArrowRight, Check } from 'lucide-react';

export default function Services({ onOpenContact }) {
  return (
    <section className="section-block">
      <div className="site-wrapper">

        {/* Center Header */}
        <div className="section-center-head">
          <span className="tiny-section-tag">SERVICES</span>
          <h2 className="block-title">HERE'S HOW I CAN HELP!</h2>
        </div>

        {/* 3 Cards */}
        <div className="services-three-grid">
          {servicesData.map((service) => (
            <div key={service.id} className="service-feature-card">
              <div className="service-hex-icon">
                <span>{service.number}</span>
              </div>

              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.description}</p>

              {/* Bullet list */}
              <ul className="service-bullet-list">
                {service.bullets.map((b, idx) => (
                  <li key={idx} className="service-bullet-item">
                    <Check size={14} className="bullet-check-icon" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Full-width glowing purple action banner */}
        <div className="services-bottom-banner" onClick={onOpenContact}>
          <span className="banner-text">HAVE A CUSTOM PROJECT IN MIND? LET'S DISCUSS YOUR VISION</span>
          <span className="banner-arrow-circle">
            <ArrowRight size={18} />
          </span>
        </div>

      </div>
    </section>
  );
}
