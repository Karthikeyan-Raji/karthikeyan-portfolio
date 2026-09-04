import React, { useState } from 'react';
import { ExternalLink, Sparkles, Layers, ArrowUpRight, Check, Code, Globe, ShieldCheck } from 'lucide-react';
import { Github } from './Icons';
import { projectsList, featuredProject } from '../data/portfolioData';
import ThreeDeviceMockup from './3d/ThreeDeviceMockup';

// 3D Tilt Card Component with Mouse Interaction
function TiltProjectCard({ project, index, onSelectProject }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      className="perspective-1000 group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onSelectProject(project)}
    >
      <div
        className="glass-card rounded-2xl p-6 sm:p-7 border border-white/10 relative overflow-hidden transition-transform duration-200 ease-out h-full flex flex-col justify-between"
        style={{
          transform: isHovered
            ? `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) translateY(-6px) scale(1.02)`
            : 'rotateX(0deg) rotateY(0deg) translateY(0) scale(1)',
          boxShadow: isHovered ? `0 20px 40px -15px ${project.glowColor}` : 'none'
        }}
      >
        {/* Glowing Rim Light */}
        <div
          className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity duration-300"
          style={{ backgroundImage: `linear-gradient(to bottom right, ${project.glowColor}, transparent)` }}
        />

        {/* Card Header */}
        <div>
          <div className="flex items-center justify-between gap-2 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-slate-300 group-hover:border-cyan-500/40 group-hover:text-cyan-300 transition-colors">
              {project.category}
            </span>
            <span className="text-[11px] font-mono text-slate-400">
              0{index + 1}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors flex items-center justify-between">
            <span>{project.title}</span>
            <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
            {project.description}
          </p>
        </div>

        {/* Card Footer: Tech Stack & Actions */}
        <div className="pt-4 border-t border-white/10 space-y-4">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900/90 text-slate-300 border border-white/5 group-hover:border-white/15"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between gap-2 pt-1">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 hover:underline"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>Live Demo</span>
              </a>
            ) : (
              <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                <Code className="w-3.5 h-3.5 text-violet-400" />
                <span>Source Project</span>
              </span>
            )}

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-2 rounded-lg bg-slate-800/60 hover:bg-slate-700/80 text-slate-300 hover:text-white border border-white/10 transition-colors"
              aria-label="View on GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 sm:py-28 relative">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Portfolio Works</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient-cyan-violet">Engineering Works</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Explore live production web applications, automated software tools, and full stack database systems built with clean code and high performance.
          </p>
        </div>

        {/* SPECIAL HIGHLIGHT: 3D INTERACTIVE DEVICE SHOWCASE */}
        <div id="showcase" className="mb-20">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                ★ FEATURED LIVE APPLICATION
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                {featuredProject.title}
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
                <ShieldCheck className="w-3.5 h-3.5" />
                Vercel Production Edge
              </span>
              <a
                href={featuredProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/25 hover:scale-105 transition-transform"
              >
                <span>Visit Live Site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* 3D Device Showcase Canvas Component */}
          <ThreeDeviceMockup liveUrl={featuredProject.liveUrl} />
        </div>

        {/* PROJECT GRID (3D TILT CARDS) */}
        <div>
          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-cyan-400" />
              <span>All Engineering Projects</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Hover over cards for 3D perspective response
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectsList.map((project, index) => (
              <TiltProjectCard
                key={project.id}
                project={project}
                index={index}
                onSelectProject={setSelectedProject}
              />
            ))}
          </div>
        </div>

      </div>

      {/* Project Quick View Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="glass-panel max-w-xl w-full p-6 sm:p-8 rounded-2xl border border-cyan-500/30 space-y-5 relative text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                {selectedProject.category}
              </span>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-slate-400 hover:text-white p-1 rounded-lg bg-slate-800"
              >
                ✕
              </button>
            </div>

            <h3 className="text-2xl font-bold text-white">
              {selectedProject.title}
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed">
              {selectedProject.description}
            </p>

            <div>
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                Tech Stack & Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((t, i) => (
                  <span key={i} className="px-3 py-1 rounded-lg bg-slate-900 text-cyan-300 border border-white/10 text-xs font-mono">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-end gap-3">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Source</span>
              </a>
              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 text-xs font-bold flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Launch Live</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
