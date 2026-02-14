import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, ExternalLink, Code, Database, Brain, BarChart3, Users, Music, MapPin, Award, BookOpen, Heart } from 'lucide-react'
import './App.css'

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
      
      // Check if cursor is over an interactive element
      const element = document.elementFromPoint(e.clientX, e.clientY)
      const isInteractive = element && (
        element.tagName === 'A' || 
        element.tagName === 'BUTTON' ||
        element.classList.contains('card') ||
        element.classList.contains('btn') ||
        element.classList.contains('skill-card') ||
        element.classList.contains('project-card') ||
        element.classList.contains('certification-card') ||
        element.classList.contains('interest-card') ||
        element.classList.contains('contact-method') ||
        element.classList.contains('logo-text')
      )
      setIsHovering(isInteractive)
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const projects = [
    {
      title: "LegalEase – AI-Powered Legal Document Simplifier",
      problem: "Complex legal documents are inaccessible to most people due to complicated language and structure.",
      solution: "AI system that simplifies legal documents with language detection, multilingual translation, text summarization, and clause risk identification.",
      technologies: ["Python", "NLP", "Machine Learning", "Text Processing"],
      impact: "Improves legal accessibility and readability for non-legal professionals.",
      tags: ["AI", "NLP", "Legal Tech"]
    },
    {
      title: "Roamly – Travel Itinerary Tracker",
      problem: "Travel planning is fragmented across multiple platforms with no integrated solution.",
      solution: "Full-stack web application for itinerary planning, crowd-sourced travel data, user profiles, and interactive map integration.",
      technologies: ["React", "Node.js", "MongoDB", "APIs", "Maps"],
      impact: "Streamlined travel planning with scalable backend and user-centric design.",
      tags: ["Full Stack", "Web App", "Travel"]
    },
    {
      title: "Smart India Hackathon – Emergency Response Dashboard",
      problem: "Emergency response teams need real-time data for effective disaster management.",
      solution: "Real-time dashboard with alert classification, live social media integration, and interactive visualizations.",
      technologies: ["React", "Data Visualization", "APIs", "Real-time Processing"],
      impact: "Faster decision-making for emergency response teams.",
      tags: ["Dashboard", "Emergency", "Data Viz"]
    },
    {
      title: "Healthcare Risk Prediction System",
      problem: "Early detection of cardiovascular disease risk is crucial for preventive healthcare.",
      solution: "Machine learning model for cardiovascular disease risk prediction with data preprocessing and feature selection.",
      technologies: ["Python", "Machine Learning", "Data Science", "Healthcare"],
      impact: "Achieved 8th place nationally in IIIT Sricity Hackathon.",
      tags: ["ML", "Healthcare", "Prediction"]
    }
  ]

  const experiences = [
    {
      title: "Graduate Innovation Engineer",
      company: "Forge Innovation & Ventures",
      type: "Apprenticeship",
      duration: "Current",
      description: "Working as a Graduate Innovation Engineer focusing on cutting-edge innovation projects and venture development. Applying data science and AI methodologies to solve real-world business challenges and drive technological innovation.",
      skills: ["Innovation Management", "Data Analysis", "AI Implementation", "Project Management", "Business Strategy", "Problem Solving"],
      achievements: [
        "Contributing to innovation pipeline development",
        "Applying machine learning to business challenges",
        "Collaborating on venture development projects",
        "Developing data-driven innovation strategies"
      ]
    },
    {
      title: "Singapore Experience Programme",
      company: "Singapore-India Partnership Foundation (SIPF) • ISAS-NUS • CII",
      type: "Cultural Exchange Program",
      duration: "10 Days",
      description: "Intensive cultural and educational exchange program engaging with Singapore's leading universities, policy institutions, businesses, and cultural organizations alongside peers from top Indian universities.",
      skills: ["Cross-Cultural Communication", "Policy Analysis", "International Relations", "Systems Thinking", "Global Perspective", "Professional Networking"],
      achievements: [
        "Engaged with Singapore University of Social Sciences (SUSS) on multiculturalism",
        "Explored innovation ecosystems at NUS Enterprise and BLOCK71 Global",
        "Analyzed India-Singapore relations at Institute of South Asian Studies (ISAS)",
        "Visited Ministry of Trade and Industry, NTUC, and High Commission of India",
        "Connected with industry leaders at SICCI, TCS Singapore, and various cultural institutions"
      ]
    }
  ]

  const leadershipRoles = [
    {
      title: "Lead Vocalist & Audience Engagement Lead",
      company: "Band Agratha",
      type: "Leadership Role",
      duration: "Ongoing",
      description: "Lead vocalist for Band Agratha, a well-established college band responsible for live performance delivery and audience engagement. Performed at multiple large-scale college and external events including Yugam, Jananam, Harvest Fest (twice), and numerous gigs both within and outside college.",
      skills: ["Leadership", "Communication", "Stage Presence", "Crowd Engagement", "Performance Consistency", "Team Collaboration"],
      achievements: [
        "Delivered high-energy performances at major college festivals and external venues",
        "Managed audience engagement and crowd interaction during live events",
        "Collaborated effectively with band members, event organizers, and technical teams",
        "Performed consistently in high-pressure live event environments",
        "Built strong stage presence and performance delivery skills"
      ]
    },
    {
      title: "Secretary, Department of Artificial Intelligence & Data Science",
      company: "Kumaraguru College of Technology",
      type: "Departmental Leadership",
      duration: "Former Joint Secretary → Secretary",
      description: "Served as Joint Secretary and later Secretary of AI & DS department, actively coordinating departmental activities and initiatives. Acted as a bridge between students, faculty, and organizing teams while supporting academic and co-curricular events.",
      skills: ["Responsibility", "Department-Level Leadership", "Organizational Capability", "Team Coordination", "Communication"],
      achievements: [
        "Coordinated departmental activities and major events",
        "Facilitated communication between students and faculty",
        "Organized academic and co-curricular initiatives",
        "Developed leadership and organizational skills through active department involvement",
        "Managed department-level operations and student engagement"
      ]
    },
    {
      title: "Joint Treasurer & Former USG – Delegate Affairs",
      company: "Kumaraguru Model United Nations Society",
      type: "Organizational Leadership",
      duration: "Former USG → Current Joint Treasurer",
      description: "Currently serving as Joint Treasurer of Kumaraguru MUN Society, previously as Under Secretary General for Delegate Affairs. Managed financial planning, delegate coordination, registrations, and communication for society activities.",
      skills: ["Financial Responsibility", "Organizational Leadership", "Communication", "Event Operations", "Stakeholder Management"],
      achievements: [
        "Managed financial planning and budget coordination for society activities",
        "Oversaw delegate coordination, registrations, and communication",
        "Gained extensive experience in event management and operations",
        "Handled multiple stakeholders including delegates, organizers, and faculty",
        "Developed strong organizational and leadership capabilities"
      ]
    }
  ]

  const certifications = [
    "Introduction to Artificial Intelligence – IBM",
    "Artificial Intelligence Foundations: Machine Learning – LinkedIn",
    "Generative AI – IBM",
    "Big Data, Artificial Intelligence, and Ethics – UC Davis",
    "Overview of Business Analytics using WEKA – Infosys",
    "Data Visualization – University of Illinois",
    "Driving Business towards SDGs – Erasmus",
    "Sustainable Development Goals – University of Copenhagen"
  ]

  const technicalSkills = [
    "Machine Learning", "Deep Learning", "Data Analysis", "Data Visualization",
    "Statistical Modeling", "Predictive Modeling", "Feature Engineering",
    "Experiment Design", "A/B Testing", "Data Mining", "Database Management",
    "Python", "R", "SQL", "NoSQL"
  ]

  const softSkills = [
    "Clear Communication", "Team Player", "Leadership", "Initiative-taking",
    "Strong Organization", "Coordination", "Critical Thinking", "Problem Solving"
  ]

  return (
    <div className="App">
      <div 
        className={`custom-cursor ${isHovering ? 'hover' : ''}`}
        style={{ left: cursorPosition.x, top: cursorPosition.y }}
      />
      <div 
        className="cursor-dot"
        style={{ left: cursorPosition.x, top: cursorPosition.y }}
      />

      <nav>
        <div className="container nav-container">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="logo-text"
          >
            Aadvika's Portfolio
          </motion.h1>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#leadership">Leadership</a></li>
            <li><a href="#certifications">Certifications</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#interests">Interests</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <section id="home" className="fade-in">
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">Aadvika</span>
            </h1>
            <h2 className="hero-subtitle">
              B.Tech – Artificial Intelligence & Data Science
            </h2>
            <p className="hero-description">
              AI & Data Science undergraduate passionate about transforming data into meaningful insights. 
              Building intelligent solutions that bridge the gap between complex technology and real-world impact.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-secondary">View Projects</a>
              <a href="#contact" className="btn btn-secondary">Get In Touch</a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">4+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat">
                <span className="stat-number">8+</span>
                <span className="stat-label">Certifications</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="fade-in">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <motion.div 
              className="about-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p>
                I'm an AI and Data Science undergraduate at Kumaraguru College of Technology with a strong foundation in 
                machine learning, data analytics, and intelligent systems design. My academic journey (CGPA: 8.87) has equipped 
                me with both theoretical knowledge and practical implementation skills.
              </p>
              <p>
                I thrive on transforming complex data challenges into elegant solutions. Whether it's developing predictive models, 
                creating intuitive data visualizations, or building full-stack applications, I approach each project with analytical 
                thinking and creative problem-solving.
              </p>
              <p>
                My collaborative spirit and leadership experience have helped me excel in team environments, while my passion for 
                continuous learning keeps me at the forefront of emerging technologies in AI and data science.
              </p>
            </motion.div>
            <motion.div 
              className="about-highlights"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="highlight-card">
                <Brain className="icon" />
                <h3>AI Enthusiast</h3>
                <p>Passionate about machine learning and intelligent systems</p>
              </div>
              <div className="highlight-card">
                <Code className="icon" />
                <h3>Problem Solver</h3>
                <p>Transform complex challenges into elegant solutions</p>
              </div>
              <div className="highlight-card">
                <Users className="icon" />
                <h3>Team Player</h3>
                <p>Collaborative approach to innovation and success</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="skills" className="fade-in">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          <div className="skills-container">
            <motion.div 
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3><Database className="icon" /> Technical Skills</h3>
              <div className="skills-grid">
                {technicalSkills.map((skill, index) => (
                  <motion.div 
                    key={skill}
                    className="skill-card"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3><Heart className="icon" /> Soft Skills</h3>
              <div className="skills-grid">
                {softSkills.map((skill, index) => (
                  <motion.div 
                    key={skill}
                    className="skill-card soft-skill"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="projects" className="fade-in">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div 
                key={project.title}
                className="project-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <div className="project-tags">
                    {project.tags.map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="project-content">
                  <div className="project-section">
                    <h4>Problem</h4>
                    <p>{project.problem}</p>
                  </div>
                  <div className="project-section">
                    <h4>Solution</h4>
                    <p>{project.solution}</p>
                  </div>
                  <div className="project-section">
                    <h4>Impact</h4>
                    <p>{project.impact}</p>
                  </div>
                  <div className="project-tech">
                    <h4>Technologies</h4>
                    <div className="tech-list">
                      {project.technologies.map(tech => (
                        <span key={tech} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="fade-in">
        <div className="container">
          <h2 className="section-title">Experience</h2>
          <div className="experience-grid">
            {experiences.map((exp, index) => (
              <motion.div 
                key={exp.title}
                className="experience-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="experience-header">
                  <div className="experience-title-section">
                    <h3>{exp.title}</h3>
                    <h4 className="company">{exp.company}</h4>
                  </div>
                  <div className="experience-meta">
                    <span className="experience-type">{exp.type}</span>
                    <span className="experience-duration">{exp.duration}</span>
                  </div>
                </div>
                
                <div className="experience-description">
                  <p>{exp.description}</p>
                </div>
                
                <div className="experience-skills">
                  <h4>Skills Applied</h4>
                  <div className="skills-list">
                    {exp.skills.map((skill, skillIndex) => (
                      <span key={skill} className="skill-tag experience-skill">{skill}</span>
                    ))}
                  </div>
                </div>
                
                <div className="experience-achievements">
                  <h4>Key Achievements</h4>
                  <ul>
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="leadership" className="fade-in">
        <div className="container">
          <h2 className="section-title">Leadership, Clubs & Departmental Roles</h2>
          <div className="experience-grid">
            {leadershipRoles.map((role, index) => (
              <motion.div 
                key={role.title}
                className="experience-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="experience-header">
                  <div className="experience-title-section">
                    <h3>{role.title}</h3>
                    <h4 className="company">{role.company}</h4>
                  </div>
                  <div className="experience-meta">
                    <span className="experience-type">{role.type}</span>
                    <span className="experience-duration">{role.duration}</span>
                  </div>
                </div>
                
                <div className="experience-description">
                  <p>{role.description}</p>
                </div>
                
                <div className="experience-skills">
                  <h4>Skills Applied</h4>
                  <div className="skills-list">
                    {role.skills.map((skill, skillIndex) => (
                      <span key={skill} className="skill-tag experience-skill">{skill}</span>
                    ))}
                  </div>
                </div>
                
                <div className="experience-achievements">
                  <h4>Key Achievements</h4>
                  <ul>
                    {role.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="certifications" className="fade-in">
        <div className="container">
          <h2 className="section-title">Certifications</h2>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <motion.div 
                key={cert}
                className="certification-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Award className="cert-icon" />
                <p>{cert}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="fade-in">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <motion.div 
            className="education-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="education-header">
              <BookOpen className="edu-icon" />
              <div>
                <h3>Kumaraguru College of Technology</h3>
                <p className="degree">B.Tech – Artificial Intelligence & Data Science</p>
                <p className="duration">2023 – 2027</p>
              </div>
            </div>
            <div className="education-details">
              <div className="edu-highlight">
                <span className="label">CGPA:</span>
                <span className="value">8.87</span>
              </div>
              <div className="edu-description">
                <p>Comprehensive curriculum covering machine learning, deep learning, data science, statistics, and computer science fundamentals with hands-on project experience.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="interests" className="fade-in">
        <div className="container">
          <h2 className="section-title">Interests</h2>
          <div className="interests-grid">
            <motion.div 
              className="interest-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -10 }}
            >
              <Music className="interest-icon" />
              <h3>Music & Singing</h3>
              <p>Creative expression through melody and rhythm</p>
            </motion.div>
            <motion.div 
              className="interest-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              whileHover={{ y: -10 }}
            >
              <MapPin className="interest-icon" />
              <h3>Travel & Exploration</h3>
              <p>Discovering new places and cultures</p>
            </motion.div>
            <motion.div 
              className="interest-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              whileHover={{ y: -10 }}
            >
              <Users className="interest-icon" />
              <h3>Community Engagement</h3>
              <p>Building connections and making impact</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="contact" className="fade-in">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <motion.div 
              className="contact-info"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3>Let's build something meaningful with data.</h3>
              <p>I'm always open to discussing new opportunities, interesting projects, or just having a conversation about AI and data science.</p>
              <div className="contact-methods">
                <a href="mailto:aadvikasrik2005@gmail.com" className="contact-method">
                  <Mail className="method-icon" />
                  <span>aadvikasrik2005@gmail.com</span>
                </a>
                <a href="tel:+917373766556" className="contact-method">
                  <Phone className="method-icon" />
                  <span>+91 7373766556</span>
                </a>
                <a href="https://github.com/aadviiika" target="_blank" className="contact-method">
                  <Github className="method-icon" />
                  <span>github.com/aadviiika</span>
                </a>
                <a href="https://www.linkedin.com/in/aadvika-srikrishna-328a50279/" target="_blank" className="contact-method">
                  <Linkedin className="method-icon" />
                  <span>linkedin.com/in/aadvika-srikrishna</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
