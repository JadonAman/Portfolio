import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github } from 'lucide-react'
import './Projects.css'

const projects = [
  {
    id: 1,
    title: 'DevOps CI/CD Pipeline',
    description: 'Containerized development pipeline using Docker with Jenkins auto-deployment triggered by GitHub webhooks. Integrated Prometheus and Grafana for system monitoring and performance visualization.',
    technologies: ['Docker', 'Jenkins', 'GitHub Webhooks', 'Prometheus', 'Grafana', 'Linux'],
    githubUrl: '#',
    liveUrl: '#',
    status: 'Ongoing',
    image: '/images/projects/devops-pipeline.svg'
  },
  {
    id: 2,
    title: 'Mahanth Educational Institute Platform',
    description: 'Full-stack website with custom admin panel for managing 500+ courses across 25 fields. Features course management dashboard, application tracking, and optimized database queries for enhanced performance.',
    technologies: ['PHP', 'HTML', 'CSS', 'MySQL', 'Hostinger'],
    githubUrl: '#',
    liveUrl: '#',
    status: 'Deployed',
    image: '/images/projects/mahanth-institute.svg'
  },
  {
    id: 3,
    title: 'User Management System',
    description: 'Backend system developed during internship at PaceAssembly Tools. Implemented secure RESTful endpoints for authentication workflow and optimized database queries for improved performance.',
    technologies: ['PHP', 'MySQL', 'REST APIs', 'Authentication'],
    githubUrl: '#',
    liveUrl: '#',
    status: 'Completed',
    image: '/images/projects/user-management.svg'
  },
  {
    id: 4,
    title: 'Department Event Website',
    description: 'Interactive event website with responsive design featuring structured event listings, venue details, and optimized frontend assets for improved page load times and user experience.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    githubUrl: '#',
    liveUrl: '#',
    status: 'Completed',
    image: '/images/projects/event-website.svg'
  }
]

export default function Projects() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section id="projects" className="projects-section" ref={ref}>
      <div className="projects-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="projects-header"
        >
          <h2 className="projects-title">
            My Projects
          </h2>
          <p className="projects-description">
            A showcase of my real-world projects, from DevOps automation to full-stack development. 
            Each project demonstrates practical problem-solving and the implementation of modern technologies 
            in professional and educational environments.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="project-card"
            >
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-img"
                  loading="lazy"
                />
                <div className="project-image-overlay">
                  <div className="project-image-links">
                    <motion.a
                      href={project.githubUrl}
                      className="image-link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={24} />
                    </motion.a>
                    <motion.a
                      href={project.liveUrl}
                      className="image-link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={24} />
                    </motion.a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <div className="project-header">
                  <div className="project-title-wrapper">
                    <h3 className="project-title">
                      {project.title}
                    </h3>
                    <span className={`project-status ${project.status?.toLowerCase()}`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="project-links">
                    <motion.a
                      href={project.githubUrl}
                      className="project-link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      href={project.liveUrl}
                      className="project-link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>
                </div>

                <p className="project-text">
                  {project.description}
                </p>

                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: (index * 0.1) + (techIndex * 0.05) }}
                      className="tech-tag"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
