import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Terminal, Award } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 sm:py-28 relative">
      {/* Background Subtle Lines */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-300">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Milestones</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Work <span className="text-gradient-cyan-violet">Experience</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Hands-on software engineering and web development internships delivering practical production solutions.
          </p>
        </div>

        {/* INTERACTIVE TIMELINE */}
        <div className="relative border-l border-cyan-500/30 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">

          {experiences.map((exp, index) => (
            <div key={index} className="relative group">
              {/* Glowing Timeline Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#050811] border-2 border-cyan-400 group-hover:border-cyan-300 flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              </div>

              {/* Experience Card */}
              <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300">
                
                {/* Header Info */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        {exp.role}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold">
                        {exp.badge}
                      </span>
                    </div>

                    <div className="text-sm sm:text-base font-semibold text-cyan-400 mt-1 flex items-center gap-2">
                      <span>{exp.company}</span>
                      <span className="text-slate-500">•</span>
                      <span className="text-slate-400 text-xs font-normal">{exp.type}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-white/5 text-xs font-mono text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="space-y-2.5 my-5">
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Key Engineering Contributions:
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Badges Used */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-400 mr-1">Skills:</span>
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 border border-white/5 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
