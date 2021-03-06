import React from 'react'
import '../Footer/Footer.css'
import facebook from '../../images/facebook.svg'
import email from '../../images/icon-email.svg'
import phone from '../../images/icon-phone.svg'
import instagram from '../../images/instagram.svg'
import twitter from '../../images/twitter.svg'

function Footer() {
  return (
    <div className='footer'>
        <div className="contact">
            <div className="number">
                <img src={phone} alt="phone-icon" />
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
            <div className='img-con'>
            <img src={facebook} alt="facebook logo" />
            </div>
            <div className='img-con'>
            <img src={twitter} alt="twitter logo" />
            </div>
            <div className='img-con'>
            <img src={instagram} alt="instagram logo" />
            </div>
        </div>
    </div>
  )
}

export default Footer