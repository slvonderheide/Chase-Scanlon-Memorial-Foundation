import './NavBar.css'
import { useState } from 'react';

interface NavBarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

function NavBar({ activeSection, setActiveSection }: NavBarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (section: string) => {
    setActiveSection(section);
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <img src="TCSF Solid Grey.jpg" alt="Chase Scanlon Memorial Foundation Logo" style={{ height: '48px', width: 'auto', borderRadius: '8px', objectFit: 'contain' }} />
          <span style={{ fontWeight: 700, fontSize: '1.25rem', color: '#222', marginLeft: '0.5rem', whiteSpace: 'nowrap' }}>
            Chase Scanlon Memorial Foundation
          </span>
        </div>
        
        <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <button 
              className={`navbar-link ${activeSection === 'home' ? 'active' : ''}`} 
              onClick={() => handleNavClick('home')}
            >
              Home
            </button>
          </li>
          <li className="navbar-item">
            <button 
              className={`navbar-link ${activeSection === 'about' ? 'active' : ''}`} 
              onClick={() => handleNavClick('about')}
              >
                Hockey Tournament
            </button>
          </li>
          <li className="navbar-item">
              <button 
                className={`navbar-link ${activeSection === 'services' ? 'active' : ''}`} 
                onClick={() => handleNavClick('services')}
              >
                Golf Scramble
              </button>
          </li>
          <li className="navbar-item">
            <button 
              className={`navbar-link ${activeSection === 'contact' ? 'active' : ''}`} 
              onClick={() => handleNavClick('contact')}
            >
              Apply & Donate
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar;
