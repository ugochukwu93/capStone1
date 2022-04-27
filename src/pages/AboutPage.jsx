import React from 'react'
import './AboutPage.css'
import ChefLogo from "../Img-Icons/chef-vector-34121712.jpg"

function AboutPage() {
  return (
    <div className="about">
      <div className='about-con'>
      <div>
        <img className='about-img' src={ChefLogo} alt='chef'/>
      </div>
      <div className="about-text">
        <p>Founded on the belief that everyone deserves quality food regardless of their income.
        We are committed to feeding our customers and ensuring they have the best service.
        Our menu contains meals from different cultures in the country and our chefs make the meals
        with secret ingredients passed down from generations</p>
      </div>
      </div>
    </div>
  )
}

export default AboutPage