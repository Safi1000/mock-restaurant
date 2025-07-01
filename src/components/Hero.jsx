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
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="hero-left">
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
            </div>
          </div>

          <div className="hero-right">
            <motion.div 
              className="hero-stats-mui"
              variants={itemVariants}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ 
                    scale: 1.05,
                    y: -8,
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card
                    elevation={12}
                    sx={{
                      minWidth: 280,
                      maxWidth: 320,
                      background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.85))',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      borderRadius: 4,
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.98), rgba(255, 255, 255, 0.92))',
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                        transform: 'translateY(-4px)',
                      }
                    }}
                  >
                    <CardContent sx={{ padding: 3 }}>
                      <Box display="flex" alignItems="center" gap={2} mb={2}>
                        <Box
                          sx={{
                            background: `linear-gradient(135deg, ${stat.color}, ${stat.color}99)`,
                            borderRadius: '50%',
                            padding: 1.5,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: `0 8px 16px ${stat.color}33`
                          }}
                        >
                          <stat.icon 
                            sx={{ 
                              color: 'white', 
                              fontSize: 28,
                              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                            }} 
                          />
                        </Box>
                        <Chip 
                          label={stat.chipLabel}
                          size="small"
                          sx={{
                            backgroundColor: `${stat.color}20`,
                            color: stat.color,
                            fontWeight: 600,
                            fontSize: '0.75rem'
                          }}
                        />
                      </Box>
                      
                      <Typography 
                        variant="h4" 
                        component="div"
                        sx={{
                          fontWeight: 800,
                          color: '#2c3e50',
                          marginBottom: 0.5,
                          fontSize: '1.8rem',
                          letterSpacing: '0.5px'
                        }}
                      >
                        {stat.value}
                      </Typography>
                      
                      <Typography 
                        variant="body1" 
                        sx={{
                          color: '#7f8c8d',
                          fontWeight: 500,
                          fontSize: '0.95rem',
                          textTransform: 'uppercase',
                          letterSpacing: '1px'
                        }}
                      >
                        {stat.label}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 