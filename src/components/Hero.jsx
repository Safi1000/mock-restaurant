import React from 'react'
import { Flame } from 'lucide-react'
import { motion } from 'framer-motion'
import './Hero.css'

const Hero = () => {
  return (
    <section id="hero" className="hero-new">
      <div className="hero-background-gradient"></div>

      <div className="container">
        <div className="hero-content-new">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="hero-text-section"
          >
            <h1 className="hero-title-new">
              Welcome to <span className="text-amber">Bella Vista</span>
            </h1>
            <p className="hero-description-new">
              A culinary journey through Italy. Discover exquisite flavors, elegant ambiance, and unforgettable memories.
            </p>
            <motion.a
              href="#contact"
              className="btn btn-hero-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Reserve a Table
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="hero-image-section"
          >
            <img
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Italian Dish"
              className="hero-dish-image"
            />
          </motion.div>
        </div>

        {/* Floating Flame Icon */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="floating-flame"
        >
          <Flame className="flame-icon" />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 