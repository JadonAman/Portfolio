import { useState, useEffect } from 'react'

interface TypewriterProps {
  text: string
  delay?: number
  speed?: number
  className?: string
}

export default function Typewriter({ text, delay = 0, speed = 100, className = '' }: TypewriterProps) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  useEffect(() => {
    if (!isTyping) return

    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)

      return () => clearTimeout(timer)
    }
  }, [currentIndex, text, speed, isTyping])

  return (
    <span className={className}>
      {displayText}
      {isTyping && currentIndex <= text.length && (
        <span className="typewriter-cursor">|</span>
      )}
    </span>
  )
}
