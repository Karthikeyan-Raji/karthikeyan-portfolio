import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Send, Sparkles, Mail } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'projects', 'showcase', 'skills', 'experience', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#hero' },
    { name: '3D Showcase', href: '#showcase' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#050811]/85 backdrop-blur-xl border-b border-cyan-500/20 shadow-lg shadow-black/40'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo / Brand */}
        <a
          href="#hero"
          className="group flex items-center gap-2.5 text-white font-bold text-lg sm:text-xl tracking-tight"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-violet-600 flex items-center justify-center text-slate-950 font-extrabold shadow-md shadow-cyan-500/30 group-hover:scale-105 transition-transform">
            K
          </div>
          <div className="flex flex-col">
            <span className="font-outfit font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-cyan-300 leading-tight">
              Karthikeyan<span className="text-cyan-400">.R</span>
            </span>
            <span className="text-[10px] font-mono text-cyan-400/80 -mt-0.5 tracking-wider uppercase">
              Full Stack Dev
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 glass-pill px-4 py-1.5 rounded-full border border-white/10 shadow-inner">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-cyan-300 bg-cyan-500/15 border border-cyan-500/30 shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Social Icons */}
          <div className="flex items-center gap-1.5 pr-2 border-r border-white/10">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          {/* Resume Viewer Trigger */}
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-white/10 text-slate-200 text-xs font-medium transition-all hover:border-cyan-500/40"
          >
            <FileText className="w-3.5 h-3.5 text-cyan-400" />
            <span>Resume</span>
          </button>

          {/* Hire / Contact Me CTA */}
          <a
            href="#contact"
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/25 transition-all hover:scale-105"
          >
            <span>Let's Talk</span>
            <Send className="w-3 h-3" />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenResume}
            className="p-2 rounded-lg bg-slate-800/80 border border-white/10 text-cyan-400 text-xs"
            aria-label="View Resume"
          >
            <FileText className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-slate-800/80 border border-white/10 text-slate-200 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-cyan-500/30 px-6 py-5 mt-2 space-y-3 animate-in fade-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg bg-slate-900/60 border border-white/5 text-sm text-slate-200 hover:text-cyan-300 hover:border-cyan-500/30"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex-1 py-2 rounded-xl bg-slate-800 text-center text-xs font-semibold text-slate-200 flex items-center justify-center gap-1.5"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>Resume</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs text-center flex items-center justify-center gap-1.5"
            >
              <span>Contact</span>
              <Send className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
