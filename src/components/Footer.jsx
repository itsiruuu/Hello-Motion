import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import brandLogo from '../assets/logo.png';

export default function Footer({ onShowToast }) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    onShowToast(`Subscribed successfully with ${email}!`);
    setEmail('');
  };

  return (
    <footer className="footer-container-exact">
      <div className="footer-inner-content">

        {/* Top 4-Column Grid */}
        <div className="footer-columns-grid">

          {/* Col 1: Brand Info with Exact Logo */}
          <div className="footer-brand-col">
            <div className="footer-logo-row">
              <img src={brandLogo} alt="Gerold Logo" className="footer-brand-logo-img" />
            </div>
            <p className="footer-tagline-text">
              Empowering businesses and creators with modern video solutions, high-retention editing, and 3D motion graphics.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="footer-links-col">
            <h4 className="footer-heading-exact">QUICK LINKS</h4>
            <ul className="footer-clean-links">
              <li><a href="#about">About Me</a></li>
              <li><a href="#works">Portfolios</a></li>
              <li><a href="#services">Services & Pricing</a></li>
              <li><a href="#home">Contact</a></li>
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div className="footer-links-col">
            <h4 className="footer-heading-exact">CONTACT</h4>
            <ul className="footer-clean-links">
              <li>info@hellomotion.io</li>
              <li>+1 (234) 567-890</li>
              <li>San Francisco, CA</li>
            </ul>
          </div>

          {/* Col 4: Subscribe Newsletter */}
          <div className="footer-subscribe-col">
            <h4 className="footer-heading-exact">SUBSCRIBE NEWSLETTER</h4>
            <p className="footer-sub-text">Stay updated with latest video tips & templates</p>
            
            <form onSubmit={handleSubmit} className="footer-newsletter-pill">
              <input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="newsletter-clean-input"
              />
              <button type="submit" className="newsletter-black-btn" aria-label="Subscribe">
                <ArrowRight size={16} />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Horizontal Bar */}
        <div className="footer-bottom-exact-bar">
          <div className="footer-copy-left">
            GEROLD © 2024
          </div>

          <div className="footer-policy-center">
            <a href="#about">About</a>
            <span>•</span>
            <a href="#home">Privacy</a>
            <span>•</span>
            <a href="#home">Terms</a>
            <span>•</span>
            <a href="#home">Contact</a>
          </div>

          <div className="footer-credit-right">
            Designed for High Conversion
          </div>
        </div>

      </div>
    </footer>
  );
}
