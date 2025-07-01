import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Card, 
  CardContent, 
  Typography, 
  Box,
  Chip
} from '@mui/material'
import { 
  Star as StarIcon,
  EmojiEvents as TrophyIcon,
  People as PeopleIcon 
} from '@mui/icons-material'
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
    { 
      icon: StarIcon, 
      label: "Award Winning", 
      value: "2024",
      color: "#FFD700",
      chipLabel: "Excellence"
    },
    { 
      icon: TrophyIcon, 
      label: "Michelin Guide", 
      value: "Featured",
      color: "#FF6B35",
      chipLabel: "Premium"
    },
    { 
      icon: PeopleIcon, 
      label: "Happy Guests", 
      value: "10K+",
      color: "#4CAF50",
      chipLabel: "Trusted"
    }
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
          className="hero-content hero-compact-centered"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.span className="hero-subtitle" variants={itemVariants}>
            Fine Dining Experience
          </motion.span>
          <motion.h1 className="hero-title" variants={itemVariants}>
            Bella Vista
          </motion.h1>
          <motion.p className="hero-description" variants={itemVariants}>
            Experience <span className="desc-highlight">culinary excellence</span> in an atmosphere of <span className="desc-highlight">timeless elegance</span>.<br/>
            Where every dish tells a story and every moment becomes a <span className="desc-highlight">cherished memory</span>.
          </motion.p>
          <motion.a 
            href="#contact" 
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Book Your Experience
          </motion.a>
          <div className="hero-stats-row-simple">
            {stats.map((stat, index) => (
              <div className="hero-stat-simple" key={index}>
                <div className="stat-bar"></div>
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 