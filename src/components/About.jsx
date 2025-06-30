import React from 'react'
import { Award, Users, Heart, Utensils } from 'lucide-react'
import './About.css'

const About = () => {
  const stats = [
    { icon: Award, number: '15+', label: 'Years Experience' },
    { icon: Users, number: '50K+', label: 'Happy Customers' },
    { icon: Heart, number: '100%', label: 'Satisfaction Rate' },
    { icon: Utensils, number: '200+', label: 'Signature Dishes' }
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text fade-in-left">
            <span className="section-subtitle">Our Story</span>
            <h2 className="section-title">Crafting Culinary Excellence Since 2008</h2>
            <p className="about-description">
              Nestled in the heart of the city, Bella Vista has been a beacon of culinary excellence 
              for over a decade. Our passion for creating extraordinary dining experiences is matched 
              only by our commitment to using the finest, locally-sourced ingredients.
            </p>
            <p className="about-description">
              Our award-winning chefs combine traditional techniques with innovative approaches, 
              creating dishes that tell a story with every bite. From intimate dinners to grand 
              celebrations, we transform every meal into an unforgettable memory.
            </p>
            
            <div className="chef-signature">
              <img 
                src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
                alt="Head Chef Marco Bellacorte"
                className="chef-photo"
              />
              <div className="chef-info">
                <h4>Marco Bellacorte</h4>
                <span>Executive Chef & Owner</span>
                <p>"Every dish is a canvas, every ingredient a brushstroke in our culinary masterpiece."</p>
              </div>
            </div>
          </div>

          <div className="about-visual fade-in-right">
            <div className="image-grid">
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Restaurant ambiance"
                className="grid-image main-image"
              />
              <img 
                src="https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                alt="Gourmet dish presentation"
                className="grid-image secondary-image"
              />
              <img 
                src="https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                alt="Chef preparing food"
                className="grid-image accent-image"
              />
            </div>
          </div>
        </div>

        <div className="stats-section fade-in-up">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <stat.icon className="stat-icon" />
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 