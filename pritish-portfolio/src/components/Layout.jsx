import React from 'react'
import '../components/Layout.css'
import profileImage from '../assets/profile.jpeg'

import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
} from 'react-icons/fi'

export default function Layout({ children }) {
  return (
    <div className="layout-wrapper">
      {/* FIXED SIDEBAR CARD */}
      <aside className="sidebar-card">
        <div className="card-image-wrapper">
          <img src={profileImage} alt="Pritish Dighore" className="card-image" />
        </div>

        <h2 className="card-name">Pritish Dighore</h2>

        <p className="card-description">
          Engineer by code. Problem solver by mindset.
        </p>

        {/* SOCIAL LINKS */}
        <div className="card-socials">
          <a href="https://github.com/PritishDighore26" className="social-icon-btn" title="GitHub">
            <FiGithub />
          </a>
          <a href="https://x.com/PritishDighore" className="social-icon-btn" title="Twitter">
            <FiTwitter />
          </a>
          <a href="https://www.instagram.com/pritishdighore26/" className="social-icon-btn" title="Instagram">
            <FiInstagram />
          </a>
          <a href="https://www.linkedin.com/in/pritish-dighore-385066245/" className="social-icon-btn" title="LinkedIn">
            <FiLinkedin />
          </a>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="main-content">
        {children}
      </main>
    </div>
  )
}
