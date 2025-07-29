import { useState, useEffect, useRef } from 'react'
import './MouseFollower.css'

export default function MouseFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 })
  const animationRef = useRef<number>(0)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', updateMousePosition)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  useEffect(() => {
    const animate = () => {
      setSmoothPosition(prev => ({
        x: prev.x + (mousePosition.x - prev.x) * 0.25,
        y: prev.y + (mousePosition.y - prev.y) * 0.25,
      }))
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [mousePosition])

  return (
    <>
      {/* Main cursor dot */}
      <div 
        className="mouse-follower"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      />
      
      {/* Cursor ring */}
      <div 
        className="mouse-follower-ring"
        style={{
          left: smoothPosition.x,
          top: smoothPosition.y,
        }}
      />
      
      {/* Glow effect */}
      <div 
        className="mouse-follower-glow"
        style={{
          left: smoothPosition.x,
          top: smoothPosition.y,
        }}
      />
    </>
  )
}
