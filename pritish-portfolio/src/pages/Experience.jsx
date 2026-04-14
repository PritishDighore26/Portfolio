import React from 'react'
import '../pages/Experience.css'

import { FiCode } from "react-icons/fi";


export default function Experience() {

  const experiences = [
    {
      icon: <FiCode />,
      year: 'Nov 2025 - Present',
      role: 'Full Stack Java Developer Intern',
      company: 'SETTribe IT Solutions, Pune',
      description: [
      'Engineered a Java-based Tender Management System using Spring Boot and MySQL, optimizing CRUD operations and reducing manual workflow effort by 30%',
      'Developed and maintained backend services using Spring Boot, ensuring scalable and efficient application performance.',
      'Built and integrated RESTful APIs using Spring Boot (MVC architecture) for real-time data processing and seamless frontend–backend communication',
      'Designed and developed responsive UI components using React.js, improving user experience and application interactivity.',
      'Architected an Admin Dashboard for Sumruddha Sala E-Portal with dynamic stage-based status tracking for enhanced process visibility',
      'Performed bug fixing, testing, and performance optimization to enhance system reliability and efficiency',
      'Collaborated using Git/GitHub and actively participated in Agile development practices (daily stand-ups)'
    ]
  },
    {
      icon: <FiCode />,
      year: 'July 2025 - Feb 2026',
      role: 'Full Stack Java Developer Trainee',
      company: 'SEED Infotech Ltd, Pune',
      description: [
      'Completed industry-oriented Full Stack Java training covering Core Java, OOPs, JDBC, Servlets, Spring Boot, Hibernate, REST APIs, MySQL, HTML, CSS, JavaScript, ReactJS, and Angular.',
      'Developed end-to-end full-stack applications from scratch, including database design, backend development, and frontend integration.',
      'Implemented backend services using Spring Boot with layered architecture (Controller-Service-Repository pattern).',
      'Followed SDLC and Agile practices used Git for version control and team collaboration.'
    ]
  }
  
  ]

  return (
    <section id="experience" className="my-experience">

      <h4 className="experience-title">Experience & Training</h4>

      <div className="timeline">

        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">

            <div className="timeline-marker">
              {exp.icon}
            </div>

            <div className="timeline-content">
              <span className="timeline-year">{exp.year}</span>
              <h4 className="timeline-role">{exp.role}</h4>
              <p className="timeline-company">{exp.company}</p>
              <ul className="timeline-description">
  {exp.description.map((point, i) => (
    <li key={i}>{point}</li>
  ))}
</ul>

            </div>

          </div>
        ))}

      </div>
      

    </section>
  )
}