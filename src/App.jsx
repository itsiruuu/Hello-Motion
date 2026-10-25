import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import SlantedTicker from './components/SlantedTicker';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import VideoModal from './components/VideoModal';
import './App.css';

// Main App Component - সম্পূর্ণ ওয়েবসাইটের মেইন কম্পোনেন্ট
function App() {
  // Modal এবং Notification স্টেট (State)
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  // নোটিফিকেশন মেসেজ দেখানোর ফাংশন
  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  // শোরিল ভিডিও প্লে করার হ্যান্ডলার
  const handleOpenShowreel = () => {
    setSelectedProject({
      title: "Hello Motion — Official 2024 Showreel",
      category: "Cinematic Showreel",
      client: "Hello Motion Studio",
      year: "2024",
      description: "A showcase of our best motion graphic commercials, viral creator edits, and studio color grades.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
    });
  };

  return (
    <div className="app-container">
      {/* 1. হেডার ও নেভিগেশন বার */}
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      {/* 2. হিরো সেকশন */}
      <Hero onOpenContact={() => setIsContactOpen(true)} />

      {/* 3. ভিডিও এডিটিং ও মোশন স্কিলস */}
      <Skills onOpenContact={() => setIsContactOpen(true)} />

      {/* 4. ক্রিয়েটর পরিচিতি ও পরিসংখ্যান */}
      <About onOpenContact={() => setIsContactOpen(true)} />

      {/* 5. সার্ভিসেস সেকশন */}
      <Services onOpenContact={() => setIsContactOpen(true)} />

      {/* 6. পোর্টফোলিও ও ক্লায়েন্ট কাজ */}
      <Portfolio onSelectProject={(project) => setSelectedProject(project)} />

      {/* 7. বাঁকানো স্ক্রোলিং নিয়ন টেক্সট ব্যানার */}
      <SlantedTicker />

      {/* 8. অভিজ্ঞতা, পড়াশোনা ও অ্যাওয়ার্ডস */}
      <Experience />

      {/* 9. ক্লায়েন্ট রিভিউ ও ফিডব্যাক */}
      <Testimonials />

      {/* 10. সাম্প্রতিক ব্লগ পোস্ট */}
      <Blog />

      {/* 11. আধুনিক বেগুনি ফুটার */}
      <Footer onShowToast={showToast} />

      {/* মোডাল: মেসেজ পাঠানোর ফর্ম */}
      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
        onShowToast={showToast} 
      />

      {/* মোডাল: প্রজেক্ট ভিডিও দেখার উইন্ডো */}
      <VideoModal 
        isOpen={Boolean(selectedProject)} 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      {/* নোটিফিকেশন টোস্ট */}
      {toastMessage && (
        <div className="toast-notice">
          ✓ {toastMessage}
        </div>
      )}
    </div>
  );
}

export default App;
