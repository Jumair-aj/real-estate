import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className="footer">
        <div className="footer-container">
        <div className="logo-div footer-div">
                <a href="/"><img src="images/logo.png" alt="Company logo" className='img-logo'/></a>
        </div>
        <div className="footer-content footer-div">
        <p>The perfect Place for a perfect start of your future</p>
        </div>
        <div className="quick-links footer-div">
            <h4>Quick Links</h4>
        <ul >
            <li>About</li>
            <li>Buy</li>
            <li>Rent</li>
            <li>Contact</li>
        </ul>
        </div>
        <div className="footer-div footer-contact">
            <h4>Follow Us</h4>
            <div className="social-icons">
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer