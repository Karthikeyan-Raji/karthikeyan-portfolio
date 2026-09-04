import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import ResumeModal from './components/ResumeModal';
import Footer from './components/Footer';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050811] text-slate-300 relative selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Background Interactive Ambient Grid & Radial Noise */}
      <div className="fixed inset-0 bg-grid-pattern opacity-60 pointer-events-none z-0" />
      <div className="fixed inset-0 bg-radial from-transparent via-[#050811]/70 to-[#050811] pointer-events-none z-0" />

      {/* Main App Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar onOpenResume={() => setIsResumeOpen(true)} />
        
        <main className="flex-1">
          <HeroSection onOpenResume={() => setIsResumeOpen(true)} />
          <ProjectsSection />
          <SkillsSection />
          <ExperienceSection />
          <EducationSection />
          <ContactSection />
        </main>

        <Footer onOpenResume={() => setIsResumeOpen(true)} />
      </div>

      {/* Interactive Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
