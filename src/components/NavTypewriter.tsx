import { useState, useEffect } from 'react'

const texts = ['Aman Jadon', 'Backend Developer', 'DevOps Enthusiast']

export default function NavTypewriter() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [speed, setSpeed] = useState(100)

  useEffect(() => {
    const fullText = texts[currentTextIndex]
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText !== fullText) {
          setCurrentText(fullText.substring(0, currentText.length + 1))
          setSpeed(100)
        } else {
          // Pause before deleting
          setSpeed(2000)
          setTimeout(() => setIsDeleting(true), 2000)
          return
        }
      } else {
        // Deleting
        if (currentText !== '') {
          setCurrentText(fullText.substring(0, currentText.length - 1))
          setSpeed(50)
        } else {
          // Move to next text
          setIsDeleting(false)
          setCurrentTextIndex((prev) => (prev + 1) % texts.length)
          setSpeed(100)
        }
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [currentText, isDeleting, currentTextIndex, speed])

  return (
    <span className="nav-typewriter">
      <span className="nav-typewriter-text">{currentText}</span>
      <span className="nav-typewriter-cursor">|</span>
    </span>
  )
}
