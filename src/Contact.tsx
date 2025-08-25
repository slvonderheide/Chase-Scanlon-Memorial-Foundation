import './Contact.css'
import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('https://formspree.io/f/mzzglwkp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="apply-scholarship" className="section" style={{ width: '100vw', minHeight: '90vh', background: 'rgba(25, 118, 210, 0.08)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem 0' }}>
      <h2 style={{ color: '#1976d2', marginBottom: '1rem' }}>Apply for the Scholarship</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', width: '100%', maxWidth: '1300px', margin: '0 auto' }}>
        <div className="contact-form" style={{ flex: '1 1 400px', minWidth: '320px', maxWidth: '600px', background: '#fff', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.07)', padding: '2rem' }}>
          <h3>Scholarship Application</h3>
          <p>Fill out the Google Form below to apply for the Chase Scanlon Memorial Foundation Scholarship. We are looking for students who demonstrate leadership, academic achievement, and a commitment to making a positive impact in their community.</p>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdfe4-ewXVQ4h9YKOgGrfZROhvy_Q972tQPPlfKycdoZd5wlA/viewform?usp=dialog" width={600} height={900} frameBorder={0} marginHeight={0} marginWidth={0} title="Scholarship Application Form">Loading…</iframe>
        </div>
        <div className="donation-box" style={{ flex: '1 1 400px', minWidth: '320px', maxWidth: '600px', background: '#fff', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.07)', padding: '2rem' }}>
          <h3 style={{ color: '#c62828', marginBottom: '1rem' }}>Donate to the Foundation</h3>
          <p>Your support helps us honor Chase's legacy and make a positive impact in our community. All donations go directly to scholarships, events, and outreach.</p>
          <div style={{ marginBottom: '1rem' }}>
            <strong>Venmo:</strong> <span style={{ color: '#1976d2', fontWeight: 'bold' }}>@cjpoppin</span> <br />
            <strong>PayPal:</strong> <span style={{ color: '#1976d2', fontWeight: 'bold' }}>hartercj@yahoo.com</span> <br />
            <span style={{ fontSize: '0.95rem', color: '#555' }}>Please use the memo "Poppins Cup" for donations.</span>
          </div>
          <a href="https://www.paypal.com/paypalme/hartercj" target="_blank" rel="noopener noreferrer">
            <button style={{ backgroundColor: '#1976d2', color: '#fff', padding: '1rem 2rem', borderRadius: '8px', border: 'none', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer', marginRight: '1rem' }}>
              Donate via PayPal
            </button>
          </a>
          <a href="https://venmo.com/u/cjpoppin" target="_blank" rel="noopener noreferrer">
            <button style={{ backgroundColor: '#1976d2', color: '#fff', padding: '1rem 2rem', borderRadius: '8px', border: 'none', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer' }}>
              Donate via Venmo
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
