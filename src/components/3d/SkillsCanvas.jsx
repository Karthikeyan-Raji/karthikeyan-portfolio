import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Icosahedron, Box, TorusKnot } from '@react-three/drei';
import * as THREE from 'three';

function FloatingBadges() {
  const group = useRef();

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <group ref={group}>
      {/* Centerpiece Torus Knot */}
      <Float speed={2} rotationIntensity={0.8} floatIntensity={1}>
        <mesh position={[0, 0, 0]}>
          <torusKnotGeometry args={[1.2, 0.35, 128, 32]} />
          <meshStandardMaterial
            color="#7c3aed"
            emissive="#3b82f6"
            emissiveIntensity={0.6}
            roughness={0.2}
            metalness={0.8}
            wireframe={true}
          />
        </mesh>
      </Float>

      {/* Orbiting Tech Node 1 - Python Green/Cyan */}
      <Float speed={3} rotationIntensity={1.2} floatIntensity={1.5}>
        <mesh position={[2.8, 1.2, -1]}>
          <icosahedronGeometry args={[0.6, 0]} />
          <meshStandardMaterial
            color="#00f2fe"
            emissive="#00f2fe"
            emissiveIntensity={1.2}
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>
      </Float>

      {/* Orbiting Tech Node 2 - React Blue */}
      <Float speed={2.5} rotationIntensity={1} floatIntensity={1.2}>
        <mesh position={[-2.6, -1.2, 0.8]}>
          <boxGeometry args={[0.9, 0.9, 0.9]} />
          <meshStandardMaterial
            color="#61dafb"
            emissive="#38bdf8"
            emissiveIntensity={0.8}
            roughness={0.2}
            wireframe={true}
          />
        </mesh>
      </Float>

      {/* Orbiting Tech Node 3 - Emerald DB */}
      <Float speed={2.8} rotationIntensity={1.5} floatIntensity={1.8}>
        <mesh position={[2, -1.8, 1.2]}>
          <octahedronGeometry args={[0.7, 0]} />
          <meshStandardMaterial
            color="#10b981"
            emissive="#10b981"
            emissiveIntensity={1}
            roughness={0.3}
          />
        </mesh>
      </Float>
    </group>
  );
}

export default function SkillsCanvas() {
  return (
    <div className="w-full h-[320px] sm:h-[400px] relative pointer-events-auto">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#00f2fe" />
        <pointLight position={[-10, -10, -10]} intensity={2} color="#ec4899" />
        <FloatingBadges />
      </Canvas>
    </div>
  );
}
