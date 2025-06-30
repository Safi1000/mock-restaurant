import React from 'react'
import { Star, Award, Users } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Hero.css'

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  const stats = [
    { icon: Star, label: "Award Winning", value: "2024" },
    { icon: Award, label: "Michelin Guide", value: "Featured" },
    { icon: Users, label: "Happy Guests", value: "10K+" }
  ]

  return (
    <section id="hero" className="hero" ref={ref}>
      <div className="hero-background">
        <img 
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Elegant restaurant interior"
          className="hero-bg-image"
        />
      </div>
      <div className="hero-overlay"></div>
      
      <div className="container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="hero-text">
            <motion.span 
              className="hero-subtitle"
              variants={itemVariants}
            >
              Fine Dining Experience
            </motion.span>
            
            <motion.h1 
              className="hero-title"
              variants={itemVariants}
            >
              Bella Vista
            </motion.h1>
            
            <motion.p 
              className="hero-description"
              variants={itemVariants}
            >
              Experience culinary excellence in an atmosphere of timeless elegance. 
              Where every dish tells a story and every moment becomes a cherished memory.
            </motion.p>

            <motion.div 
              className="hero-stats"
              variants={itemVariants}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="stat-item"
                  whileHover={{ 
                    scale: 1.08,
                    y: -10,
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <stat.icon className="stat-icon" />
                  <div className="stat-content">
                    <span className="stat-value">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div 
            className="hero-actions"
            variants={itemVariants}
          >
            <motion.a 
              href="#contact" 
              className="btn btn-primary"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(212, 175, 55, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Reserve Table
            </motion.a>
            <motion.a 
              href="#menu" 
              className="btn btn-secondary"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(255, 255, 255, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              View Menu
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 