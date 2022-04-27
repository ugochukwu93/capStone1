import React from 'react'
import './ContactPage.css'

import LinkedinLogo from '../Img-Icons/linkedin.png'
import TwitterLogo from '../Img-Icons/twitter-sign.png'
import InstagramLogo from '../Img-Icons/instagram.png'
import MapLogo from '../Img-Icons/placeholder.png'
import MailLogo from '../Img-Icons/email.png'
import PhoneLogo from '../Img-Icons/smartphone.png'
import SkypeLogo from '../Img-Icons/skype.png'
import Form from '../Components/Form'

export default function ContactPage() {
  return (
    <div className='contact'>
        <div className='contact-box'>
            <Form/>
            <div className='contact-box1'>
                <h2 className='head'>Contact Us</h2>
                <div className='contact-address'>
                    <div><img src={MapLogo} alt=""/></div>
                    <div>49, Ikorodu Road, lagos</div>
                </div>
                <div className='contact-address'>
                    <div><img src={MailLogo} alt="" width={21}/></div>
                    <div>hellothekitchen.com</div>
                </div>
                <div className='contact-address'>
                    <div><img src={SkypeLogo} alt="" width={21}/></div>
                    <div>thekitchen</div>
                </div>
                <div className='contact-address'>
                    <div><img src={PhoneLogo} alt="" width={21}/></div>
                    <div>+2347096453546</div>
                </div>
                <div className='contact-address'>
                    <div><img src={InstagramLogo} alt="" width={21}/></div>
                    <div><img src={TwitterLogo} alt="" width={21}/></div>
                    <div><img src={LinkedinLogo} alt="" width={21}/></div>
                </div>
            </div>
        </div>
    </div>
  )
}
