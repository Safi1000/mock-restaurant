import React from 'react'
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Heart } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerSections = {
    contact: {
      title: 'Contact Info',
      items: [
        { icon: MapPin, text: '123 Culinary Street, Downtown District' },
        { icon: Phone, text: '+1 (555) 123-4567' },
        { icon: Mail, text: 'info@bellavista.com' }
      ]
    },
    hours: {
      title: 'Opening Hours',
      items: [
        { text: 'Monday - Thursday' },
        { text: '5:00 PM - 10:00 PM' },
        { text: 'Friday - Saturday' },
        { text: '5:00 PM - 11:00 PM' },
        { text: 'Sunday' },
        { text: '5:00 PM - 9:00 PM' }
      ]
    },
    links: {
      title: 'Quick Links',
      items: [
        { text: 'About Us', href: '#about' },
        { text: 'Our Menu', href: '#menu' },
        { text: 'Gallery', href: '#gallery' },
        { text: 'Reservations', href: '#contact' },
        { text: 'Private Events', href: '#contact' },
        { text: 'Gift Cards', href: '#contact' }
      ]
    }
  }

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <h3>Bella Vista</h3>
              <span>Fine Dining</span>
            </div>
            <p className="footer-description">
              Where culinary excellence meets timeless elegance. 
              Creating unforgettable dining experiences since 2008.
            </p>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  className="social-link"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="footer-sections">
            {Object.entries(footerSections).map(([key, section]) => (
              <div key={key} className="footer-section">
                <h4 className="section-title">{section.title}</h4>
                <ul className="section-list">
                  {section.items.map((item, index) => (
                    <li key={index} className="list-item">
                      {item.href ? (
                        <a href={item.href} className="footer-link">
                          {item.text}
                        </a>
                      ) : (
                        <span className="footer-text">
                          {item.icon && <item.icon size={16} className="item-icon" />}
                          {item.text}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            <p>
              © {currentYear} Bella Vista Restaurant. All rights reserved.
            </p>
          </div>
          <div className="footer-credits">
            <p>
              Made with <Heart size={16} className="heart-icon" /> for food lovers everywhere
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 