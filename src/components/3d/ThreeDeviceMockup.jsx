import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html, Float, RoundedBox } from '@react-three/drei';
import { ExternalLink, RotateCcw, Monitor, Laptop, Sparkles, Maximize2 } from 'lucide-react';
import * as THREE from 'three';

// Realistic Stylized 3D Laptop Model
function LaptopModel({ isInteractive, liveUrl }) {
  const group = useRef();
  const screenRef = useRef();

  return (
    <group ref={group} position={[0, -0.6, 0]} rotation={[0.15, -0.25, 0]}>
      {/* LAPTOP BASE */}
      <group position={[0, 0, 0]}>
        {/* Main Base Body */}
        <RoundedBox args={[3.8, 0.12, 2.6]} radius={0.06} smoothness={4} position={[0, 0, 0]}>
          <meshStandardMaterial
            color="#0f172a"
            metalness={0.85}
            roughness={0.2}
            envMapIntensity={1}
          />
        </RoundedBox>

        {/* Keyboard Well / Inset */}
        <RoundedBox args={[3.2, 0.02, 1.4]} radius={0.03} smoothness={2} position={[0, 0.06, -0.2]}>
          <meshStandardMaterial color="#020617" roughness={0.6} />
        </RoundedBox>

        {/* Keyboard Keys Emissive Grid */}
        <mesh position={[0, 0.075, -0.2]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[3.1, 1.3]} />
          <meshStandardMaterial
            color="#1e293b"
            emissive="#00f2fe"
            emissiveIntensity={0.15}
            roughness={0.4}
          />
        </mesh>

        {/* Trackpad */}
        <RoundedBox args={[1.2, 0.01, 0.75]} radius={0.02} smoothness={2} position={[0, 0.065, 0.75]}>
          <meshStandardMaterial
            color="#1e293b"
            metalness={0.6}
            roughness={0.3}
            emissive="#00f2fe"
            emissiveIntensity={0.05}
          />
        </RoundedBox>

        {/* Front Edge Chamfer Accent */}
        <mesh position={[0, 0, 1.31]}>
          <boxGeometry args={[1.2, 0.04, 0.02]} />
          <meshStandardMaterial color="#00f2fe" emissive="#00f2fe" emissiveIntensity={1.5} />
        </mesh>
      </group>

      {/* LAPTOP LID / SCREEN (Hinged at back - angled back naturally) */}
      <group position={[0, 0.06, -1.3]} rotation={[-0.25, 0, 0]}>
        {/* Screen Lid Back Cover */}
        <RoundedBox args={[3.8, 2.5, 0.08]} radius={0.06} smoothness={4} position={[0, 1.25, -0.04]}>
          <meshStandardMaterial
            color="#0a0f1d"
            metalness={0.9}
            roughness={0.18}
          />
        </RoundedBox>

        {/* Glowing Apple/Karthik Logo on Lid Back */}
        <mesh position={[0, 1.25, -0.085]} rotation={[0, Math.PI, 0]}>
          <circleGeometry args={[0.2, 32]} />
          <meshStandardMaterial
            color="#00f2fe"
            emissive="#00f2fe"
            emissiveIntensity={2.5}
          />
        </mesh>

        {/* Screen Bezel Frame */}
        <RoundedBox args={[3.7, 2.4, 0.02]} radius={0.04} smoothness={2} position={[0, 1.25, 0.01]}>
          <meshStandardMaterial color="#030712" roughness={0.8} />
        </RoundedBox>

        {/* Camera Dot */}
        <mesh position={[0, 2.4, 0.025]}>
          <circleGeometry args={[0.025, 16]} />
          <meshStandardMaterial color="#00f2fe" emissive="#00f2fe" emissiveIntensity={3} />
        </mesh>

        {/* Screen Inner Display Frame */}
        <mesh ref={screenRef} position={[0, 1.22, 0.022]}>
          <planeGeometry args={[3.5, 2.2]} />
          <meshStandardMaterial color="#050811" roughness={0.1} />
        </mesh>

        {/* 3D Drei HTML Embed for Live Site */}
        <Html
          transform
          wrapperClass="laptop-screen-embed"
          distanceFactor={1.56}
          position={[0, 1.22, 0.026]}
          rotation={[0, 0, 0]}
        >
          <div className="w-[880px] h-[550px] bg-[#0a0e17] rounded-lg overflow-hidden border border-cyan-500/30 shadow-2xl flex flex-col select-none">
            {/* Mock Browser Header */}
            <div className="h-9 bg-[#0f172a] border-b border-slate-700/60 px-3 flex items-center justify-between text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
              </div>
              <div className="bg-slate-900/90 border border-cyan-500/30 rounded-md px-4 py-1 text-cyan-300 font-mono text-[11px] flex items-center gap-1.5 shadow-inner">
                <span className="text-emerald-400">🔒 https://</span>
                <span>sri-vignesh-catering.vercel.app</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 text-[10px] font-bold border border-cyan-500/20">
                  LIVE DEPLOY
                </span>
              </div>
            </div>

            {/* Embedded Live Iframe with Fallback Overlay */}
            <div className="relative flex-1 bg-[#050811] overflow-hidden">
              <iframe
                src={liveUrl}
                title="Sri Vignesh Catering Live Showcase"
                className="w-full h-full border-none pointer-events-auto"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
              />
            </div>
          </div>
        </Html>
      </group>
    </group>
  );
}

