import React from 'react'
import { ChefHat, Star, Clock } from 'lucide-react'
import './Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <img 
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
          alt="Elegant restaurant interior"
          className="hero-image"
        />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text fade-in-up">
            <span className="hero-subtitle">Welcome to</span>
            <h1 className="hero-title">Bella Vista</h1>
            <p className="hero-description">
              Experience culinary excellence in an atmosphere of timeless elegance. 
              Our master chefs craft extraordinary dishes using the finest seasonal ingredients, 
              creating unforgettable moments for every occasion.
            </p>
            
            <div className="hero-features">
              <div className="feature">
                <ChefHat className="feature-icon" />
                <span>Master Chefs</span>
              </div>
              <div className="feature">
                <Star className="feature-icon" />
                <span>5-Star Dining</span>
              </div>
              <div className="feature">
                <Clock className="feature-icon" />
                <span>Fresh Daily</span>
              </div>
            </div>
            
            <div className="hero-actions">
              <a href="#menu" className="btn btn-primary">
                View Our Menu
              </a>
              <a href="#contact" className="btn btn-secondary">
                Make Reservation
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  )
}

export default Hero 