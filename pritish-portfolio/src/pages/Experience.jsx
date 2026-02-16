import React from 'react'
import '../pages/Experience.css'

import { FiCode } from "react-icons/fi";


export default function Experience() {

  /* 
    Fresher-friendly timeline
    Projects > fake company experience
  */
  const experiences = [
    {
      icon: <FiCode />,
      year: 'July 2025 - Present',
      role: 'Full Stack Java Developer Trainee',
      company: 'SEED Infotech Ltd',
      description: [
      'Completed industry-oriented Full Stack Java training covering Core Java, OOPs, JDBC, Servlets, Spring Boot, Hibernate, REST APIs, MySQL, HTML, CSS, JavaScript, ReactJS, and Angular.',
      'Developed end-to-end full-stack applications from scratch, including database design, backend development, and frontend integration.',
      'Implemented backend services using Spring Boot with layered architecture (Controllerâ€“Serviceâ€“Repository pattern).',
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