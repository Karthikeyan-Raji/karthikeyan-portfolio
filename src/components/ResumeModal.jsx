import React from 'react';
import { X, Download, Printer, ExternalLink, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo, experiences, educationList, certifications, skillsData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#090d1a] border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Action Bar */}
        <div className="bg-[#0f172a] px-6 py-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-sm font-mono font-bold text-white">
              Resume Preview — {personalInfo.name}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 border border-white/10 transition-colors"
            >
              <Printer className="w-3.5 h-3.5 text-cyan-400" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-rose-500/20 text-slate-400 hover:text-rose-300 border border-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Container */}
        <div className="p-6 sm:p-10 max-h-[78vh] overflow-y-auto space-y-8 text-slate-200 bg-[#070b14]">
          
          {/* Header */}
          <div className="border-b border-cyan-500/20 pb-6 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-extrabold text-white tracking-tight">
                {personalInfo.name}
              </h1>
              <p className="text-cyan-400 font-semibold text-sm mt-1">
                {personalInfo.role}
              </p>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs text-slate-300 mt-2">
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-cyan-400" /> {personalInfo.location}</span>
                <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-emerald-400" /> {personalInfo.phone}</span>
                <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-violet-400" /> {personalInfo.email}</span>
              </div>
            </div>

            <div className="flex gap-2 text-xs">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-slate-800 text-cyan-300 border border-white/10 flex items-center gap-1 hover:border-cyan-400"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-200 border border-white/10 flex items-center gap-1 hover:border-cyan-400"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
              SUMMARY
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              MCA graduate with strong knowledge in Java programming, Python development, database management, and web technologies. Skilled in developing practical software solutions, Android applications, and progressive web applications through academic and internship experience. Strong problem-solving abilities with hands-on exposure to full stack development and collaborative project execution. Eager to contribute technical expertise and adaptability to a growth-oriented software development role.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
              TECHNICAL SKILLS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-3 rounded-lg bg-slate-900/80 border border-white/5">
                <span className="font-semibold text-white">Programming Languages:</span> Python, Java, JavaScript, SQL
              </div>
              <div className="p-3 rounded-lg bg-slate-900/80 border border-white/5">
                <span className="font-semibold text-white">Web Technologies:</span> HTML5, CSS3, React, Next.js, Tailwind CSS
              </div>
              <div className="p-3 rounded-lg bg-slate-900/80 border border-white/5">
                <span className="font-semibold text-white">Databases:</span> SQL, MongoDB
              </div>
              <div className="p-3 rounded-lg bg-slate-900/80 border border-white/5">
                <span className="font-semibold text-white">Tools & Platforms:</span> Android Studio, Arduino IDE, VS Code, Eclipse, Jupyter Notebook
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
              PROFESSIONAL EXPERIENCE
            </h2>

            {experiences.map((exp, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-900/60 border border-white/5 space-y-2">
                <div className="flex flex-wrap items-center justify-between text-xs sm:text-sm font-semibold">
                  <div className="text-white font-bold">{exp.company} — <span className="text-cyan-400">{exp.role}</span></div>
                  <div className="text-slate-400 font-mono">{exp.period}</div>
                </div>
                <ul className="space-y-1 text-xs text-slate-300">
                  {exp.responsibilities.map((r, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-1.5">
                      <span className="text-cyan-400">•</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
              EDUCATION
            </h2>
            <div className="space-y-2">
              {educationList.map((edu, idx) => (
                <div key={idx} className="flex justify-between items-start text-xs sm:text-sm p-3 rounded-lg bg-slate-900/60 border border-white/5">
                  <div>
                    <div className="font-bold text-white">{edu.degree}</div>
                    <div className="text-cyan-400 text-xs">{edu.institution}, {edu.location}</div>
                  </div>
                  <div className="text-slate-400 font-mono text-xs">{edu.period}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Awards & Certifications */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
              AWARDS & ACCOMPLISHMENTS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {certifications.map((c, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-slate-900/60 border border-white/5 flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-white">{c.title}</div>
                    <div className="text-slate-400 text-[11px]">{c.issuer}</div>
                  </div>
                  <div className="text-cyan-400 text-[10px] font-mono">{c.date}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
