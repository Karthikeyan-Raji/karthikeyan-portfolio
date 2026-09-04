import React, { useState } from 'react';
import { 
  Code2, 
  Cpu, 
  Database, 
  Layout, 
  Sparkles, 
  CheckCircle, 
  Terminal, 
  Layers, 
  Wrench, 
  Zap,
  Check
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import SkillsCanvas from './3d/SkillsCanvas';

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <section id="skills" className="py-20 sm:py-28 relative">
      {/* Background radial highlights */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-300">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Mastery & Stack</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engineering <span className="text-gradient-cyan-violet">Capabilities</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Bridging robust backend Python & database architectures with dynamic, interactive modern web interfaces.
          </p>
        </div>

        {/* BENTO GRID OF TECHNICAL SKILLS */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* Card 1: Core Languages (Span 7) */}
          <div className="md:col-span-7 glass-card p-6 sm:p-8 rounded-2xl border border-white/10 relative overflow-hidden">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">Programming Languages</h3>
                  <p className="text-xs text-slate-400">Core backend & frontend foundations</p>
                </div>
              </div>
              <span className="text-xs font-mono text-cyan-400 px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20">
                Core Stacks
              </span>
            </div>

            <div className="space-y-4">
              {skillsData.languages.map((lang, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="font-semibold text-slate-200 flex items-center gap-2">
                      <span>{lang.icon}</span>
                      <span>{lang.name}</span>
                    </span>
                    <span className="font-mono text-slate-400">{lang.level}%</span>
                  </div>
                  {/* Animated Progress Bar */}
                  <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-white/5">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-1000"
                      style={{ width: `${lang.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: 3D Tech Orbit Canvas (Span 5) */}
          <div className="md:col-span-5 glass-card p-6 rounded-2xl border border-violet-500/20 relative flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-violet-400" />
                <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                  3D & Creative Physics
                </h4>
              </div>
              <span className="text-[11px] font-mono text-violet-300 px-2 py-0.5 rounded bg-violet-500/20">
                Three.js / WebGL
              </span>
            </div>

            {/* 3D Canvas */}
            <div className="my-auto">
              <SkillsCanvas />
            </div>

            <p className="text-xs text-slate-300 text-center z-10 bg-slate-950/60 p-2 rounded-lg border border-white/5">
              Integrating real-time 3D shaders, WebGL rendering, and fluid micro-animations.
            </p>
          </div>

          {/* Card 3: Modern Web & Frameworks (Span 6) */}
          <div className="md:col-span-6 glass-card p-6 sm:p-8 rounded-2xl border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-violet-500/10 border border-violet-500/30 text-violet-400">
                <Layout className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">Frameworks & Libraries</h3>
                <p className="text-xs text-slate-400">Modern component-driven web ecosystem</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {skillsData.frameworks.map((fw, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-900/80 border border-white/5 hover:border-violet-500/40 transition-colors flex items-center justify-between"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-lg">{fw.icon}</span>
                    <span className="text-xs sm:text-sm font-medium text-slate-200">{fw.name}</span>
                  </div>
                  <span className="text-[11px] font-mono text-violet-400 font-bold">
                    {fw.level}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 4: Databases & Developer Tooling (Span 6) */}
          <div className="md:col-span-6 glass-card p-6 sm:p-8 rounded-2xl border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                <Database className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">Databases & Platforms</h3>
                <p className="text-xs text-slate-400">Storage engines, IDEs & developer tools</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {skillsData.databasesAndTools.map((tool, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-900/70 border border-white/5 hover:border-emerald-500/40 transition-colors text-center"
                >
                  <div className="text-xl mb-1">{tool.icon}</div>
                  <div className="text-xs font-semibold text-slate-200 truncate">{tool.name}</div>
                  <div className="text-[10px] font-mono text-emerald-400 mt-0.5">{tool.level}%</div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 5: Core Strengths & Professional Competencies (Span 12) */}
          <div className="md:col-span-12 glass-panel p-6 sm:p-7 rounded-2xl border border-white/10 bg-gradient-to-r from-slate-950 via-[#0a1124] to-slate-950">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-2.5">
                <Zap className="w-5 h-5 text-amber-400" />
                <h4 className="text-base sm:text-lg font-bold text-white">
                  Professional Competencies & Soft Skills
                </h4>
              </div>
              <span className="text-xs font-mono text-slate-400">
                Agile • Problem Solver • Collaborative
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {skillsData.softSkills.map((skill, idx) => (
                <div
                  key={idx}
                  className="px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-500/40 flex items-center gap-2 text-xs font-medium text-slate-200 transition-colors"
                >
                  <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
