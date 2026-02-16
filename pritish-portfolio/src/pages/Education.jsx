import React from 'react'
import './Education.css'
import { FiCalendar, FiMapPin } from 'react-icons/fi'

export default function Education() {
  const educationData = [
    {
      id: 1,
      degree: 'Bachelor of Technology',
      field: 'Computer Science & Engineering',
      institution: 'Rashtrasant Tukadoji Maharaj Nagpur University',
      location: 'Nagpur, Maharashtra',
      year: '2021 - 2025',
      cgpa: '7.51/10',
    },
    {
      id: 2,
      degree: 'Higher Secondary Education',
      field: 'Science (Physics, Chemistry, Mathematics)',
      institution: 'Neharu Junior College Tumsar',
      location: 'Tumsar, Maharashtra',
      year: '2020 - 2021',
      percentage: '78%',
    },
    {
      id: 3,
      degree: 'Secondary Education',
      field: 'General Studies',
      institution: 'Janata High School Tumsar',
      location: 'Tumsar, Maharashtra',
      year: '2018 - 2019',
      percentage: '77%',
    },
  ]

  return (
    <section id="education" className="education">
      <div className="education-container">
        {/* SECTION HEADER */}
        <div className="education-header">
          <h2 className="section-title">My Education</h2>
        </div>

        {/* EDUCATION CARDS */}
        <div className="education-cards">
          {educationData.map((edu) => (
            <div key={edu.id} className="education-card">
              {/* DEGREE & FIELD */}
              <div className="card-top">
                <h3 className="degree-title">{edu.degree}</h3>
                <p className="field-name">{edu.field}</p>
              </div>

              {/* DIVIDER */}
              <div className="card-divider"></div>

              {/* INSTITUTION */}
              <div className="card-middle">
                <p className="institution-name">{edu.institution}</p>
              </div>

              {/* DETAILS */}
              <div className="card-details">
                <div className="detail-item">
                  <FiMapPin className="detail-icon" />
                  <span className="detail-text">{edu.location}</span>
                </div>
                <div className="detail-item">
                  <FiCalendar className="detail-icon" />
                  <span className="detail-text">{edu.year}</span>
                </div>
              </div>

              {/* GPA / Percentage BADGE */}
<div className="gpa-section">
  {edu.cgpa && (
    <>
      <span className="gpa-label">CGPA</span>
      <span className="gpa-value">{edu.cgpa}</span>
    </>
  )}

  {edu.percentage && (
    <>
      <span className="gpa-label">Percentage</span>
      <span className="gpa-value">{edu.percentage}</span>
    </>
  )}
</div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}