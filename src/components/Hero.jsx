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
                    elevation={0}
                    sx={{
                      minWidth: 280,
                      maxWidth: 320,
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
                      backdropFilter: 'blur(25px)',
                      border: '1px solid rgba(212, 175, 55, 0.3)',
                      borderRadius: '20px',
                      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                      position: 'relative',
                      overflow: 'hidden',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: '-100%',
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.2), transparent)',
                        transition: 'left 0.6s ease',
                        zIndex: 1,
                      },
                      '&:hover': {
                        background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.15), rgba(212, 175, 55, 0.08))',
                        boxShadow: '0 25px 50px rgba(212, 175, 55, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                        transform: 'translateY(-10px)',
                        borderColor: 'rgba(212, 175, 55, 0.6)',
                        '&::before': {
                          left: '100%',
                        }
                      }
                    }}
                  >
                    <CardContent sx={{ padding: '2rem', position: 'relative', zIndex: 2 }}>
                      <Box display="flex" alignItems="center" gap={1.5} mb={2}>
                        <Box
                          sx={{
                            color: stat.color,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.3s ease',
                            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
                            '&:hover': {
                              transform: 'scale(1.1) rotate(5deg)',
                              filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.4))',
                            }
                          }}
                        >
                          <stat.icon 
                            sx={{ 
                              fontSize: 28,
                              color: stat.color,
                            }} 
                          />
                        </Box>
                        <Typography 
                          variant="caption"
                          sx={{
                            color: 'rgba(255, 248, 220, 0.8)',
                            fontWeight: 600,
                            fontSize: '0.75rem',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'
                          }}
                        >
                          {stat.chipLabel}
                        </Typography>
                      </Box>
                      
                      <Typography 
                        variant="h4" 
                        component="div"
                        sx={{
                          fontWeight: 700,
                          color: 'var(--primary-gold)',
                          marginBottom: 0.5,
                          fontSize: '1.6rem',
                          letterSpacing: '0.5px',
                          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'scale(1.05)',
                            color: '#FFD700',
                          }
                        }}
                      >
                        {stat.value}
                      </Typography>
                      
                      <Typography 
                        variant="body2" 
                        sx={{
                          color: 'var(--light-cream)',
                          fontWeight: 500,
                          fontSize: '0.9rem',
                          textTransform: 'uppercase',
                          letterSpacing: '1px',
                          opacity: 0.9,
                          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.6)'
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