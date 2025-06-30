import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import './Header.css'

// Header component with responsive navigation and smooth scrolling
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigationItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h2>Bella Vista</h2>
            <span>Fine Dining</span>
          </div>

          <nav className={`nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <a href="#contact" className="btn btn-primary">
              Reserve Table
            </a>
          </div>

          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header 