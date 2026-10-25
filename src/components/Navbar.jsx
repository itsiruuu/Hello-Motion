import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../data';
import brandLogo from '../assets/logo.png';

export default function Navbar({ onOpenContact }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-container">
        
        {/* Brand Logo with exact user uploaded logo */}
        <a href="#home" className="brand-logo">
          <img src={brandLogo} alt="Gerold Logo" className="site-brand-logo-img" />
        </a>

        {/* Center Navigation Links: HOME, SERVICES, ABOUT, PORTFOLIO, BLOG */}
        <nav className="desktop-nav">
          <ul className="nav-menu">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <a href={link.href} className="nav-item-link">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right CTA Button */}
        <div className="nav-right-box">
          <button onClick={onOpenContact} className="btn-nav-talk">
            LET'S TALK
          </button>

          {/* Mobile hamburger */}
          <button 
            className="mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Navigation"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="mobile-drawer">
          {navLinks.map((link, idx) => (
            <a 
              key={idx} 
              href={link.href} 
              className="mobile-drawer-link"
              onClick={() => setMobileOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => { setMobileOpen(false); onOpenContact(); }} 
            className="btn-nav-talk"
            style={{ width: '100%', marginTop: '12px' }}
          >
            LET'S TALK
          </button>
        </div>
      )}
    </header>
  );
}
