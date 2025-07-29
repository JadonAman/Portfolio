import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react'
import './Education.css'

const educationData = [
  {
    id: 1,
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'Chandigarh Group of Colleges, Mohali',
    duration: '2022 - 2026',
    cgpa: '7.99 CGPA',
    location: 'Mohali, Punjab',
    status: 'Ongoing',
    description: 'Focused on software engineering, data structures, algorithms, and system design. Active in department events and hackathon organization.',
    highlights: [
      'Core member for departmental events',
      'Organized department-level hackathon',
      'Led 20-member volunteer team',
      'Speaker sessions and technical workshops'
    ]
  },
  {
    id: 2,
    degree: '12th Grade (Senior Secondary)',
    institution: 'Tiny Tots English Medium School, Firozabad',
    duration: '2022',
    cgpa: '72.6%',
    location: 'Firozabad, UP',
    status: 'Completed',
    description: 'Completed higher secondary education with focus on Science and Mathematics.',
    highlights: [
      'Science stream with Mathematics',
      'Strong foundation in Physics and Chemistry',
      'Developed analytical thinking skills'
    ]
  },
  {
    id: 3,
    degree: '10th Grade (Secondary)',
    institution: 'Tiny Tots English Medium School, Firozabad',
    duration: '2020',
    cgpa: '82.8%',
    location: 'Firozabad, UP',
    status: 'Completed',
    description: 'Completed secondary education with excellent academic performance.',
    highlights: [
      'Strong academic performance',
      'Consistent academic excellence',
      'Foundation in core subjects'
    ]
  }
]

const certifications = [
  {
    title: 'Google Cybersecurity Professional Certificate',
    issuer: 'Google',
    date: 'Feb 2024',
    icon: Award
  },
  {
    title: 'Introduction to MongoDB (For Students)',
    issuer: 'MongoDB',
    date: 'Jul 2024',
    icon: Award
  },
  {
    title: 'MongoDB PHP Developer Path',
    issuer: 'MongoDB',
    date: 'Jul 2024',
    icon: Award
  }
]

export default function Education() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section id="education" className="education-section" ref={ref}>
      <div className="education-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="education-header"
        >
          <h2 className="education-title">
            Education & Certifications
          </h2>
          <p className="education-description">
            My academic journey and professional certifications that have shaped my technical expertise 
            and problem-solving abilities in the field of computer science and technology.
          </p>
        </motion.div>

        <div className="education-content">
          <div className="education-timeline">
            <h3 className="section-subtitle">Academic Background</h3>
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="education-card"
              >
                <div className="education-icon">
                  <GraduationCap />
                </div>
                
                <div className="education-content-inner">
                  <div className="education-header-inner">
                    <h4 className="education-degree">{edu.degree}</h4>
                    <span className={`education-status ${edu.status.toLowerCase()}`}>
                      {edu.status}
                    </span>
                  </div>
                  
                  <div className="education-meta">
                    <div className="meta-item">
                      <MapPin size={16} />
                      <span>{edu.institution}</span>
                    </div>
                    <div className="meta-item">
                      <Calendar size={16} />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="meta-item">
                      <Award size={16} />
                      <span>{edu.cgpa}</span>
                    </div>
                  </div>
                  
                  <p className="education-desc">{edu.description}</p>
                  
                  <div className="education-highlights">
                    {edu.highlights.map((highlight, idx) => (
                      <span key={idx} className="highlight-tag">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="certifications-section"
          >
            <h3 className="section-subtitle">Professional Certifications</h3>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="certification-card"
                >
                  <div className="cert-icon">
                    <cert.icon size={24} />
                  </div>
                  <div className="cert-content">
                    <h4 className="cert-title">{cert.title}</h4>
                    <p className="cert-issuer">{cert.issuer}</p>
                    <span className="cert-date">{cert.date}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
