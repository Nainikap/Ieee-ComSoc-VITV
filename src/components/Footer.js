import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="footer-content">
        <div className="footer-sections">
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/executive-board">Executive Board</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-section contact-section">
            <h1 className="footer-title">GET IN TOUCH</h1>
            <div className="footer-address">
              <p>Vellore Institute of Technology, Vellore, Tamil Nadu</p>
              <p>632014 - INDIA</p>
            </div>
            <div className="social-icons-footer">
              <a href="https://www.linkedin.com/company/ieeecomsocvit/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <div className="social-icon-footer">
                  <i className="fab fa-linkedin-in"></i>
                </div>
              </a>
              <a href="https://www.instagram.com/vitieeecomsoc/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <div className="social-icon-footer">
                  <i className="fab fa-instagram"></i>
                </div>
              </a>
              <a href="ieeecomsoc@vit.ac.in" target="_blank" rel="noopener noreferrer" aria-label="Email">
                <div className="social-icon-footer">
                  <i className="fas fa-envelope"></i>
                </div>
              </a>
              <a href="https://medium.com/@ieeecomsoc" target="_blank" rel="noopener noreferrer" aria-label="Medium">
                <div className="social-icon-footer">
                  <i className="fab fa-medium-m"></i>
                </div>
              </a>
              <a href="https://www.youtube.com/@vitieeecomsoc" target="_blank" rel="noopener noreferrer" aria-label="Medium">
                <div className="social-icon-footer">
                  <i className="fab fa-youtube"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="copyright">
          © {new Date().getFullYear()} IEEE Communications Society - VIT
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
