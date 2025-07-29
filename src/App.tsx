import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Background3D from './components/Background3D'
import MouseFollower from './components/MouseFollower'
import './App.css'

function App() {
  return (
    <div className="app">
      {/* Mouse follower effect */}
      <MouseFollower />
      
      {/* 3D Background */}
      <Background3D />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        <div id="hero">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="education">
          <Education />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
      
      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-text">
            © 2025 Your Portfolio. Built with React, Three.js, and ❤️
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
