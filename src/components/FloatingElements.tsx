import { useEffect, useState } from 'react'
import './FloatingElements.css'

interface FloatingElementProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export default function FloatingElements({ children, delay = 0, className = '' }: FloatingElementProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div className={`floating-element ${isVisible ? 'visible' : ''} ${className}`}>
      {children}
      <div className="floating-bg-elements">
        <div className="floating-circle circle-1"></div>
        <div className="floating-circle circle-2"></div>
        <div className="floating-circle circle-3"></div>
        <div className="floating-square square-1"></div>
        <div className="floating-square square-2"></div>
        <div className="floating-triangle triangle-1"></div>
      </div>
    </div>
  )
}
