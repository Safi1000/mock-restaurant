import React from 'react'
import './Gallery.css'

const Gallery = () => {
  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Elegant dining room ambiance',
      category: 'Interior'
    },
    {
      src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Gourmet dish presentation',
      category: 'Cuisine'
    },
    {
      src: 'https://images.unsplash.com/photo-1552566090-a4e16ed0529a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Wine cellar collection',
      category: 'Wine'
    },
    {
      src: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Chef crafting signature dish',
      category: 'Kitchen'
    },
    {
      src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Romantic dinner setting',
      category: 'Dining'
    },
    {
      src: 'https://images.unsplash.com/photo-1564759224907-65b45b7c4ab8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Fresh ingredients selection',
      category: 'Ingredients'
    },
    {
      src: 'https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Private dining room',
      category: 'Interior'
    },
    {
      src: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Dessert masterpiece',
      category: 'Cuisine'
    }
  ]

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="gallery-header fade-in-up">
          <span className="section-subtitle">Visual Journey</span>
          <h2 className="section-title">Experience Bella Vista</h2>
          <p className="gallery-intro">
            Take a glimpse into our world of culinary artistry and elegant ambiance. 
            Every corner tells a story of passion, craftsmanship, and unforgettable experiences.
          </p>
        </div>

        <div className="gallery-grid fade-in-up">
          {galleryImages.map((image, index) => (
            <div key={index} className={`gallery-item item-${index + 1}`}>
              <img src={image.src} alt={image.alt} />
              <div className="gallery-overlay">
                <span className="gallery-category">{image.category}</span>
                <h4 className="gallery-title">{image.alt}</h4>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-footer fade-in-up">
          <p className="visit-note">
            Every visit to Bella Vista is a new chapter in your culinary journey. 
            Come and create your own memorable moments with us.
          </p>
          <a href="#contact" className="btn btn-primary">
            Plan Your Visit
          </a>
        </div>
      </div>
    </section>
  )
}

export default Gallery 