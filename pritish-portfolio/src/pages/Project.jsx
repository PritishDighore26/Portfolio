import React, { useState } from 'react'
import './Project.css'
import ridevaImg from "../assets/rideva.png";
import pakkifyImg from "../assets/pakkify.png";
import portfolioImg from "../assets/portfolio.png";
import foodkingImg from "../assets/foodking.png";

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
  title: 'RIDEVA – Self Drive Vehicle Renting System',
  description: 'A full-stack vehicle rental platform that allows users to book self-drive vehicles, owners to manage fleets, and admins to monitor system operations.',
  category: 'FullStack',
  cardTechnologies: ['React', 'Spring Boot', 'MySQL'],
  detailTechnologies: [
    'React',
    'Spring Boot',
    'Hibernate',
    'MySQL',
    'REST API',
    'Postman',
    'Git'
  ],
  image: ridevaImg,
  liveLink: null,
  githubLink: 'https://github.com/PritishDighore26/RIDEVA-Self-Drive-Vehicle-Renting-System',
  problemStatement: 'Build a scalable vehicle rental system that enables users to search and book self-drive vehicles, owners to manage their fleet, and admins to control and monitor platform activities securely.',
  details: 'RIDEVA is a full-stack self-drive vehicle renting system developed using React for the frontend and Spring Boot with Hibernate for the backend. The platform supports role-based authentication (Admin, Owner, User). Users can search vehicles based on location, date, and transmission, and manage their bookings. Owners can add, update while Admins can manage users, vehicles, bookings, and monitor system performance. The system uses RESTful APIs for communication and MySQL for persistent data storage.'
},
 {
  id: 2,
  title: 'PAKKIFY – Handcraft E-Commerce Platform',
  description: 'A full-stack marketplace platform that empowers artisans and small business owners to sell handcrafted products online.',
  category: 'FullStack',
  cardTechnologies: ['Angular', 'Spring Boot', 'MySQL'],
  detailTechnologies: [
    'Angular',
    'Spring Boot',
    'Hibernate',
    'MySQL',
    'REST API',
    'AngularMaterial',
    'Postman',
    'Git'
  ],
  image: pakkifyImg,
  liveLink: null,
  githubLink: 'https://github.com/PritishDighore26/PAKKIFY-HandcraftE-CommercePlatform',
  problemStatement: 'Build a scalable e-commerce platform that enables artisans and small business owners to showcase and sell their handcrafted products to a wider audience with secure authentication and product management.',
  details: 'PAKKIFY is a full-stack e-commerce marketplace developed using Angular for the frontend and Spring Boot with Hibernate for the backend. The platform supports role-based access. Sellers can add, update, and manage products, while buyers can browse, filter, add to cart, and place orders. Admin has full control over users and product moderation. The system uses RESTful APIs for communication, and MySQL for data persistence, ensuring scalability and secure transactions.'
},
  {
  id: 3,
  title: 'Personal Portfolio Website',
  description: 'A modern, high-performance portfolio website built with React and Vite to showcase projects, skills, and experience.',
  category: 'Frontend',
  cardTechnologies: ['React', 'Vite', 'CSS'],
  detailTechnologies: [
    'React',
    'Vite',
    'JavaScript',
    'CSS3',
    'React Router',
    'EmailJS',
    'Git'
  ],
  image: portfolioImg,
  liveLink: 'https://pritishdighore.netlify.app/',
  githubLink: 'https://github.com/PritishDighore26/Portfolio',
  problemStatement: 'Design and develop a fast, responsive, and visually appealing portfolio website to professionally showcase projects, technical skills, and achievements.',
  details: 'Built a high-performance personal portfolio website using React with Vite for optimized development and fast build times. Implemented responsive layouts for mobile, tablet, and desktop devices, and dynamic project filtering. Focused on clean UI design, component-based architecture, performance optimization, and modern frontend best practices.'
}
,
   {
  id: 4,
  title: 'FoodKing – Online Food Ordering System',
  description: 'A responsive food ordering website built using HTML, CSS, and JavaScript with cart management using browser LocalStorage.',
  category: 'Frontend',
  cardTechnologies: ['HTML5', 'CSS3', 'JavaScript'],
  detailTechnologies: [
    'HTML5',
    'CSS3',
    'JavaScript',
    'LocalStorage',
    'JSON',
    'DOM Manipulation',
    'Form Validation',
  ],
  image: foodkingImg,
  liveLink: 'https://pritishdighore26.github.io/FoodKing_OnlineFoodOrderingSystem/',
  githubLink: 'https://github.com/PritishDighore26/FoodKing_OnlineFoodOrderingSystem',
  problemStatement: 'Develop a dynamic food ordering website that allows users to browse menu items, add products to cart, and manage orders.',
  details: 'FoodKing is a frontend-based food ordering system developed using HTML, CSS, and JavaScript. The application allows users to browse food items dynamically loaded from a JSON file, add items to cart, update quantities, and remove products. Cart data is stored using browser LocalStorage to maintain persistence across page reloads. The system includes user authentication pages, form validation, responsive UI design, and dynamic DOM manipulation for real-time cart updates.'
}
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
                <img 
                src={project.image} 
                alt={project.title} 
                className="project-img"
              />
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
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link live-link"
                  >
                    <FiExternalLink className="link-icon" />
                    <span>Live Demo</span>
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link github-link"
                  >
                    <FiGithub className="link-icon" />
                    <span>GitHub</span>
                  </a>
                )}
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

  {selectedProject.liveLink && (
    <a
      href={selectedProject.liveLink}
      target="_blank"
      rel="noopener noreferrer"
      className="modal-link live-link"
    >
      <FiExternalLink />
      Live Demo
    </a>
  )}

  {selectedProject.githubLink && (
    <a
      href={selectedProject.githubLink}
      target="_blank"
      rel="noopener noreferrer"
      className="modal-link github-link"
    >
      <FiGithub />
      GitHub
    </a>
  )}

</div>

            </div>
          </div>
        </div>
      )}
    </section>
  )
}