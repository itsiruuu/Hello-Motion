import React from 'react';
import { heroData } from '../data';
import { ChevronDown } from 'lucide-react';
import heroPortrait from '../assets/hero-portrait.png';
import motionOrb from '../assets/motion-orb.png';

export default function Hero({ onOpenContact }) {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">

        {/* 1. Main Giant Headline: HELLO [ROTATING ORB] MOTION */}
        <h1 className="hero-headline">
          <span className="hero-word">{heroData.titleLeft}</span>
          
          {/* User's Exact Glowing 3D Orb that rotates continuously */}
          <div className="hero-orb-wrapper">
            {/* Outer Circular Curved Text Ring */}
            <svg className="orb-rotating-svg" viewBox="0 0 160 160">
              <path
                id="orbCirclePath"
                d="M 80, 80 m -64, 0 a 64,64 0 1,1 128,0 a 64,64 0 1,1 -128,0"
                fill="none"
              />
              <text className="orb-curved-text">
                <textPath href="#orbCirclePath" startOffset="0%">
                  {heroData.orbRingText}
                </textPath>
              </text>
            </svg>

            {/* Exactly the user-uploaded Orb spinning non-stop */}
            <img 
              src={motionOrb} 
              alt="Rotating Motion Orb" 
              className="hero-orb-image-spinning"
            />
          </div>

          <span className="hero-word">{heroData.titleRight}</span>
        </h1>

        {/* 2. Center Visual Area with Arch Portrait & Floating Callouts */}
        <div className="hero-center-stage">

          {/* Left Pointer Callout */}
          <div className="hero-callout-left">
            <div className="callout-card">
              <span className="callout-tag">✦ {heroData.leftTag}</span>
              <p className="callout-title">{heroData.leftTitle}</p>
            </div>
            
            {/* Elbow pointer line pointing to arch */}
            <div className="pointer-elbow-line">
              <span className="elbow-dot"></span>
            </div>

            <button onClick={onOpenContact} className="pill-action-tag">
              <span className="pulse-dot"></span>
              {heroData.leftAction}
            </button>
          </div>

          {/* Center Arch Photo Container with User's Exact High-Res Image */}
          <div className="hero-arch-frame">
            <img 
              src={heroPortrait} 
              alt="Creative Video Editor & Motion Designer"
              className="arch-portrait-image"
            />
          </div>

          {/* Right Info & Experience Callout */}
          <div className="hero-callout-right">
            <p className="hero-right-desc">
              {heroData.rightDesc}
            </p>

            <div className="hero-exp-block">
              <div className="hero-exp-number">{heroData.experienceYears}</div>
              <div className="hero-exp-label">{heroData.experienceLabel}</div>
              
              {/* Circular graphic ring from reference */}
              <div className="circular-progress-badge">
                <svg viewBox="0 0 40 40" className="badge-ring-svg">
                  <circle cx="20" cy="20" r="16" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="3" />
                  <circle 
                    cx="20" 
                    cy="20" 
                    r="16" 
                    fill="none" 
                    stroke="#a855f7" 
                    strokeWidth="3" 
                    strokeDasharray="100" 
                    strokeDashoffset="25" 
                    strokeLinecap="round"
                  />
                </svg>
                <div className="badge-inner-dot"></div>
              </div>
            </div>
          </div>

        </div>

        {/* 3. Scroll Down Hint */}
        <div className="hero-scroll-hint">
          <ChevronDown size={14} className="bounce-arrow" />
          <span>{heroData.scrollText}</span>
        </div>

      </div>

      {/* 4. Software Tools Bar under Hero */}
      <div className="hero-tools-strip">
        <div className="tools-strip-inner">
          {heroData.tools.map((tool, idx) => (
            <div key={idx} className="tool-strip-item">
              <span className="tool-strip-dot"></span>
              <span className="tool-strip-name">{tool}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
