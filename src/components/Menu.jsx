import React, { useState } from 'react'
import './Menu.css'

// Interactive menu component with category filtering and dynamic content
const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('appetizers')

  const menuCategories = [
    { id: 'appetizers', name: 'Appetizers' },
    { id: 'mains', name: 'Main Courses' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'beverages', name: 'Beverages' }
  ]

  const menuItems = {
    appetizers: [
      {
        name: 'Truffle Arancini',
        description: 'Crispy risotto balls with black truffle, aged parmesan, and herb aioli',
        price: '$18',
        image: 'https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      },
      {
        name: 'Seared Scallops',
        description: 'Pan-seared scallops with cauliflower purée and pancetta crisps',
        price: '$24',
        image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      },
      {
        name: 'Burrata Caprese',
        description: 'Creamy burrata with heirloom tomatoes, basil oil, and aged balsamic',
        price: '$16',
        image: 'https://images.unsplash.com/photo-1571197119282-621c1ea54ea8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      }
    ],
    mains: [
      {
        name: 'Wagyu Beef Tenderloin',
        description: 'Grilled wagyu with roasted bone marrow, seasonal vegetables, and red wine jus',
        price: '$68',
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      },
      {
        name: 'Mediterranean Sea Bass',
        description: 'Pan-roasted sea bass with lemon confit, olives, and salmoriglio sauce',
        price: '$42',
        image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      },
      {
        name: 'Duck Breast Confit',
        description: 'Slow-cooked duck breast with cherry gastrique and wild rice pilaf',
        price: '$38',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      }
    ],
    desserts: [
      {
        name: 'Chocolate Soufflé',
        description: 'Dark chocolate soufflé with vanilla bean ice cream and gold leaf',
        price: '$14',
        image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      },
      {
        name: 'Tiramisu Deconstructed',
        description: 'Classic tiramisu reimagined with espresso caviar and mascarpone mousse',
        price: '$12',
        image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      },
      {
        name: 'Lemon Tart',
        description: 'Meyer lemon tart with torched meringue and candied lemon zest',
        price: '$13',
        image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      }
    ],
    beverages: [
      {
        name: 'Bella Vista Signature',
        description: 'House blend of premium spirits with fresh herbs and seasonal fruits',
        price: '$16',
        image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      },
      {
        name: 'Wine Pairing Selection',
        description: 'Curated selection of premium wines to complement your meal',
        price: '$25',
        image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      },
      {
        name: 'Artisan Coffee',
        description: 'Single-origin coffee roasted in-house, served with house-made pastries',
        price: '$8',
        image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      }
    ]
  }

  return (
    <section id="menu" className="menu">
      <div className="container">
        <div className="menu-header fade-in-up">
          <span className="section-subtitle">Culinary Excellence</span>
          <h2 className="section-title">Our Signature Menu</h2>
          <p className="menu-intro">
            Each dish is crafted with passion and precision, using only the finest ingredients 
            sourced from local farms and international markets.
          </p>
        </div>

        <div className="menu-categories fade-in-up">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="menu-items fade-in-up">
          <div className="items-grid">
            {menuItems[activeCategory].map((item, index) => (
              <div key={index} className="menu-item">
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                  <div className="item-overlay">
                    <span className="item-price">{item.price}</span>
                  </div>
                </div>
                <div className="item-content">
                  <h3 className="item-name">{item.name}</h3>
                  <p className="item-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="menu-footer fade-in-up">
          <p className="special-note">
            * Menu items may vary based on seasonal availability. 
            Please inform us of any dietary restrictions or allergies.
          </p>
          <a href="#contact" className="btn btn-primary">
            Make a Reservation
          </a>
        </div>
      </div>
    </section>
  )
}

export default Menu 