import React, { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Calendar, Users } from 'lucide-react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, you would send this data to your backend
    alert('Thank you for your reservation request! We will contact you shortly to confirm.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '2',
      message: ''
    })
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Culinary Street', 'Downtown District', 'New York, NY 10001']
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+1 (555) 123-4567', 'Reservations Hotline']
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['reservations@bellavista.com', 'info@bellavista.com']
    },
    {
      icon: Clock,
      title: 'Opening Hours',
      details: ['Mon-Thu: 5:00 PM - 10:00 PM', 'Fri-Sat: 5:00 PM - 11:00 PM', 'Sun: 5:00 PM - 9:00 PM']
    }
  ]

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-header fade-in-up">
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title">Make a Reservation</h2>
          <p className="contact-intro">
            Ready to embark on a culinary journey? Reserve your table at Bella Vista 
            and let us create an unforgettable dining experience for you.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info fade-in-left">
            <div className="info-grid">
              {contactInfo.map((info, index) => (
                <div key={index} className="info-item">
                  <info.icon className="info-icon" />
                  <div className="info-details">
                    <h4 className="info-title">{info.title}</h4>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="info-text">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="map-placeholder">
              <img 
                src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Restaurant location map"
                className="map-image"
              />
              <div className="map-overlay">
                <MapPin className="map-pin" />
                <span>Bella Vista Location</span>
              </div>
            </div>
          </div>

          <div className="reservation-form fade-in-right">
            <form onSubmit={handleSubmit} className="form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                    aria-describedby="name-help"
                    autoComplete="name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your@email.com"
                    aria-describedby="email-help"
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="guests">Number of Guests *</label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    required
                  >
                    {[1,2,3,4,5,6,7,8].map(num => (
                      <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
                    ))}
                    <option value="9+">9+ Guests</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="date">Preferred Date *</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="time">Preferred Time *</label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select time</option>
                    <option value="17:00">5:00 PM</option>
                    <option value="17:30">5:30 PM</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="18:30">6:30 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="19:30">7:30 PM</option>
                    <option value="20:00">8:00 PM</option>
                    <option value="20:30">8:30 PM</option>
                    <option value="21:00">9:00 PM</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Special Requests</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  placeholder="Any special dietary requirements, allergies, or special occasions..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary form-submit">
                <Calendar size={20} />
                Reserve Table
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 