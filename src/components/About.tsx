import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Server, Database, Container, Shield, Code, Network } from 'lucide-react'
import FloatingElements from './FloatingElements'
import './About.css'

const skills = [
  {
    icon: Server,
    title: 'Backend Development',
    description: 'PHP, REST APIs, MySQL, MongoDB',
    color: 'blue'
  },
  {
    icon: Container,
    title: 'DevOps & Infrastructure',
    description: 'Docker, Jenkins, AWS, Linux, CI/CD Pipelines',
    color: 'green'
  },
  {
    icon: Database,
    title: 'Database Management',
    description: 'MySQL, MongoDB, Query Optimization',
    color: 'purple'
  },
  {
    icon: Network,
    title: 'System Architecture',
    description: 'Microservices, Monitoring, Grafana, Prometheus',
    color: 'yellow'
  },
  {
    icon: Code,
    title: 'Programming',
    description: 'Java, JavaScript, Problem Solving (200+ LeetCode)',
    color: 'red'
  },
  {
    icon: Shield,
    title: 'Security & Networking',
    description: 'Cybersecurity, OSI Model, TCP/IP, DNS',
    color: 'orange'
  }
]

export default function About() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <FloatingElements delay={200}>
      <section id="about" className="about-section" ref={ref}>
        <div className="about-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="about-header"
          >
          <h2 className="about-title">
            About Me
          </h2>
          <p className="about-description">
            A Backend Developer and DevOps enthusiast with hands-on experience in building scalable systems. 
            Currently pursuing B.Tech in Computer Science from Chandigarh Group of Colleges with a CGPA of 7.99. 
            Passionate about automation, system efficiency, and solving complex problems with elegant solutions.
          </p>
        </motion.div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="skill-card"
            >
              <div className={`skill-icon ${skill.color}`}>
                <skill.icon />
              </div>
              
              <h3 className="skill-title">
                {skill.title}
              </h3>
              
              <p className="skill-description">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="journey-section"
        >
          <div className="journey-card">
            <h3 className="journey-title">My Journey</h3>
            <p className="journey-text">
              Started as a curious Computer Science student, I've gained practical experience through internships 
              at PaceAssembly Tools and freelance projects like the Mahanth Educational Institute platform. 
              From optimizing database queries to building CI/CD pipelines, I believe in continuous learning 
              and building systems that scale. Currently exploring advanced DevOps practices while strengthening 
              my algorithmic skills with 200+ solved coding problems.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
    </FloatingElements>
  )
}
