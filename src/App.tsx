
import './App.css'
import { useState } from 'react'
import NavBar from './NavBar'
import Contact from './Contact'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  // Home Section Component
  const HomeSection = () => (
    <section id="home" className="section">
        <div className="hero">
          <h1>Welcome to the Chase Scanlon Memorial Foundation</h1>
          <p>Honoring Chase's legacy through community events and support.</p>
          <div className="hero-buttons" style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
            <button style={{ backgroundColor: '#1976d2', color: '#fff', padding: '1rem 2rem', borderRadius: '8px', border: 'none', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.07)' }} onClick={() => setActiveSection('services')}>Golf Scramble</button>
            <button style={{ backgroundColor: '#1976d2', color: '#fff', padding: '1rem 2rem', borderRadius: '8px', border: 'none', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.07)' }} onClick={() => setActiveSection('about')}>Hockey Tournament</button>
            <button style={{ backgroundColor: '#1976d2', color: '#fff', padding: '1rem 2rem', borderRadius: '8px', border: 'none', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.07)' }} onClick={() => setActiveSection('contact')}>Apply & Donate</button>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'stretch', gap: '2rem', margin: '2rem auto 0', maxWidth: '1100px' }}>
            <section style={{ background: '#0a174e', borderRadius: '12px', padding: '1.5rem', flex: 1, boxShadow: '0 2px 8px rgba(0,0,0,0.07)', color: '#fff' }}>
              <h2 style={{ color: '#c62828', marginBottom: '1rem' }}>About the Chase Scanlon Memorial Foundation</h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                The Chase Scanlon Memorial Foundation was established to honor the memory and legacy of Chase Scanlon. Our mission is to support youth, promote community engagement, and raise awareness for Type 1 Diabetes through events, scholarships, and outreach. We believe in the power of compassion, teamwork, and making a positive impact in the lives of others.
              </p>
            </section>
            <div style={{ background: '#0a174e', borderRadius: '12px', padding: '1.5rem', flex: 1, boxShadow: '0 2px 8px rgba(0,0,0,0.07)' }}>
              <h2 style={{ color: '#c62828', marginBottom: '1rem' }}>Scholarship Winner</h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                Congratulations to our 2025 Chase Scanlon Memorial Foundation Scholarship recipient!
              </p>
              <p style={{ fontWeight: 'bold', fontSize: '1.15rem', marginBottom: '0.5rem' }}>
                Taylor Johnson
              </p>
              <p>
                Taylor has demonstrated outstanding leadership, academic achievement, and a commitment to making a positive impact in our community. We are proud to support Taylor's future and honor Chase's legacy through this scholarship.
              </p>
            </div>
          </div>
        </div>
      <div style={{ textAlign: 'center', marginTop: '1rem' }}>
        <a href="https://www.jdrf.org/" target="_blank" rel="noopener noreferrer">
          <button style={{ backgroundColor: '#1976d2', color: '#fff', padding: '1rem 2rem', borderRadius: '8px', border: 'none', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer' }}>
            Type 1 Diabetes Information
          </button>
        </a>
      </div>
    </section>
  )

  // Hockey Tournament Section Component
  const AboutSection = () => (
  <section id="about" className="section" style={{ background: 'rgba(25, 118, 210, 0.08)', minHeight: '90vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem 0' }}>
      <div className="container">
        <h2>Chase Scanlon Memorial Foundation Poppins Cup</h2>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', margin: '1rem 0' }}>
          <img src="poppins_lable.jpg" alt="Poppins Cup Label" style={{ maxWidth: '300px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.10)' }} />
          <a href="https://www.facebook.com/media/set/?set=a.363048933108552&type=3" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', textAlign: 'center' }}>
            <img src="poppins.jpg" alt="Poppins Cup Photo" style={{ maxWidth: '300px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }} />
            <div style={{ textAlign: 'center', fontSize: '0.9rem', color: '#555', marginTop: '0.5rem' }}>
              Photo credit: <a href="https://pureopusproductions.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#1976d2', textDecoration: 'underline' }}>Pure Opus Productions</a>
            </div>
            <div style={{ color: '#1976d2', fontWeight: 'bold', marginTop: '0.5rem', fontSize: '1.1rem' }}>Click for more</div>
          </a>
        </div>
        <p>
          Join us for the annual Chase Scanlon Memorial Hockey Tournament! This event brings together hockey enthusiasts of all ages to celebrate the spirit of competition and community. Enjoy exciting games, team camaraderie, and help support a great cause in memory of Chase Scanlon.
        </p>
        <p>
          <a href="https://www.facebook.com/profile.php?id=100076562045959" target="_blank" rel="noopener noreferrer" style={{ color: '#1976d2', textDecoration: 'underline', fontWeight: 'bold' }}>
            Visit our Hockey Tournament Facebook Page
          </a>
        </p>
        <div className="about-grid">
          <div className="about-card" style={{ border: '2px solid #0a174e', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.07)' }}>
            <h3>Where competition meets compassion, hockey with a purpose.</h3>
            <div style={{ margin: '1rem 0 1rem 1.5rem', padding: 0 }}>
              <div style={{ marginBottom: '0.5rem' }}>🏒 The Tournament You Don’t Want to Miss!</div>
              <div style={{ marginBottom: '0.5rem' }}>We’re rolling out FOUR teams — each stacked with 10 players and a goalie. Spots are first come, first serve, so don’t wait to lock in your spot!</div>
              <div style={{ marginBottom: '0.5rem' }}>🎮 Game Time: Two Games Guaranteed - Semi-Finals Showdown, Championship Battle or the legendary Toilet Bowl 🚽</div>
              <div style={{ marginBottom: '0.5rem' }}>Three 20-minute rolling periods with live officials.</div>
              <div style={{ marginBottom: '0.5rem' }}>If it’s tied? Get ready for 3v3 sudden death OT and then a shootout if needed. (Championship? Continuous 3v3 until someone wins!)</div>
              <div style={{ marginBottom: '0.5rem' }}>👕 Jerseys & Teams: You’ll be drafted to a squad, decked out in team jerseys, and ready to roll. Jerseys will need to be returned after your Day Two game.</div>
              <div style={{ marginBottom: '0.5rem' }}>🍻 Off-Ice Fun: Tailgating is STRONGLY encouraged — bring food, beer, or both and keep the vibes alive.</div>
              <div style={{ marginBottom: '0.5rem' }}>50/50 Raffle + prizes all weekend long.</div>
              <div style={{ marginBottom: '0.5rem' }}>🔥 Sign up, show up, and bring the energy</div>
            </div>
          </div>
          <div className="about-card" style={{ border: '2px solid #0a174e', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.07)' }}>
            <h3>Tournament Schedule</h3>
            <p>2025 Summer Schedule</p>
            <img src="schedule.jpg" alt="Tournament Schedule" style={{ width: '100%', maxWidth: '400px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.10)', marginBottom: '1rem' }} />
          </div>
              <div className="about-card" style={{ border: '2px solid #0a174e', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.07)' }}>
                <h3>Information</h3>
                <p>
                 If you are interested in playing or sponsoring please email at: PoppinsCup@gmail.com. 
                </p>
                <p style={{ marginTop: '0.5rem', color: '#1976d2', fontWeight: 'bold' }}>
                  Once registration is complete, please use a payment form below.
                </p>
                <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem', flexWrap: 'nowrap', justifyContent: 'flex-start' }}>
                  <a href="https://www.paypal.com/paypalme/hartercj" target="_blank" rel="noopener noreferrer">
                    <button style={{ backgroundColor: '#1976d2', color: '#fff', padding: '0.75rem 1.5rem', borderRadius: '8px', border: 'none', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer' }}>
                      Poppins Cup via PayPal
                    </button>
                  </a>
                  <a href="https://venmo.com/u/cjpoppin" target="_blank" rel="noopener noreferrer">
                    <button style={{ backgroundColor: '#1976d2', color: '#fff', padding: '0.75rem 1.5rem', borderRadius: '8px', border: 'none', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer' }}>
                      Poppins Cup via Venmo
                    </button>
                  </a>
                </div>
              </div>
        </div>
      </div>
    </section>
  )

  // Services Section Component
  const ServicesSection = () => (
  <section id="services" className="section" style={{ background: 'rgba(25, 118, 210, 0.08)', minHeight: '90vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem 0' }}>
      <div className="container">
        <h2>Golf Scramble</h2>
        <p>
          Be part of the Chase Scanlon Memorial Golf Scramble! Gather your team and enjoy a day of fun, friendly competition, and community spirit. All skill levels are welcome, and proceeds go to support local causes in Chase's memory.
        </p>
        <p>
          <a href="https://www.facebook.com/TheChaseScanlonClassic" target="_blank" rel="noopener noreferrer" style={{ color: '#1976d2', textDecoration: 'underline', fontWeight: 'bold' }}>
            Visit our Golf Scramble Facebook Page
          </a>
        </p>
        <div className="services-grid">
          <div className="service-card" style={{ border: '2px solid #0a174e', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.07)' }}>
            <h3>Team Play</h3>
            <p>Form a team and compete in a classic golf scramble format for prizes and bragging rights.</p>
          </div>
          <div className="service-card" style={{ border: '2px solid #0a174e', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.07)' }}>
            <h3>On-Course Contests</h3>
            <p>Participate in longest drive, closest to the pin, and other fun challenges throughout the event.</p>
          </div>
          <div className="service-card" style={{ border: '2px solid #0a174e', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.07)' }}>
            <h3>Food & Festivities</h3>
            <p>Enjoy great food, drinks, and entertainment before and after your round.</p>
          </div>
        </div>
      </div>
    </section>
  )

  // Function to render the active section
  const renderSection = () => {
    switch(activeSection) {
      case 'home':
        return <HomeSection />
      case 'about':
        return <AboutSection />
      case 'services':
        return <ServicesSection />
      case 'contact':
        return <Contact />
      default:
        return <HomeSection />
    }
  }

  return (
    <div className="app">
      <NavBar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="main-content">
        {renderSection()}
      </main>
    </div>
  )
}

export default App;

