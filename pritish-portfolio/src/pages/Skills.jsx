import React from 'react'
import './Skills.css'
import { VscVscode } from "react-icons/vsc";
import { FaAngular,FaJava } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";


import {
  SiAngular,
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPostman,
  SiHibernate,
  SiEclipseide,
  SiOracle
} from "react-icons/si"


export default function Skills() {

  const skillsData = [
  {
    id: 1,
    category: 'Frontend',
    description: 'User interface & client-side technologies',
    skills: [
      { name: 'HTML5', icon: <SiHtml5 /> },
      { name: 'CSS3', icon: <SiCss3 /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'React', icon: <SiReact /> },
      { name: 'Angular', icon: <SiAngular /> },
      { name: 'Angular Material', icon: <FaAngular /> },
    ],
  },
  {
    id: 2,
    category: 'Backend',
    description: 'Server-side logic & API development',
    skills: [
      { name: 'Java', icon: <FaJava /> },
      { name: 'Hibernate', icon: <SiHibernate /> },
      { name: 'Spring', icon: <BiLogoSpringBoot /> },
      { name: 'Spring Boot', icon: <BiLogoSpringBoot /> },
      { name: 'REST APIs', icon: <BiLogoSpringBoot /> },
    ],
  },
  {
    id: 3,
    category: 'Databases',
    description: 'Data storage & management systems',
    skills: [
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'Oracle', icon: <SiOracle /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
    ],
  },
  {
    id: 4,
    category: 'Development Tools',
    description: 'Tools & collaboration platforms',
    skills: [
      { name: 'Git', icon: <SiGit /> },
      { name: 'GitHub', icon: <SiGithub /> },
      { name: 'Postman', icon: <SiPostman /> },
      { name: 'Eclipse IDE', icon: <SiEclipseide /> },
      { name: 'VS Code', icon: <VscVscode /> },
    ],
  },
]


  return (
    <section id="skills" className="skills">
      <div className="skills-container">

        <div className="skills-header">
          <h2 className="section-title">My Skills</h2>
        </div>

        <div className="skills-categories">
          {skillsData.map((category) => (
            <div key={category.id} className="skill-category">

              <div className="category-header">
                <h3 className="category-name">{category.category}</h3>
                <p className="category-description">
                  {category.description}
                </p>
              </div>

              <div className="skills-list">
                {category.skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-icon">
                      {skill.icon}
                    </div>
                    <span className="skill-name">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}


















