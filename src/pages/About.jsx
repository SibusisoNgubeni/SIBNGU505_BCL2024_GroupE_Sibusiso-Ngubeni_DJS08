import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="about-page-container">
      
        <div className="about-page-content">
         <h1>Why buy a standard PA system when you can have it custom built.</h1>
         <p>Our mission at <strong>AudiGold Acoustics</strong> is to provide personalized solutions that fit your specific use case. We understand that every client has unique requirements, and we're committed to delivering customized PA systems that meet your needs, whether you're hosting a small event or a large stadium</p>
         <p>your custom PA system will be designed and built with the utmost care and attention to detail, ensuring reliable and exceptional sound quality for years to come..</p>
        </div>

        <div className="about-page-cta">
         <h2>Your customization options are virtually limitless!<br />Your Custom PA system is waiting.</h2>
         <Link className="link-button" to="/vans">Explore Designs</Link>
         </div>
        
    </div>
        
  )
};
