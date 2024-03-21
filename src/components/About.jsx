import React from 'react'
import "../styles/About.css"
import aboutimg from "../assets/aboutimg.jpg"

function About() {
  return (
    <div className='about'>
        <div className='about-left'>
        <img src={aboutimg} className='about-img' />
        </div>
        
        <div className='about-right'>
          <h3>ABOUT EZNET ORGANIZATION</h3>
          <h2>"EZNet: Unlocking potential, transforming lives affected by cerebral palsy."</h2>
          <p>EZNet Organization is dedicated to making a positive impact in the lives of individuals affected by cerebral palsy. Through their innovative programs and initiatives, EZNet strives to unlock the potential of those with cerebral palsy, providing them with the resources, support, and opportunities they need to lead fulfilling lives</p>
          
         <p>The organization's compassionate team is deeply committed to empowering individuals with cerebral palsy to overcome challenges and achieve their goals. They offer comprehensive support services, ranging from educational programs and vocational training to social integration initiatives, ensuring that individuals with cerebral palsy can thrive and participate fully in society.</p>      
        </div>
        
        
        
    </div>
  )
}

export default About