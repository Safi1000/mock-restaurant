import React, { useState } from 'react'
import { MapPin, Phone, Clock, Mail, Star, Send } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Contact.css'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    occasion: '',
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Culinary Street", "Downtown NYC, NY 10001"],
      accent: "Find us in the heart of the city"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["(555) 123-4567", "(555) 123-4568"],
      accent: "Open for reservations"
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Thu: 5:00 PM - 10:00 PM", "Fri-Sat: 5:00 PM - 11:00 PM", "Sun: 4:00 PM - 9:00 PM"],
      accent: "Dinner service daily"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["reservations@bellavista.com", "events@bellavista.com"],
      accent: "We'll respond within 24 hours"
    }
  ]

  const occasions = [
    "Date Night",
    "Anniversary",
    "Birthday",
    "Business Dinner",
    "Family Celebration",
    "Other"
  ]

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required'
    if (!formData.date) newErrors.date = 'Date is required'
    if (!formData.time) newErrors.time = 'Time is required'
    if (!formData.guests) newErrors.guests = 'Number of guests is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '',
        occasion: '',
        message: ''
      })
    }, 3000)
  }

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="container">
        <motion.div 
          className="contact-header"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-subtitle">Reserve Your Table</span>
          <h2 className="section-title">Join Us for an Unforgettable Experience</h2>
          <p className="contact-intro">
            Ready to embark on a culinary journey? Reserve your table at Bella Vista and 
            let us create an extraordinary dining experience just for you.
          </p>
        </motion.div>

        <motion.div 
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Contact Information Cards */}
          <motion.div className="contact-info-grid" variants={itemVariants}>
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="contact-info-card"
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  boxShadow: "0 20px 40px rgba(212, 175, 55, 0.2)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="contact-icon">
                  <info.icon size={24} />
                </div>
                <div className="contact-details">
                  <h3>{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx}>{detail}</p>
                  ))}
                  <span className="contact-accent">{info.accent}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Reservation Form */}
          <motion.div className="reservation-section" variants={itemVariants}>
            <div className="form-header">
              <h3>Make a Reservation</h3>
              <p>Fill out the form below and we'll confirm your reservation within 24 hours.</p>
            </div>

            <motion.form 
              className="reservation-form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={errors.name ? 'error' : ''}
                    placeholder="Your full name"
                  />
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={errors.email ? 'error' : ''}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={errors.phone ? 'error' : ''}
                    placeholder="(555) 123-4567"
                  />
                  {errors.phone && <span className="error-message">{errors.phone}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="guests">Number of Guests *</label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    className={errors.guests ? 'error' : ''}
                  >
                    <option value="">Select guests</option>
                    {[1,2,3,4,5,6,7,8].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                    <option value="9+">9+ Guests</option>
                  </select>
                  {errors.guests && <span className="error-message">{errors.guests}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="date">Preferred Date *</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className={errors.date ? 'error' : ''}
                    min={new Date().toISOString().split('T')[0]}
                  />
                  {errors.date && <span className="error-message">{errors.date}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="time">Preferred Time *</label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className={errors.time ? 'error' : ''}
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
                  {errors.time && <span className="error-message">{errors.time}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="occasion">Special Occasion</label>
                  <select
                    id="occasion"
                    name="occasion"
                    value={formData.occasion}
                    onChange={handleInputChange}
                  >
                    <option value="">Select occasion (optional)</option>
                    {occasions.map(occasion => (
                      <option key={occasion} value={occasion}>{occasion}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group form-group-full">
                  <label htmlFor="message">Special Requests</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Any dietary restrictions, seating preferences, or special requests..."
                    rows="4"
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                className="submit-button"
                disabled={isSubmitting || isSubmitted}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 15px 30px rgba(212, 175, 55, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {isSubmitting ? (
                  <motion.div
                    className="loading-spinner"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                ) : isSubmitted ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="success-icon"
                  >
                    <Star size={20} />
                  </motion.div>
                ) : (
                  <motion.div className="submit-content">
                    <Send size={20} />
                    <span>Reserve My Table</span>
                  </motion.div>
                )}
              </motion.button>

              {isSubmitted && (
                <motion.div 
                  className="success-message"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Star className="success-star" />
                  <p>Thank you! Your reservation request has been received. We'll contact you within 24 hours to confirm.</p>
                </motion.div>
              )}
            </motion.form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact 