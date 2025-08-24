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
          {/* Type 1 Diabetes Symbol (Blue Circle) */}
          <span style={{ display: 'inline-block', width: '32px', height: '32px', borderRadius: '50%', background: '#009fe3', border: '2px solid #1976d2' }} title="Type 1 Diabetes Symbol"></span>
          <h2 style={{ margin: 0 }}>Chase Scanlon Memorial Foundation</h2>
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
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar;
