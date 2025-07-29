import { Canvas } from '@react-three/fiber'
import { Float, OrbitControls, Sparkles, MeshDistortMaterial } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function FloatingCodeBlock({ position }: { position: [number, number, number] }) {
  const mesh = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2
      mesh.current.rotation.y += 0.01
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={mesh} position={position}>
        <boxGeometry args={[1, 0.6, 0.1]} />
        <meshStandardMaterial 
          color="#667eea" 
          transparent 
          opacity={0.7}
          emissive="#667eea"
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  )
}

function FloatingDatabase({ position }: { position: [number, number, number] }) {
  const mesh = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={mesh} position={position}>
        <cylinderGeometry args={[0.8, 0.8, 0.3, 16]} />
        <meshStandardMaterial 
          color="#f093fb" 
          transparent 
          opacity={0.8}
          emissive="#f093fb"
          emissiveIntensity={0.1}
        />
      </mesh>
    </Float>
  )
}

function FloatingGear({ position }: { position: [number, number, number] }) {
  const mesh = useRef<THREE.Mesh>(null)
  
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.z += 0.02
    }
  })

  return (
    <Float speed={1} rotationIntensity={0.3} floatIntensity={1.5}>
      <mesh ref={mesh} position={position}>
        <torusGeometry args={[0.6, 0.2, 8, 16]} />
        <MeshDistortMaterial 
          color="#4facfe" 
          transparent 
          opacity={0.7}
          distort={0.3}
          speed={2}
          emissive="#4facfe"
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  )
}

function WaveParticles() {
  const particles = useRef<THREE.Points>(null)
  
  useFrame((state) => {
    if (particles.current) {
      particles.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
      particles.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
    }
  })

  const particleCount = 100
  const positions = new Float32Array(particleCount * 3)
  
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20
  }

  return (
    <points ref={particles}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#667eea" transparent opacity={0.6} />
    </points>
  )
}

export default function Hero3D() {
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#667eea" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#f093fb" />
        
        <Sparkles count={50} scale={15} size={2} speed={0.5} />
        <WaveParticles />
        
        <FloatingCodeBlock position={[-4, 2, -2]} />
        <FloatingCodeBlock position={[3, -1, -1]} />
        <FloatingDatabase position={[-2, -2, -3]} />
        <FloatingDatabase position={[4, 1, -2]} />
        <FloatingGear position={[-3, 0, -1]} />
        <FloatingGear position={[2, 3, -2]} />
        
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  )
}
