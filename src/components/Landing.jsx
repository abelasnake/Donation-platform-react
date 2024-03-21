import React from 'react'
import "../styles/Landing.css"
import darkarrow from "../assets/darkarrow.png"
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div className='landing container'>
      <div className='landing-text'>
        <h1>Eznet Charity Organization</h1>
        <p>EZNet is a dedicated charity organization focused on supporting children with cerebral palsy and their families. Our mission is to provide comprehensive assistance and resources to enhance the lives of these children, empowering them to reach their full potential. </p>
        <Link to="/donation_form"><button className='btn'>Explore more <img src={darkarrow}/></button></Link>
      </div>

    </div>
  )
}

export default Landing