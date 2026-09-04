import React from 'react';
import { ArrowUp, Mail, Heart, Sparkles } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer({ onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#03060e] text-slate-400 py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b border-white/5">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-slate-950 font-black text-sm">
                K
              </span>
              <span className="text-lg font-bold text-white font-outfit">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm mx-auto md:mx-0">
              Python Full Stack Developer & Creative Software Engineer based in Salem, Tamil Nadu, India.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-6 flex flex-wrap items-center justify-center md:justify-end gap-4 text-xs font-medium">
            <a href="#hero" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#showcase" className="hover:text-cyan-400 transition-colors">3D Showcase</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <button onClick={onOpenResume} className="hover:text-cyan-400 transition-colors">Resume</button>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>

            <button
              onClick={scrollToTop}
              title="Back to Top"
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 border border-white/10 transition-colors ml-2"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Karthikeyan R. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-2 font-mono text-[11px] text-cyan-400/80 bg-slate-900/60 px-3 py-1 rounded-full border border-white/5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>React Three Fiber • Three.js • Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
