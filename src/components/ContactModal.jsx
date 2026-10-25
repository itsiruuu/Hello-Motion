import React, { useState } from 'react';
import { X, Send } from 'lucide-react';

// Contact Modal Component - সরাসরি যোগাযোগ ও প্রোজেক্ট শুরুর পপ-আপ
export default function ContactModal({ isOpen, onClose, onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Motion Graphic Design',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onShowToast(`Thank you, ${formData.name}! Your message has been sent successfully.`);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={22} />
        </button>

        <span className="section-tag">✦ Get In Touch</span>
        <h3 className="section-title" style={{ fontSize: '1.75rem', marginBottom: '8px' }}>
          LET'S TALK ABOUT YOUR <span className="text-gradient">PROJECT</span>
        </h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '24px' }}>
          Fill out the details below and I will get back to you within 24 hours.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Your Name</label>
            <input 
              type="text" 
              required
              className="form-input" 
              placeholder="e.g. Shakib Ahmed"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input 
              type="email" 
              required
              className="form-input" 
              placeholder="e.g. shakib@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Service Needed</label>
            <select 
              className="form-input"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            >
              <option value="Motion Graphic Design">Motion Graphic Design & 3D</option>
              <option value="YouTube & Long Form Editing">YouTube & Long Form Editing</option>
              <option value="Commercial Social Video Ads">Commercial Social Video Ads</option>
              <option value="Color Grading & Finishing">Color Grading & Finishing</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Project Details</label>
            <textarea 
              rows={4}
              required
              className="form-textarea" 
              placeholder="Tell me about your footage, deadline, and creative vision..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
          </div>

          <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '8px' }}>
            Send Inquiry <Send size={16} />
          </button>
        </form>
      </div>
    </div>
  );
}
