import React from 'react'
import '../pages/Experience.css'

import { FiCode } from "react-icons/fi";


export default function Experience() {

  const experiences = [
    {
      icon: <FiCode />,
      year: 'Nov 2025 - May 2026',
      role: 'Trainee Software Engineer',
      company: 'SETTribe IT Solutions, Pune',
      description: [
      'Worked as a Full Stack Developer Trainee using React.js, Spring Boot, and DBeaver for web application development',
      'Developed responsive frontend features and reusable UI components using React.js to improve user experience.',
      'Created dynamic forms with validation and integrated them with backend REST APIs for seamless data handling.',
      'Built and enhanced dashboard functionalities, including data display, user interactions, and component-based UI improvements.',
      'Developed backend modules using Spring Boot, implementing business logic and CRUD operations.',
      'Used DBeaver for database management, query execution, data handling, and backend database integration support.',
      'Collaborated in a remote team environment using GitHub for version control, feature branching, issue tracking, and code management.',
      'Debugged frontend-backend integration issues and resolved code conflicts to ensure smooth application performance.',
      'Maintained a clean, modular project structure following good coding practices for scalability and maintainability.',
      'Successfully delivered assigned tasks within deadlines while coordinating with the development team.'
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