import React from 'react'
import '../pages/Home.css'

import {
  FiArrowRight,
  FiDownload,
} from 'react-icons/fi'


export default function Home() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id= "home" className="home">
      <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Fugaz+One&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>

      <div className="home-container">
        
        {/* RIGHT CONTENT */}
        <div className="home-content">

          {/* HEADLINE */}
          <div className="home-headline">
            <p className="headline-prefix">I'm</p>
            <h1 className="headline-name">Pritish Dighore</h1>
            <h2 className="headline-title">Full Stack Developer</h2>
          </div>

          {/* DESCRIPTION */}
          <p className="home-description">
            Iâ€™m a passionate Full Stack Developer focused on building clean, scalable, and user-friendly web applications.

I work with Java, Spring Boot, React, MySQL, and modern web technologies to develop end-to-end solutions that solve real-world problems.

I enjoy turning ideas into functional products, optimizing performance, and writing maintainable code.

Currently, Iâ€™m strengthening my skills through hands-on projects and looking for opportunities where I can contribute, learn fast, and grow as a developer.

          </p>
          {/* CTA BUTTONS */}
          <div className="home-cta">
            <button className="cta-primary" onClick={() => scrollToSection('projects')}>
              <span>View My Work</span>
              <FiArrowRight className="cta-icon" />
            </button>
            <a href="Pritish_Dighore_SoftwareEngineer.pdf" download className="cta-secondary">
              <FiDownload className="cta-icon" />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}