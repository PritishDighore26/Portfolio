import React, { useState, useEffect } from 'react'
import '../styles/Navbar.css'
import logo from '../assets/logo2.png'

import {
  FiHome, FiUser, FiBriefcase, FiFolder,
  FiCpu, FiBook, FiMail, FiMoreHorizontal
} from 'react-icons/fi'

export default function Navbar() {
  const [activeNav, setActiveNav] = useState('Home')
  const [showMore, setShowMore] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900)

  useEffect(() => {
    const resize = () => setIsMobile(window.innerWidth < 900)
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [])

  const navItems = [
    { label: 'Home', icon: <FiHome /> },
    { label: 'About', icon: <FiUser /> },
    { label: 'Experience', icon: <FiBriefcase /> },
    { label: 'Projects', icon: <FiFolder /> },
    { label: 'Skills', icon: <FiCpu /> },
    { label: 'Education', icon: <FiBook /> },
    { label: 'Contact', icon: <FiMail /> },
  ]

  const visibleItems = isMobile ? navItems.slice(0, 3) : navItems
  const hiddenItems = navItems.slice(3)

  return (
    <nav className="navbar">
<link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Fugaz+One&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>

      {/* ONE capsule only */}
      <div className="nav-pill">

        {/* ===== LEFT BRAND INSIDE PILL ===== */}
        <div className="brand">
          <img src={logo} alt="logo" className="brand-logo" />
          <span className="brand-name"><b>Pritish Dighore</b></span>
        </div>

        {/* ===== RIGHT NAV ITEMS ===== */}
        <div className="nav-items">

          {visibleItems.map((item) => (
            <button
              key={item.label}
              onClick={() => setActiveNav(item.label)}
              className={`pill-item ${activeNav === item.label ? 'active' : ''}`}
            >
              <span className="icon">{item.icon}</span>
              <span className="label">{item.label}</span>
            </button>
          ))}

          {isMobile && (
            <div className="more-wrapper">
              <button
                className="pill-item"
                onClick={() => setShowMore(!showMore)}
              >
                <FiMoreHorizontal />
                <span className="label">More</span>
              </button>

              {showMore && (
                <div className="more-menu">
                  {hiddenItems.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => {
                        setActiveNav(item.label)
                        setShowMore(false)
                      }}
                      className="dropdown-item"
                    >
                      {item.icon}
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

        </div>
      </div>
    </nav>
  )
}
