import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Heart, Camera, Award } from 'lucide-react'
import './Gallery.css'

const Gallery = () => {
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
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Elegant dining room ambiance',
      category: 'Interior',
      size: 'large'
    },
    {
      src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Gourmet dish presentation',
      category: 'Cuisine',
      size: 'medium'
    },
    {
      src: 'https://images.unsplash.com/photo-1552566090-a4e16ed0529a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Wine cellar collection',
      category: 'Wine',
      size: 'tall'
    },
    {
      src: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Chef crafting signature dish',
      category: 'Kitchen',
      size: 'medium'
    },
    {
      src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Romantic dinner setting',
      category: 'Dining',
      size: 'large'
    },
    {
      src: 'https://images.unsplash.com/photo-1564759224907-65b45b7c4ab8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Fresh ingredients selection',
      category: 'Ingredients',
      size: 'medium'
    },
    {
      src: 'https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Private dining room',
      category: 'Interior',
      size: 'tall'
    },
    {
      src: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Dessert masterpiece',
      category: 'Cuisine',
      size: 'medium'
    }
  ]

  const stats = [
    { icon: Camera, label: 'Photo Gallery', value: '100+' },
    { icon: Award, label: 'Awards Won', value: '15+' },
    { icon: Heart, label: 'Happy Moments', value: '10K+' }
  ]

  return (
    <section id="gallery" className="gallery" ref={ref}>
      <div className="container">
        <motion.div 
          className="gallery-header"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-subtitle">Visual Journey</span>
          <h2 className="section-title">Experience Bella Vista</h2>
          <p className="gallery-intro">
            Take a glimpse into our world of culinary artistry and elegant ambiance. 
            Every corner tells a story of passion, craftsmanship, and unforgettable experiences.
          </p>

          <motion.div 
            className="gallery-stats"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="gallery-stat-item"
                whileHover={{ scale: 1.05, y: -5 }}
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
        </motion.div>

        <motion.div 
          className="gallery-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className={`gallery-item gallery-item-${image.size}`}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                zIndex: 10,
                boxShadow: "0 25px 50px rgba(212, 175, 55, 0.3)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="gallery-image-container">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  loading="lazy"
                  decoding="async"
                />
                <motion.div 
                  className="gallery-overlay"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="overlay-content">
                    <span className="gallery-category">{image.category}</span>
                    <h4 className="gallery-title">{image.alt}</h4>
                    <motion.button
                      className="view-button"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      View Full
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="gallery-footer"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="gallery-footer-content">
            <div className="footer-text">
              <h3>Create Your Own Memories</h3>
              <p>
                Every visit to Bella Vista is a new chapter in your culinary journey. 
                Come and create your own memorable moments with us.
              </p>
            </div>
            <motion.a 
              href="#contact" 
              className="gallery-cta-button"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 15px 30px rgba(212, 175, 55, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Plan Your Visit
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Gallery 