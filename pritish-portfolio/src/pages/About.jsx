import React from 'react'
import '../pages/About.css'

import {
  FiCode,
  FiDatabase,
  FiLayout,
  FiTrendingUp,
  FiUsers,
  FiAward,
} from 'react-icons/fi'

export default function About() {
  const skills = [
    {
      icon: <FiLayout />,
      title: 'Frontend Development',
      description: 'React, Next.js, Tailwind CSS, Responsive Design',
    },
    {
      icon: <FiDatabase />,
      title: 'Backend Development',
      description: 'Node.js, Express, MongoDB, PostgreSQL, REST APIs',
    },
    {
      icon: <FiCode />,
      title: 'Full Stack',
      description: 'End-to-end web applications, Deployment, DevOps',
    },
    {
      icon: <FiTrendingUp />,
      title: 'Performance',
      description: 'Optimization, Caching, SEO, Web Vitals',
    },
    {
      icon: <FiUsers />,
      title: 'Collaboration',
      description: 'Team leadership, Code review, Mentoring',
    },
    {
      icon: <FiAward />,
      title: 'Problem Solving',
      description: 'Algorithms, System Design, Technical Architecture',
    },
  ]

  const experiences = [
    {
      year: '2023 - Present',
      role: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc',
      description: 'Leading a team of developers building scalable web applications using React and Node.js.',
    },
    {
      year: '2021 - 2023',
      role: 'Full Stack Developer',
      company: 'Digital Solutions Ltd',
      description: 'Developed and maintained multiple client-facing web applications with modern tech stack.',
    },
    {
      year: '2020 - 2021',
      role: 'Junior Developer',
      company: 'StartUp Hub',
      description: 'Started career building web applications and learning full-stack development principles.',
    },
  ]

  return (
    <section id="about" className="about">
      <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Fugaz+One&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>

      <div className="about-container">
        
        {/* SECTION HEADER */}
        <div className="about-header">
          <h2 className="section-title">About Me</h2>
        </div>

        {/* ABOUT INTRO */}
        <div className="about-intro">
          <div className="intro-content">
            <h3 className="intro-title">Who I Am</h3>
            <p className="intro-text">
              I'm a passionate full-stack developer with 5+ years of experience building beautiful, 
              functional web applications. I love solving complex problems and creating seamless user 
              experiences. My journey in tech has been driven by curiosity and a commitment to continuous learning.
            </p>
            <p className="intro-text">
              When I'm not coding, you'll find me exploring new technologies, contributing to open source, 
              or sharing knowledge with the developer community. I believe in writing clean, maintainable code 
              and collaborating effectively with teams.
            </p>
          </div>
        </div>

        {/* SKILLS SECTION */}
        <div className="about-skills">
          <h3 className="skills-title">My Skills & Expertise</h3>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-icon">{skill.icon}</div>
                <h4 className="skill-title">{skill.title}</h4>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* EXPERIENCE SECTION */}
        <div className="about-experience">
          <h3 className="experience-title">Professional Experience</h3>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <span className="timeline-year">{exp.year}</span>
                  <h4 className="timeline-role">{exp.role}</h4>
                  <p className="timeline-company">{exp.company}</p>
                  <p className="timeline-description">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="about-cta">
          <h3 className="cta-title">Let's Work Together</h3>
          <p className="cta-subtitle">
            Interested in collaborating? I'd love to hear about your project.
          </p>
          <button className="cta-button">
            Get In Touch
          </button>
        </div>

      </div>
    </section>
  )
}
