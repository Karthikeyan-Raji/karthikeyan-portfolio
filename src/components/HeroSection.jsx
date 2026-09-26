import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Download, 
  FileText, 
  Mail, 
  MapPin, 
  Phone, 
  Sparkles, 
  CheckCircle2, 
  Terminal,
  Code2
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/portfolioData';
import Hero3DScene from './3d/Hero3DScene';

export default function HeroSection({ onOpenResume }) {
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTaglineIndex((prev) => (prev + 1) % personalInfo.taglines.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] h-[500px] bg-gradient-to-tr from-cyan-500/10 via-violet-600/10 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs sm:text-sm text-cyan-300 font-mono shadow-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>MCA Graduate • Python Developer & Full Stack Engineer</span>
            </div>

            {/* Main Name & Title */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
                Hi, I'm{' '}
                <span className="text-gradient-cyan-violet block sm:inline">
                  {personalInfo.name}
                </span>
              </h1>

              {/* Dynamic Tagline Carousel */}
              <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start">
                <div className="inline-flex items-center gap-2 text-xl sm:text-2xl lg:text-3xl font-bold text-slate-200">
                  <Terminal className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                  <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400 bg-clip-text text-transparent transition-all duration-500">
                    {personalInfo.taglines[currentTaglineIndex]}
                  </span>
                </div>
              </div>
            </div>

            {/* Subtitle & Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {personalInfo.bio}
            </p>

            {/* Key Contact Info Chips */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs sm:text-sm text-slate-300 font-medium">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass-card border border-white/5">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass-card border border-white/5">
                <Mail className="w-4 h-4 text-violet-400" />
                <span>{personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass-card border border-white/5">
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>{personalInfo.phone}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <a
                href="#showcase"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-slate-950 font-extrabold text-sm sm:text-base shadow-xl shadow-cyan-500/25 flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
              >
                <span>View Live 3D Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="px-5 py-3.5 rounded-xl glass-panel hover:bg-slate-800/80 border border-white/10 hover:border-cyan-500/40 text-slate-200 hover:text-white font-semibold text-sm sm:text-base flex items-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-md"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>View Resume</span>
              </button>

              <a
                href="#contact"
                className="px-5 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-white/10 text-slate-300 hover:text-white font-medium text-sm sm:text-base transition-all"
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Profile Links */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-4">
              <span className="text-xs text-slate-400 font-mono">CONNECT:</span>
              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass-pill text-xs font-semibold text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass-pill text-xs font-semibold text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-slate-300" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            {/* Stats Row */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {personalInfo.stats.map((stat, i) => (
                <div key={i} className="glass-card p-3 rounded-xl text-center border border-white/5">
                  <div className="text-xl sm:text-2xl font-black text-gradient-cyan-violet">
                    {stat.value}
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Hero 3D Scene */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <Hero3DScene />
          </div>

        </div>
      </div>
    </section>
  );
}
