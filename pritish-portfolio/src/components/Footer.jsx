import React from 'react'
import '../styles/Footer.css'
import logo from '../assets/logo6.png'

import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiTwitter,
} from 'react-icons/fi'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Fugaz+One&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>

      <div className="footer-content">
        
        {/* LEFT SECTION: BRAND */}
        <div className="footer-brand">
          <div className="footer-logo-wrapper">
            <img src={logo} alt="logo" className="footer-logo" />
            <div>
              <h3 className="footer-brand-name">Pritish Dighore</h3>
              <p className="footer-tagline">Full Stack Developer & Problem Solver</p>
            </div>
          </div>
        </div>

        {/* MIDDLE SECTION: CREDIT */}
        <div className="footer-middle">
          <p className="footer-credit">
            Built with <span className="heart">❤️</span> using <span className="tech-highlight">ReactJs</span>
          </p>
        </div>
        <p className="footer-copyright">
            © {currentYear} <span className="brand-highlight">Pritish Dighore</span>. All rights reserved.
        </p>
      </div>
    </footer>
  )
}