export default function ThreeDeviceMockup({ liveUrl = "https://sri-vignesh-catering.vercel.app/" }) {
  const [viewMode, setViewMode] = useState('laptop'); // 'laptop' | 'isometric'
  const [controlsKey, setControlsKey] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const resetView = () => {
    setControlsKey(prev => prev + 1);
  };

  return (
    <div className="relative w-full rounded-2xl overflow-hidden glass-panel border border-cyan-500/30 shadow-2xl p-3 sm:p-6 bg-gradient-to-b from-[#0b1329]/90 to-[#050811]/95">
      {/* Top Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-3 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
            <Sparkles className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <h4 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              <span>Interactive 3D Device Showcase</span>
              <span className="px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                Live Vercel
              </span>
            </h4>
            <p className="text-xs text-slate-400 hidden sm:block">
              Drag to orbit in 3D • Scroll to zoom • Interact directly with the live screen
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {/* Mode Switch */}
          <div className="flex bg-slate-900/80 p-1 rounded-lg border border-white/10">
            <button
              onClick={() => setViewMode('laptop')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium transition-all ${
                viewMode === 'laptop'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Laptop className="w-3.5 h-3.5" />
              <span>3D Laptop</span>
            </button>
            <button
              onClick={() => setViewMode('isometric')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium transition-all ${
                viewMode === 'isometric'
                  ? 'bg-violet-500/20 text-violet-300 border border-violet-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>Isometric Tilt</span>
            </button>
          </div>

          {/* Reset Camera Button */}
          {viewMode === 'laptop' && (
            <button
              onClick={resetView}
              title="Reset Camera View"
              className="p-2 rounded-lg bg-slate-800/60 hover:bg-slate-700/60 border border-white/10 text-slate-300 hover:text-white transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}

          {/* External Launch Button */}
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-semibold text-xs shadow-lg shadow-cyan-500/20 transition-all hover:scale-105"
          >
            <span>Launch Live</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* VIEWPORT AREA */}
      {viewMode === 'laptop' ? (
        <div className="relative w-full h-[460px] sm:h-[520px] lg:h-[580px] bg-[#040711] rounded-xl overflow-hidden border border-cyan-500/20 flex items-center justify-center">
          {/* Ambient Lighting Gradients */}
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />

          <Canvas
            camera={{ position: [0, 1.2, 5.2], fov: 45 }}
            gl={{ antialias: true, alpha: true }}
          >
            <ambientLight intensity={1.2} />
            <directionalLight position={[5, 10, 7]} intensity={2.5} color="#ffffff" />
            <pointLight position={[-5, 5, 5]} intensity={2} color="#00f2fe" />
            <pointLight position={[5, -2, -5]} intensity={1.5} color="#7c3aed" />

            <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
              <LaptopModel liveUrl={liveUrl} />
            </Float>

            <OrbitControls
              key={controlsKey}
              enableZoom={true}
              minDistance={3.5}
              maxDistance={7}
              maxPolarAngle={Math.PI / 2 - 0.05}
              minPolarAngle={0.2}
              enablePan={false}
              dampingFactor={0.05}
            />
          </Canvas>

          {/* Quick Interaction Tip Overlay */}
          <div className="absolute bottom-3 left-3 sm:left-4 z-10 px-3 py-1.5 rounded-lg bg-slate-950/80 backdrop-blur-md border border-white/10 text-[11px] sm:text-xs text-slate-300 pointer-events-none flex items-center gap-2 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            <span>Tip: Click & drag to rotate 3D laptop • Scroll inside screen to browse website</span>
          </div>
        </div>
      ) : (
        /* ISOMETRIC 3D TILT CARD MODE */
        <div className="relative w-full rounded-xl overflow-hidden p-4 sm:p-8 bg-gradient-to-br from-[#0c1427] to-[#060913] border border-violet-500/30 group">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Live Interactive Iframe Display */}
            <div className="lg:col-span-8 rounded-xl overflow-hidden border border-cyan-500/40 shadow-2xl shadow-cyan-950/60 transition-transform duration-500 group-hover:scale-[1.01]">
              <div className="h-8 bg-slate-900 px-3 flex items-center justify-between border-b border-slate-800 text-xs text-slate-400">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                </div>
                <span className="font-mono text-cyan-300 text-[11px]">https://sri-vignesh-catering.vercel.app</span>
                <span className="text-[10px] text-emerald-400 font-semibold">ONLINE</span>
              </div>
              <div className="w-full h-[380px] sm:h-[420px] bg-[#070b16]">
                <iframe
                  src={liveUrl}
                  title="Sri Vignesh Catering Live App"
                  className="w-full h-full border-none"
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                />
              </div>
            </div>

            {/* Project Details on the Side */}
            <div className="lg:col-span-4 space-y-4">
              <div className="inline-block px-3 py-1 rounded-full bg-violet-500/20 border border-violet-500/30 text-violet-300 text-xs font-semibold">
                Live Production Feature
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                Sri Vignesh Catering Platform
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                A custom-built catering service web application featuring dynamic dish selection, wedding & event packages, instant quote generation, and high-performance SEO architecture.
              </p>

              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <span className="text-emerald-400">✓</span>
                  <span>Fully responsive across Mobile, Tablet & Desktop</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <span className="text-emerald-400">✓</span>
                  <span>Direct WhatsApp and Phone booking hooks</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <span className="text-emerald-400">✓</span>
                  <span>Modern glassmorphic visual aesthetics</span>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs text-center shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 transition-all hover:scale-105"
                >
                  <span>Open Live Application</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
