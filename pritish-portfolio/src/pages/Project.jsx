import React, { useState } from 'react'
import './Project.css'
import {
  FiExternalLink,
  FiGithub,
  FiMoreVertical,
  FiX,
} from 'react-icons/fi'

export default function Project() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with product management, cart functionality, and secure payment integration.',
      category: 'FullStack',
      cardTechnologies: ['React', 'Spring Boot', 'MySQL'],
      detailTechnologies: ['React', 'Spring Boot', 'MySQL', 'Stripe', 'JWT', 'REST API', 'Postman', 'Git'],
      image: '🛒',
      liveLink: '#',
      githubLink: '#',
      problemStatement: 'Create a scalable e-commerce platform that allows users to browse, search, and purchase products with secure payment processing.',
      details: 'This e-commerce platform was built using React for the frontend with a responsive design, Spring Boot backend with RESTful APIs, MySQL database for product and order management, and Stripe integration for secure payment processing. The application includes user authentication, product catalog management, shopping cart functionality, order tracking, and an admin panel for inventory management.',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'React-based task management application with real-time updates, drag-and-drop functionality, and user authentication.',
      category: 'Frontend',
      cardTechnologies: ['React', 'Redux', 'Tailwind CSS'],
      detailTechnologies: ['React', 'Redux', 'Tailwind CSS', 'Firebase', 'Framer Motion', 'React Beautiful DnD', 'Axios', 'Context API'],
      image: '✅',
      liveLink: '#',
      githubLink: '#',
      problemStatement: 'Develop a real-time task management tool that allows teams to organize, prioritize, and track project tasks efficiently.',
      details: 'Built a modern task management application using React and Redux for state management, featuring drag-and-drop task organization, real-time updates with Firebase, user authentication, team collaboration features, and responsive design with Tailwind CSS. Includes task filtering, priority levels, deadline tracking, and team member assignment capabilities.',
    },
    {
      id: 3,
      title: 'REST API for Blog Platform',
      description: 'Robust REST API built with Spring Boot for a blog platform with user authentication, post management, and comment system.',
      category: 'Backend',
      cardTechnologies: ['Java', 'Spring Boot', 'MySQL'],
      detailTechnologies: ['Java', 'Spring Boot', 'MySQL', 'JWT', 'Hibernate', 'Lombok', 'Maven', 'JUnit', 'Swagger'],
      image: '📝',
      liveLink: '#',
      githubLink: '#',
      problemStatement: 'Create a scalable REST API for a blog platform supporting user authentication, content management, and community engagement.',
      details: 'Developed a comprehensive REST API using Spring Boot with JWT authentication, MySQL database for data persistence, comprehensive blog post management with CRUD operations, comment system for user engagement, user profile management, and role-based access control. Implements pagination, filtering, and search functionality for efficient content discovery.',
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'Interactive weather dashboard displaying real-time weather data with maps, forecasts, and beautiful UI animations.',
      category: 'Frontend',
      cardTechnologies: ['React', 'OpenWeather API', 'Chart.js'],
      detailTechnologies: ['React', 'OpenWeather API', 'Chart.js', 'CSS3', 'Leaflet Maps', 'Axios', 'Redux', 'React Router'],
      image: '🌤️',
      liveLink: '#',
      githubLink: '#',
      problemStatement: 'Build an interactive weather dashboard that provides real-time weather data with visual representations and forecasting.',
      details: 'Created an interactive weather dashboard using React and OpenWeather API for real-time data, Chart.js for beautiful weather trend visualizations, responsive design with CSS3 animations, location-based weather information, 7-day forecast, weather alerts, and UV index tracking. Includes dark/light theme toggle and location search functionality.',
    },
    {
      id: 5,
      title: 'User Management System',
      description: 'Full-stack application for managing users with role-based access control, dashboard, and comprehensive admin panel.',
      category: 'FullStack',
      cardTechnologies: ['React', 'Spring Boot', 'PostgreSQL'],
      detailTechnologies: ['React', 'Spring Boot', 'PostgreSQL', 'Redis', 'JWT', 'Docker', 'Elasticsearch', 'Kibana', 'Log4j'],
      image: '👥',
      liveLink: '#',
      githubLink: '#',
      problemStatement: 'Develop a comprehensive user management system with role-based access control and administrative capabilities.',
      details: 'Built a complete user management system with React frontend and Spring Boot backend, PostgreSQL database for user data storage, Redis caching for performance optimization, role-based access control (RBAC), user authentication and authorization, comprehensive admin dashboard for user management, activity logging, and audit trails.',
    },
    {
      id: 6,
      title: 'Microservices Architecture',
      description: 'Scalable microservices setup with Spring Cloud, service discovery, API gateway, and inter-service communication.',
      category: 'Backend',
      cardTechnologies: ['Spring Cloud', 'Docker', 'Kubernetes'],
      detailTechnologies: ['Spring Cloud', 'Docker', 'Kubernetes', 'RabbitMQ', 'Eureka', 'Zuul Gateway', 'Circuit Breaker', 'ELK Stack', 'Prometheus'],
      image: '🔧',
      liveLink: '#',
      githubLink: '#',
      problemStatement: 'Design and implement a scalable microservices architecture with proper service discovery and inter-service communication.',
      details: 'Designed and implemented a scalable microservices architecture using Spring Cloud with service discovery using Eureka, API Gateway for routing, inter-service communication with RabbitMQ message broker, containerization with Docker, orchestration with Kubernetes, circuit breaker pattern for resilience, and distributed logging/monitoring solutions.',
    },
  ]

  const filters = ['All', 'Frontend', 'Backend', 'FullStack']

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter)

  const openModal = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        {/* SECTION HEADER */}
        <div className="projects-header">
          <h2 className="section-title">My Projects</h2>
        </div>

        {/* FILTER BUTTONS */}
        <div className="filter-container">
          {filters.map(filter => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* PROJECTS GRID */}
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              {/* DETAIL BUTTON */}
              <button
                className="detail-btn"
                onClick={() => openModal(project)}
                title="View Details"
              >
                <FiMoreVertical />
              </button>

              {/* PROJECT IMAGE/ICON */}
              <div className="project-image">
                <span className="project-emoji">{project.image}</span>
              </div>

              {/* PROJECT CONTENT */}
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-category">{project.category}</span>
                </div>

                <p className="project-description">
                  {project.description}
                </p>

                {/* TECHNOLOGIES - CARD VIEW (LIMITED) */}
                <div className="project-tech">
                  {project.cardTechnologies.map((tech, index) => (
                    <span key={index} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* LINKS */}
                <div className="project-links">
                  <a href={project.liveLink} className="project-link live-link">
                    <FiExternalLink className="link-icon" />
                    <span>Live Demo</span>
                  </a>
                  <a href={project.githubLink} className="project-link github-link">
                    <FiGithub className="link-icon" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* EMPTY STATE */}
        {filteredProjects.length === 0 && (
          <div className="empty-state">
            <p>No projects found for this category</p>
          </div>
        )}
      </div>

      {/* MODAL */}
      {isModalOpen && selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">{selectedProject.title}</h2>
              <button className="modal-close" onClick={closeModal}>
                <FiX />
              </button>
            </div>

            <div className="modal-body">
              <div className="modal-section">
                <h3 className="modal-subtitle">Problem Statement</h3>
                <p className="modal-text">{selectedProject.problemStatement}</p>
              </div>

              <div className="modal-section">
                <h3 className="modal-subtitle">Details</h3>
                <p className="modal-text">{selectedProject.details}</p>
              </div>

              <div className="modal-section">
                <h3 className="modal-subtitle">Technologies Used</h3>
                <div className="modal-tech">
                  {selectedProject.detailTechnologies.map((tech, index) => (
                    <span key={index} className="modal-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="modal-links">
                <a href={selectedProject.liveLink} className="modal-link live-link">
                  <FiExternalLink />
                  Live Demo
                </a>
                <a href={selectedProject.githubLink} className="modal-link github-link">
                  <FiGithub />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}