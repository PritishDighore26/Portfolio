import React from 'react'
import '../styles/Home.css'
import profileImage from '../assets/profile.jpeg' // Add your profile image

import {
  FiArrowRight,
  FiDownload,
  FiExternalLink,
} from 'react-icons/fi'

export default function Home() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="home">
      <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Fugaz+One&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>

      <div className="home-container">
        
        {/* LEFT CONTENT */}
        <div className="home-content">

          {/* HEADLINE */}
          <div className="home-headline">
            <p className="headline-prefix">I'm</p>
            <h1 className="headline-name">Pritish Dighore</h1>
            <h2 className="headline-title">Full Stack Developer</h2>
          </div>

          {/* DESCRIPTION */}
          <p className="home-description">
            Crafting beautiful, functional digital experiences with modern web technologies. 
            Specializing in React, Node.js, and creating scalable applications that users love.
          </p>

          {/* CTA BUTTONS */}
          <div className="home-cta">
            <button className="cta-primary" onClick={() => scrollToSection('projects')}>
              <span>View My Work</span>
              <FiArrowRight className="cta-icon" />
            </button>
            <button className="cta-secondary">
              <FiDownload className="cta-icon" />
              <span>Download CV</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
