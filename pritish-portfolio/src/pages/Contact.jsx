import React, { useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser'


export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

const handleSubmit = (e) => {
  e.preventDefault();
  emailjs
    .send(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      formData,
      import.meta.env.VITE_PUBLIC_KEY
    )
    .then(
      (result) => {
        console.log('Email sent successfully!', result.text)
        setSubmitted(true)

        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        })

        setTimeout(() => {
          setSubmitted(false)
        }, 2000)
      },
      (error) => {
        console.error('Email sending failed:', error)
      }
    );
};



  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        {/* SECTION HEADER */}
        <div className="contact-header">
          <h2 className="section-title">Get In Touch</h2>
        </div>

        {/* CONTACT FORM */}
        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            {/* NAME INPUT */}
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="form-input"
                required
              />
            </div>

            {/* EMAIL INPUT */}
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="form-input"
                required
              />
            </div>

            {/* SUBJECT INPUT */}
            <div className="form-group">
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                className="form-input"
                required
              />
            </div>

            {/* MESSAGE INPUT */}
            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message here..."
                className="form-textarea"
                rows="5"
                required
              ></textarea>
            </div>

            {/* SUBMIT BUTTON */}
            <button type="submit" className="submit-btn">
              {submitted ? 'Message Sent! âœ“' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}