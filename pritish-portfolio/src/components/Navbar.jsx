import React, { useState, useEffect } from 'react'
import '../components/Navbar.css'
import logo from '../assets/logo.png'

import {
  FiMoon,
  FiSun,
  FiHome,
  FiUser,
  FiBriefcase,
  FiFolder,
  FiCpu,
  FiBook,
  FiMail,
  FiMoreHorizontal,
} from 'react-icons/fi'

export default function Navbar() {
  const [activeNav, setActiveNav] = useState('Home')
  const [showMore, setShowMore] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900)
  const [dark, setDark] = useState(false)

  /* ================= THEME ================= */
  useEffect(() => {
    document.body.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'dark') setDark(true)
  }, [])

  /* ================= RESPONSIVE ================= */
  useEffect(() => {
    const resize = () => setIsMobile(window.innerWidth < 900)
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [])

  /* ================= NAV ITEMS ================= */
  const navItems = [
    { label: 'Home', id: 'home',icon: <FiHome /> },
    { label: 'Experience',id:'experience', icon: <FiBriefcase /> },
    { label: 'Projects',id:"projects", icon: <FiFolder /> },
    { label: 'Skills', icon: <FiCpu /> },
    { label: 'Education', icon: <FiBook /> },
    { label: 'Contact', icon: <FiMail /> },
  ]

  const visibleItems = isMobile ? navItems.slice(0, 3) : navItems
  const hiddenItems = navItems.slice(3)

  const scrollToSection = (id, label) => {
  const section = document.getElementById(id)

  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  setActiveNav(label)
}

  return (
    <nav className="navbar">
      <link
        href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Fugaz+One&family=Roboto+Condensed:wght@400;700&display=swap"
        rel="stylesheet"
      />

      <div className="nav-pill">
        {/* BRAND */}
        <div className="brand">
          <img src={logo} alt="logo" className="brand-logo" />
        </div>

        {/* NAV ITEMS */}
        <div className="nav-items">
          {visibleItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.id, item.label)}
              className={`pill-item ${
                activeNav === item.label ? 'active' : ''
              }`}
            >
              <span className="icon">{item.icon}</span>
              <span className="label">{item.label}</span>
            </button>
          ))}

          {/* THEME TOGGLE */}
          <button
            className="theme-toggle"
            onClick={() => setDark(!dark)}
          >
            {dark ? <FiSun /> : <FiMoon />}
          </button>

          {/* MOBILE MORE */}
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
                        scrollToSection(item.id, item.label)
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
