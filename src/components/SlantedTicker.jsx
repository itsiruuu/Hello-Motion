import React from 'react';

export default function SlantedTicker() {
  const lineOne = [
    "MOTION GRAPHICS",
    "VIDEO EDITING",
    "3D VISUALS",
    "COLOR GRADING",
    "SOUND DESIGN",
    "VFX COMPOSITING",
    "MOTION GRAPHICS",
    "VIDEO EDITING",
    "3D VISUALS",
  ];

  const lineTwo = [
    "4K RESOLUTION",
    "120 FPS HIGH FRAME RATE",
    "CINEMATIC LOOKS",
    "HIGH AUDIENCE RETENTION",
    "VIRAL HOOK PACING",
    "ACES COLOR GRADING",
    "4K RESOLUTION",
    "120 FPS HIGH FRAME RATE",
  ];

  return (
    <div className="dual-slanted-ticker-container">
      {/* Top Bright Solid Purple Ribbon */}
      <div className="slanted-ribbon-solid">
        <div className="ribbon-scroll-track-left">
          {lineOne.concat(lineOne).map((text, idx) => (
            <span key={idx} className="ribbon-text-item">
              <span className="ribbon-star">✦</span>
              <span>{text}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Darker Translucent Ribbon */}
      <div className="slanted-ribbon-dark">
        <div className="ribbon-scroll-track-right">
          {lineTwo.concat(lineTwo).map((text, idx) => (
            <span key={idx} className="ribbon-text-item-dark">
              <span className="ribbon-star">✦</span>
              <span>{text}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
