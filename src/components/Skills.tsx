import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Server, 
  Container, 
  Shield, 
  Code, 
  Network,
  Cloud
} from 'lucide-react'
import ScrollAnimation from './ScrollAnimation'
import './Skills.css'

const skillCategories = [
  {
    title: 'Backend Development',
    icon: Server,
    skills: [
      { name: 'PHP', level: 90 },
      { name: 'REST APIs', level: 85 },
      { name: 'MySQL', level: 88 },
      { name: 'MongoDB', level: 75 }
    ],
    color: 'blue'
  },
  {
    title: 'DevOps & Infrastructure',
    icon: Container,
    skills: [
      { name: 'Docker', level: 85 },
      { name: 'Jenkins', level: 65 },
      { name: 'AWS', level: 50 },
      { name: 'CI/CD Pipelines', level: 50 }
    ],
    color: 'green'
  },
  {
    title: 'Programming Languages',
    icon: Code,
    skills: [
      { name: 'Java', level: 85 },
      { name: 'JavaScript', level: 70 },
      { name: 'Python', level: 50 },
      { name: 'YAML', level: 75 }
    ],
    color: 'purple'
  },
  {
    title: 'System Architecture',
    icon: Network,
    skills: [
      { name: 'Microservices', level: 70 },
      { name: 'Monitoring', level: 70 },
      { name: 'Grafana', level: 50 },
      { name: 'Prometheus', level: 50 }
    ],
    color: 'yellow'
  },
  {
    title: 'Cloud & Infrastructure',
    icon: Cloud,
    skills: [
      { name: 'Linux', level: 80 },
      { name: 'AWS Services', level: 65 },
      { name: 'Server Management', level: 70 },
      { name: 'Load Balancing', level: 60 }
    ],
    color: 'cyan'
  },
  {
    title: 'Security & Networking',
    icon: Shield,
    skills: [
      { name: 'Cybersecurity', level: 50 },
      { name: 'OSI Model', level: 85 },
      { name: 'TCP/IP', level: 80 },
      { name: 'DNS', level: 70 }
    ],
    color: 'red'
  }
]

export default function Skills() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <ScrollAnimation direction="up" delay={0.1}>
          <div className="skills-header">
            <h2 className="skills-title">Technical Skills</h2>
            <p className="skills-description">
              A comprehensive overview of my technical expertise and proficiency levels across various technologies and domains.
            </p>
          </div>
        </ScrollAnimation>

        <div className="skills-grid" ref={ref}>
          {skillCategories.map((category, categoryIndex) => (
            <ScrollAnimation 
              key={category.title}
              direction="up"
              delay={categoryIndex * 0.1}
              className="skill-category"
            >
              <motion.div
                className={`skill-category-card ${category.color}`}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="skill-category-header">
                  <div className="skill-category-icon">
                    <category.icon size={28} />
                  </div>
                  <h3 className="skill-category-title">{category.title}</h3>
                </div>

                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="skill-item"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ 
                        delay: (categoryIndex * 0.1) + (skillIndex * 0.1) + 0.3,
                        duration: 0.5
                      }}
                    >
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-progress-bar">
                        <motion.div
                          className="skill-progress-fill"
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ 
                            delay: (categoryIndex * 0.1) + (skillIndex * 0.1) + 0.5,
                            duration: 1,
                            ease: "easeOut"
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation direction="fade" delay={0.8}>
          <div className="skills-stats">
            <div className="stat-item">
              <h4>200+</h4>
              <p>LeetCode Problems Solved</p>
            </div>
            <div className="stat-item">
              <h4>1+</h4>
              <p>Years of Experience</p>
            </div>
            <div className="stat-item">
              <h4>10+</h4>
              <p>Technologies Mastered</p>
            </div>
            <div className="stat-item">
              <h4>5+</h4>
              <p>Projects Completed</p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
