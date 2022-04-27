import React from 'react'
import '../Footer/Footer.css'
import facebook from '../../Images/facebook.svg'
import email from '../../Images/icon-email.svg'
import phone from '../../Images/icon-phone.svg'
import instagram from '../../Images/instagram.svg'
import twitter from '../../Images/twitter.svg'

function Footer() {
  return (
    <div className='footer'>
        <div className="contact">
            <div className="number">
                <img src={phone} alt="phone icon" />
                <p>+1-543-123-4567</p>
            </div>
            <div class="email">
                <img src={email} alt="email icon" />
                <p>comeandeat@eat.com</p>
            </div>
        </div>
        <div class="about-us">
            <p>About Us</p>
            <p>Jobs</p>
            <p>Press</p>
            <p>Blog</p>
        </div>
        <div class="contact-us">
            <p>Contact us</p>
            <p>Terms</p>
            <p>Privacy</p>
        </div>
        <div className="social-icons">
            <img src={facebook} alt="facebook logo" />
            <img src={twitter} alt="twitter logo" />
            <img src={instagram} alt="instagram logo" />
        </div>
    </div>
  )
}

export default Footer