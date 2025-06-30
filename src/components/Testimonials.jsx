import React from 'react'
import { Star, Quote, TrendingUp, Users, Award } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Testimonials.css'

const Testimonials = () => {
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
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Food Blogger",
      location: "Manhattan, NY",
      rating: 5,
      text: "An absolutely extraordinary dining experience! The attention to detail in every dish is remarkable. Chef's tasting menu was a journey through culinary artistry that I'll never forget.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      featured: true
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Wine Enthusiast",
      location: "Brooklyn, NY",
      rating: 5,
      text: "The wine pairing was exceptional. Each course perfectly complemented by the sommelier's expert selections. Service was impeccable and the ambiance simply magical.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      featured: false
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Culinary Student",
      location: "Queens, NY",
      rating: 5,
      text: "As someone studying culinary arts, I was blown away by the technique and creativity. Every plate was a masterpiece. This is what fine dining should be!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b109?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      featured: false
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Business Executive",
      location: "Manhattan, NY",
      rating: 5,
      text: "Brought clients here for a crucial dinner meeting. The sophisticated atmosphere and exceptional service helped close the deal. Bella Vista never disappoints!",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      featured: true
    },
    {
      id: 5,
      name: "Lisa Park",
      role: "Anniversary Celebration",
      location: "Long Island, NY",
      rating: 5,
      text: "Celebrated our 10th anniversary here and it was perfect. The staff went above and beyond to make it special. The dessert presentation brought tears to my eyes!",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      featured: false
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Food Critic",
      location: "Manhattan, NY",
      rating: 5,
      text: "In 20 years of restaurant reviews, Bella Vista stands out as truly exceptional. The innovation while respecting classic techniques is remarkable. A must-visit destination.",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      featured: true
    }
  ]

  const stats = [
    {
      icon: Star,
      value: "4.9",
      label: "Average Rating",
      subtitle: "From 500+ reviews"
    },
    {
      icon: Users,
      value: "2,500+",
      label: "Happy Guests",
      subtitle: "This year alone"
    },
    {
      icon: Award,
      value: "15+",
      label: "Awards Won",
      subtitle: "Industry recognition"
    },
    {
      icon: TrendingUp,
      value: "98%",
      label: "Return Rate",
      subtitle: "Customer loyalty"
    }
  ]

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <motion.div
        key={index}
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : { scale: 0 }}
        transition={{ delay: 0.1 * index, type: "spring", stiffness: 300 }}
      >
        <Star
          size={16}
          className={index < rating ? 'star-filled' : 'star-empty'}
          fill={index < rating ? '#D4AF37' : 'none'}
        />
      </motion.div>
    ))
  }

  return (
    <section id="testimonials" className="testimonials" ref={ref}>
      <div className="container">
        <motion.div 
          className="testimonials-header"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-subtitle">What Our Guests Say</span>
          <h2 className="section-title">Testimonials & Reviews</h2>
          <p className="testimonials-intro">
            Don't just take our word for it. Hear from our valued guests who have experienced 
            the magic of Bella Vista's culinary excellence and exceptional hospitality.
          </p>
        </motion.div>

        {/* Statistics Section */}
        <motion.div 
          className="testimonials-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              whileHover={{ 
                scale: 1.05,
                y: -10,
                boxShadow: "0 20px 40px rgba(212, 175, 55, 0.3)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="stat-icon-wrapper">
                <stat.icon className="stat-icon" />
              </div>
              <div className="stat-content">
                <motion.span 
                  className="stat-value"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  {stat.value}
                </motion.span>
                <span className="stat-label">{stat.label}</span>
                <span className="stat-subtitle">{stat.subtitle}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          className="testimonials-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className={`testimonial-card ${testimonial.featured ? 'featured' : ''}`}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="testimonial-header">
                <motion.div 
                  className="quote-icon"
                  initial={{ scale: 0, rotate: -45 }}
                  animate={inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -45 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  <Quote size={24} />
                </motion.div>
                <div className="testimonial-rating">
                  {renderStars(testimonial.rating)}
                </div>
              </div>

              <blockquote className="testimonial-text">
                "{testimonial.text}"
              </blockquote>

              <div className="testimonial-author">
                <motion.div 
                  className="author-avatar"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    loading="lazy"
                  />
                </motion.div>
                <div className="author-info">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-role">{testimonial.role}</p>
                  <p className="author-location">{testimonial.location}</p>
                </div>
              </div>

              {testimonial.featured && (
                <motion.div 
                  className="featured-badge"
                  initial={{ scale: 0, rotate: 45 }}
                  animate={inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: 45 }}
                  transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                >
                  <Award size={16} />
                  <span>Featured</span>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="testimonials-cta"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="cta-content">
            <h3>Ready to Create Your Own Story?</h3>
            <p>
              Join the hundreds of satisfied guests who have made Bella Vista their 
              destination for unforgettable dining experiences.
            </p>
            <motion.a 
              href="#contact" 
              className="cta-button"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 15px 30px rgba(212, 175, 55, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Star className="cta-icon" />
              Book Your Experience
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials 