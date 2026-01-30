import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const TechSphere = () => {
    const meshRef = useRef();
    const particlesRef = useRef();

    // Create particles for tech effect
    const particleCount = 1000;
    const particlePositions = useMemo(() => {
        const positions = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount * 3; i += 3) {
            const radius = 4 + Math.random() * 2;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1);

            positions[i] = radius * Math.sin(phi) * Math.cos(theta);
            positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
            positions[i + 2] = radius * Math.cos(phi);
        }
        return positions;
    }, []);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();

        // Rotate the wireframe sphere
        if (meshRef.current) {
            meshRef.current.rotation.x = t * 0.1;
            meshRef.current.rotation.y = t * 0.15;
        }

        // Animate particles
        if (particlesRef.current) {
            particlesRef.current.rotation.y = t * 0.05;
        }
    });

    return (
        <group>
            {/* Wireframe sphere - tech oriented */}
            <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
                <mesh ref={meshRef}>
                    <icosahedronGeometry args={[2, 1]} />
                    <meshBasicMaterial
                        color="#00f3ff"
                        wireframe
                        transparent
                        opacity={0.3}
                    />
                </mesh>

                {/* Inner glow sphere */}
                <mesh>
                    <icosahedronGeometry args={[1.8, 1]} />
                    <meshPhysicalMaterial
                        color="#00f3ff"
                        emissive="#00f3ff"
                        emissiveIntensity={0.5}
                        transparent
                        opacity={0.1}
                        roughness={0.1}
                        metalness={0.9}
                    />
                </mesh>
            </Float>

            {/* Particle field */}
            <points ref={particlesRef}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={particleCount}
                        array={particlePositions}
                        itemSize={3}
                    />
                </bufferGeometry>
                <pointsMaterial
                    size={0.02}
                    color="#00f3ff"
                    transparent
                    opacity={0.6}
                    sizeAttenuation
                    blending={THREE.AdditiveBlending}
                />
            </points>

            {/* Grid plane for tech aesthetic */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
                <planeGeometry args={[10, 10, 20, 20]} />
                <meshBasicMaterial
                    color="#00f3ff"
                    wireframe
                    transparent
                    opacity={0.1}
                />
            </mesh>
        </group>
    );
};

const Background3D = () => {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                <Environment preset="city" />

                <ambientLight intensity={0.2} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#00f3ff" />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#0066ff" />

                <TechSphere />
            </Canvas>

            {/* Subtle overlay to ensure text readability */}
            <div className="absolute inset-0 bg-void-black/20" />
        </div>
    );
};

export default Background3D;
