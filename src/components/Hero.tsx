import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Hero3D from './Hero3D'
import Typewriter from './Typewriter'
import './Hero.css'

export default function Hero() {
  const scrollToNext = () => {
    const nextSection = document.getElementById('about')
    nextSection?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects')
    projectsSection?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    contactSection?.scrollIntoView({ behavior: 'smooth' })
  }

  const downloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement('a')
    link.href = '/resume.pdf' // This will be served from the public folder
    link.download = 'Aman_Jadon_Resume.pdf'
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="hero-section">
      <Hero3D />
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="hero-title">
            <span className="typing-text">AMAN JADON</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="hero-subtitle">
            Backend Developer & DevOps Enthusiast
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="hero-description">
            <Typewriter 
              text="A Computer Science undergraduate passionate about building scalable systems and deployment automation. Specializing in backend development with PHP & MySQL, DevOps tooling with Docker & Jenkins, and solving complex problems with clean, efficient code."
              delay={2000}
              speed={30}
            />
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="hero-buttons"
        >
          <motion.button
            className="hero-button primary"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToProjects}
          >
            View My Work
          </motion.button>
          
          <motion.button
            className="hero-button secondary"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
          >
            Get In Touch
          </motion.button>

          <motion.button
            className="hero-button download"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={downloadResume}
          >
            Download Resume
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <motion.button
          onClick={scrollToNext}
          className="scroll-button"
          whileHover={{ scale: 1.1 }}
        >
          <ChevronDown />
        </motion.button>
      </motion.div>
    </section>
  )
}
