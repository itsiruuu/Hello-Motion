import React from 'react';
import { X, ExternalLink } from 'lucide-react';

// Video Modal Component - প্রোজেক্টের ভিডিও ও শোরিল দেখার পপ-আপ
export default function VideoModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="modal-content" 
        style={{ maxWidth: '800px', padding: '24px' }} 
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={22} />
        </button>

        <div style={{ marginBottom: '16px' }}>
          <span className="project-cat">{project.category || "Showreel"}</span>
          <h3 className="project-title" style={{ fontSize: '1.4rem', marginTop: '4px' }}>
            {project.title}
          </h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            Client: {project.client || "Hello Motion Studio"} • Year: {project.year || "2024"}
          </p>
        </div>

        {/* Video Player Box */}
        <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%', background: '#000', borderRadius: '14px', overflow: 'hidden' }}>
          <iframe
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
            src={project.videoUrl || "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"}
            title={project.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <p style={{ marginTop: '16px', fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
          {project.description}
        </p>
      </div>
    </div>
  );
}
