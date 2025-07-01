import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Menu.css'

// Interactive menu component with category filtering and dynamic content
const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all')
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    },
    exit: {
      y: -50,
      opacity: 0,
      transition: { duration: 0.3 }
    }
  }

  const categoryVariants = {
    inactive: { scale: 1, color: "#8B7355" },
    active: { 
      scale: 1.05, 
      color: "#D4AF37",
      transition: { type: "spring", stiffness: 300 }
    }
  }

  const menuItems = {
    appetizers: [
      {
        name: 'Truffle Arancini',
        description: 'Crispy risotto balls filled with wild mushrooms and black truffle, served with saffron aioli',
        price: '$18',
        image: 'https://images.unsplash.com/photo-1551782450-6096c2fd074c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        dietary: ['vegetarian']
      },
      {
        name: 'Oysters Rockefeller',
        description: 'Fresh Blue Point oysters topped with creamed spinach and herbs, finished with Pernod',
        price: '$22',
        image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        dietary: ['gluten-free']
      },
      {
        name: 'Foie Gras Terrine',
        description: 'House-made terrine with brioche toast, fig compote, and aged balsamic reduction',
        price: '$28',
        image: 'https://images.unsplash.com/photo-1544124951-21279b84f398?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        dietary: []
      }
    ],
    mains: [
      {
        name: 'Wagyu Beef Tenderloin',
        description: 'Grade A5 Wagyu with roasted bone marrow, truffle potato gratin, and red wine jus',
        price: '$85',
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        dietary: ['gluten-free']
      },
      {
        name: 'Pan-Seared Halibut',
        description: 'Atlantic halibut with cauliflower purée, pancetta crisps, and champagne beurre blanc',
        price: '$42',
        image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        dietary: ['gluten-free']
      },
      {
        name: 'Duck à l\'Orange',
        description: 'Roasted Muscovy duck breast with confit leg, orange gastrique, and wild rice pilaf',
        price: '$48',
        image: 'https://images.unsplash.com/photo-1576485375217-d6a95e34d1c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        dietary: []
      }
    ],
    desserts: [
      {
        name: 'Chocolate Soufflé',
        description: 'Warm Valrhona chocolate soufflé with vanilla bean ice cream and gold leaf',
        price: '$16',
        image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        dietary: ['vegetarian']
      },
      {
        name: 'Crème Brûlée Trio',
        description: 'Classic vanilla, lavender honey, and espresso crème brûlée with fresh berries',
        price: '$14',
        image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        dietary: ['vegetarian', 'gluten-free']
      }
    ],
    beverages: [
      {
        name: 'Wine Pairing',
        description: 'Sommelier-selected wine pairings for your complete dining experience',
        price: '$35',
        image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        dietary: []
      },
      {
        name: 'Signature Cocktail',
        description: 'House-crafted cocktails featuring premium spirits and artisanal ingredients',
        price: '$18',
        image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        dietary: []
      }
    ]
  }

  const categories = [
    { id: 'all', name: 'All Items', count: Object.values(menuItems).flat().length },
    { id: 'appetizers', name: 'Appetizers', count: menuItems.appetizers.length },
    { id: 'mains', name: 'Main Courses', count: menuItems.mains.length },
    { id: 'desserts', name: 'Desserts', count: menuItems.desserts.length },
    { id: 'beverages', name: 'Beverages', count: menuItems.beverages.length }
  ]

  const getDisplayItems = () => {
    if (activeCategory === 'all') {
      return Object.values(menuItems).flat()
    }
    return menuItems[activeCategory] || []
  }

  return (
    <section id="menu" className="menu" ref={ref}>
      <div className="container">
        <motion.div 
          className="menu-header"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-subtitle">Culinary Excellence</span>
          <h2 className="section-title">Our Menu</h2>
          <p className="menu-intro">
            Each dish is crafted with passion and precision, using only the finest seasonal ingredients. 
            Our menu reflects a perfect harmony of traditional techniques and modern innovation.
          </p>
        </motion.div>

        <motion.div 
          className="menu-categories"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`btn ${activeCategory === category.id ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setActiveCategory(category.id)}
              variants={categoryVariants}
              animate={activeCategory === category.id ? 'active' : 'inactive'}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="category-name">{category.name}</span>
              <span className="category-count">({category.count})</span>
            </motion.button>
          ))}
        </motion.div>

        <motion.div 
          className="menu-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <AnimatePresence mode="wait">
            {getDisplayItems().map((item, index) => (
              <motion.div
                key={`${activeCategory}-${item.name}-${index}`}
                className="menu-item"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(212, 175, 55, 0.2)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="menu-item-image">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    loading="lazy"
                  />
                  <div className="menu-item-overlay">
                    <motion.div 
                      className="dietary-tags"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {item.dietary.map((tag, tagIndex) => (
                        <span key={tagIndex} className="dietary-tag">{tag}</span>
                      ))}
                    </motion.div>
                  </div>
                </div>
                
                <div className="menu-item-content">
                  <div className="menu-item-header">
                    <h3 className="menu-item-name">{item.name}</h3>
                    <span className="menu-item-price">{item.price}</span>
                  </div>
                  <p className="menu-item-description">{item.description}</p>
                  
                  <motion.button 
                    className="add-to-order-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Add to Order
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default Menu 