import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar, MapPin, CheckCircle, Sparkles } from 'lucide-react';
import { educationList, certifications } from '../data/portfolioData';

export default function EducationSection() {
  return (
    <section id="education" className="py-20 sm:py-28 relative">
      {/* Ambient Lighting */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-violet-500/30 text-xs font-mono text-violet-300">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background & Honors</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Education & <span className="text-gradient-cyan-violet">Certifications</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Formal postgraduate education in Computer Applications reinforced by specialized industry certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Degrees (Span 6) */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
              <BookOpen className="w-5 h-5 text-cyan-400" />
              <span>Academic Degrees</span>
            </h3>

            <div className="space-y-4">
              {educationList.map((edu, idx) => (
                <div
                  key={idx}
                  className="glass-card p-6 sm:p-7 rounded-2xl border border-white/10 hover:border-cyan-500/40 relative overflow-hidden"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                      {edu.highlight}
                    </span>
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      {edu.period}
                    </span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-bold text-white mb-1">
                    {edu.degree}
                  </h4>

                  <div className="text-sm font-semibold text-cyan-400 mb-2 flex items-center gap-2">
                    <span>{edu.institution}</span>
                    <span className="text-slate-500">•</span>
                    <span className="text-xs text-slate-400 font-normal flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      {edu.location}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Certifications & Accomplishments (Span 6) */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
              <Award className="w-5 h-5 text-violet-400" />
              <span>Awards & Professional Certifications</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="glass-card p-5 rounded-2xl border border-white/10 hover:border-violet-500/40 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center text-cyan-300 mb-3">
                      <Sparkles className="w-5 h-5" />
                    </div>

                    <h4 className="text-sm sm:text-base font-bold text-white mb-1 leading-snug">
                      {cert.title}
                    </h4>

                    <p className="text-xs text-slate-400 mb-2">
                      {cert.issuer}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-cyan-300">
                    <span>{cert.date}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
