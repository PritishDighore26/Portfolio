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
      role: 'Full Stack Java Developer Trainee + Intern',
      company: 'SEED Infotech Ltd',
      description:
        'Built CRUD apps, task management systems, Java Swing tools, and improved problem-solving and system design skills.',
    }
    
    
  ]

  return (
    <section id="experience" className="about-experience">

      <h3 className="experience-title">Experience & Training</h3>

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
              <p className="timeline-description">{exp.description}</p>
            </div>

          </div>
        ))}

      </div>
      

    </section>
  )
}
