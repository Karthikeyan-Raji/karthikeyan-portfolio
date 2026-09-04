import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Torus, Octahedron, Ring } from '@react-three/drei';
import * as THREE from 'three';

// Floating Geometric Core that reacts to mouse
function CyberCore({ mousePos }) {
  const coreRef = useRef();
  const outerRingRef = useRef();
  const innerRingRef = useRef();
  const polyRef = useRef();

  useFrame((state, delta) => {
    // Smooth rotation
    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.4;
      coreRef.current.rotation.x += delta * 0.2;
      
      // Cursor lerp tracking
      const targetX = (mousePos.current.x * Math.PI) / 6;
      const targetY = (mousePos.current.y * Math.PI) / 6;
      coreRef.current.rotation.x = THREE.MathUtils.lerp(coreRef.current.rotation.x, targetY, 0.05);
      coreRef.current.rotation.y = THREE.MathUtils.lerp(coreRef.current.rotation.y, targetX, 0.05);
    }

    if (outerRingRef.current) {
      outerRingRef.current.rotation.z += delta * 0.6;
      outerRingRef.current.rotation.x -= delta * 0.3;
    }

    if (innerRingRef.current) {
      innerRingRef.current.rotation.z -= delta * 0.8;
      innerRingRef.current.rotation.y += delta * 0.4;
    }

    if (polyRef.current) {
      polyRef.current.rotation.y -= delta * 0.5;
    }
  });

  return (
    <group ref={coreRef} position={[0, 0, 0]}>
      {/* Central Pulsing Sphere with Distort Material */}
      <Sphere args={[1.1, 64, 64]}>
        <MeshDistortMaterial
          color="#00f2fe"
          emissive="#0d9488"
          emissiveIntensity={0.6}
          roughness={0.1}
          metalness={0.9}
          distort={0.35}
          speed={2.2}
          wireframe={false}
        />
      </Sphere>

      {/* Wireframe Octahedron Shell */}
      <Octahedron ref={polyRef} args={[1.8, 0]}>
        <meshStandardMaterial
          color="#7c3aed"
          emissive="#7c3aed"
          emissiveIntensity={0.8}
          wireframe={true}
          transparent={true}
          opacity={0.4}
        />
      </Octahedron>

      {/* Outer Glowing Cyber Ring */}
      <group ref={outerRingRef}>
        <Torus args={[2.5, 0.03, 16, 100]}>
          <meshStandardMaterial
            color="#00f2fe"
            emissive="#00f2fe"
            emissiveIntensity={2}
            roughness={0.1}
          />
        </Torus>
      </group>

      {/* Inner Violet Cyber Ring */}
      <group ref={innerRingRef}>
        <Torus args={[2.1, 0.025, 16, 100]}>
          <meshStandardMaterial
            color="#ec4899"
            emissive="#ec4899"
            emissiveIntensity={1.8}
            roughness={0.2}
          />
        </Torus>
      </group>
    </group>
  );
}

// Particle Constellation in 3D Space
function ParticleField({ count = 120 }) {
  const particlesRef = useRef();

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const colorCyan = new THREE.Color("#00f2fe");
    const colorViolet = new THREE.Color("#7c3aed");
    const colorEmerald = new THREE.Color("#10b981");

    for (let i = 0; i < count; i++) {
      const theta = THREE.MathUtils.randFloatSpread(360);
      const phi = THREE.MathUtils.randFloatSpread(360);

      const distance = 2.5 + Math.random() * 3.5;
      pos[i * 3] = distance * Math.sin(theta) * Math.cos(phi);
      pos[i * 3 + 1] = distance * Math.sin(theta) * Math.sin(phi);
      pos[i * 3 + 2] = distance * Math.cos(theta);

      // Color variation
      const mixRatio = Math.random();
      const chosen = mixRatio > 0.6 ? colorCyan : (mixRatio > 0.3 ? colorViolet : colorEmerald);
      col[i * 3] = chosen.r;
      col[i * 3 + 1] = chosen.g;
      col[i * 3 + 2] = chosen.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((state, delta) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.08;
      particlesRef.current.rotation.x += delta * 0.04;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.85}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  );
}

export default function Hero3DScene() {
  const mousePos = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    mousePos.current = { x, y };
  };

  return (
    <div 
      className="relative w-full h-[480px] sm:h-[540px] lg:h-[620px] flex items-center justify-center cursor-grab active:cursor-grabbing"
      onMouseMove={handleMouseMove}
    >
      {/* Background glow radial */}
      <div className="absolute inset-0 bg-radial from-cyan-500/10 via-violet-600/5 to-transparent blur-2xl pointer-events-none" />

      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={2.5} color="#00f2fe" />
        <pointLight position={[-10, -10, -10]} intensity={2} color="#7c3aed" />
        <pointLight position={[0, 5, -5]} intensity={1.5} color="#10b981" />

        <Float speed={2} rotationIntensity={0.8} floatIntensity={1.2}>
          <CyberCore mousePos={mousePos} />
        </Float>

        <ParticleField count={140} />
      </Canvas>

      {/* Floating Status Pill */}
      <div className="absolute bottom-4 sm:bottom-6 px-4 py-1.5 rounded-full glass-panel border border-cyan-500/30 flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-300 shadow-lg pointer-events-none">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
        </span>
        <span className="text-cyan-300 font-mono tracking-wide">3D Interactive Core • Hover to Tilt</span>
      </div>
    </div>
  );
}
