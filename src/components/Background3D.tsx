import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'
import './Background3D.css'

interface FloatingGeometryProps {
  count: number
}

function FloatingParticles({ count }: FloatingGeometryProps) {
  const mesh = useRef<THREE.Points>(null!)
  
  const particles = useMemo(() => {
    const temp = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      temp.set(
        [
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10,
        ],
        i * 3
      )
    }
    return temp
  }, [count])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    if (mesh.current) {
      mesh.current.rotation.x = time * 0.1
      mesh.current.rotation.y = time * 0.05
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={mesh} positions={particles} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  )
}

function FloatingCube() {
  const mesh = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    if (mesh.current) {
      mesh.current.rotation.x = time * 0.2
      mesh.current.rotation.y = time * 0.3
      mesh.current.position.y = Math.sin(time) * 0.5
    }
  })

  return (
    <mesh ref={mesh} position={[3, 0, -2]} scale={0.5}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color="#ffffff"
        wireframe
        transparent
        opacity={0.3}
      />
    </mesh>
  )
}

function FloatingSphere() {
  const mesh = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    if (mesh.current) {
      mesh.current.rotation.x = time * 0.15
      mesh.current.rotation.z = time * 0.25
      mesh.current.position.y = Math.cos(time * 0.8) * 0.3
    }
  })

  return (
    <mesh ref={mesh} position={[-3, 0, -1]} scale={0.3}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial
        color="#ffffff"
        wireframe
        transparent
        opacity={0.4}
      />
    </mesh>
  )
}

export default function Background3D() {
  return (
    <div className="background-3d">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <FloatingParticles count={200} />
        <FloatingCube />
        <FloatingSphere />
      </Canvas>
    </div>
  )
}
