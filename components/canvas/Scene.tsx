"use client";

import { PointMaterial, Points } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const particlesCount = 5000;
const initialPositions = new Float32Array(particlesCount * 3);
for (let i = 0; i < particlesCount; i++) {
  initialPositions[i * 3] = (Math.random() - 0.5) * 10;
  initialPositions[i * 3 + 1] = (Math.random() - 0.5) * 10;
  initialPositions[i * 3 + 2] = (Math.random() - 0.5) * 10;
}

function ParticleSwarm() {
  const ref = useRef<THREE.Points>(null);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={initialPositions}
        stride={3}
        frustumCulled={false}
      >
        <PointMaterial
          transparent
          color="#6366f1"
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

export default function Scene() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ParticleSwarm />
      </Canvas>
    </div>
  );
}
