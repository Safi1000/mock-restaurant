import React from 'react'
import { Star, Quote } from 'lucide-react'
import './Testimonials.css'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Food Critic',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'Bella Vista delivers an extraordinary culinary journey. Every dish is a masterpiece, and the service is impeccable. This is fine dining at its absolute best.',
      location: 'New York'
    },
    {
      name: 'Michael Chen',
      role: 'Business Executive',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'I\'ve dined at restaurants worldwide, but Bella Vista stands out. The atmosphere is perfect for business dinners, and the food quality is consistently outstanding.',
      location: 'San Francisco'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Wedding Planner',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'Bella Vista made our anniversary celebration magical. The attention to detail, the exquisite presentation, and the romantic ambiance exceeded all expectations.',
      location: 'Los Angeles'
    }
  ]

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={index < rating ? 'star-filled' : 'star-empty'}
      />
    ))
  }

  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials-header fade-in-up">
          <span className="section-subtitle">Guest Experiences</span>
          <h2 className="section-title">What Our Guests Say</h2>
          <p className="testimonials-intro">
            Don't just take our word for it. Here's what our valued guests have to say 
            about their dining experiences at Bella Vista.
          </p>
        </div>

        <div className="testimonials-grid fade-in-up">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-header">
                <Quote className="quote-icon" />
                <div className="rating">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
              
              <p className="testimonial-text">"{testimonial.text}"</p>
              
              <div className="testimonial-footer">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="testimonial-avatar"
                />
                <div className="testimonial-info">
                  <h4 className="testimonial-name">{testimonial.name}</h4>
                  <span className="testimonial-role">{testimonial.role}</span>
                  <span className="testimonial-location">{testimonial.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials-stats fade-in-up">
          <div className="stat">
            <span className="stat-number">4.9</span>
            <span className="stat-label">Average Rating</span>
          </div>
          <div className="stat">
            <span className="stat-number">2,500+</span>
            <span className="stat-label">Five-Star Reviews</span>
          </div>
          <div className="stat">
            <span className="stat-number">98%</span>
            <span className="stat-label">Recommend Us</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials 