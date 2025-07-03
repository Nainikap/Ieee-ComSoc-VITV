import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (path) => {
    if (location.pathname !== path) {
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  React.useEffect(() => {
    const closeMenu = () => setIsMenuOpen(false);
    if (isMenuOpen) {
      document.addEventListener('click', closeMenu);
    }
    return () => document.removeEventListener('click', closeMenu);
  }, [isMenuOpen]);

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="/photos/VIT_logo.png" alt="VIT Logo" className="vit-logo" />
        <img src="/photos/ieee-comsoc-registered-logo.png" alt="COMSOC Logo" className="comsoc-logo" />
      </div>
      
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
      </div>

      <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`} onClick={(e) => e.stopPropagation()}>
        <Link to="/" onClick={() => handleNavClick('/')} className={location.pathname === '/' ? 'active' : ''}>Home</Link>
        <Link to="/about" onClick={() => handleNavClick('/about')} className={location.pathname === '/about' ? 'active' : ''}>About</Link>
        <Link to="/executive-board" onClick={() => handleNavClick('/executive-board')} className={location.pathname === '/executive-board' ? 'active' : ''}>Executive Board</Link>
        <Link to="/events" onClick={() => handleNavClick('/events')} className={location.pathname === '/events' ? 'active' : ''}>Events</Link>
        <Link to="/blogs" onClick={() => handleNavClick('/blogs')} className={location.pathname === '/blogs' ? 'active' : ''}>Blogs</Link>
        <Link to="/contact" onClick={() => handleNavClick('/contact')} className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
