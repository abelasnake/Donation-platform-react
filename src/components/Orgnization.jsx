import React from 'react'
import '../styles/Organization.css';
import gallery1 from "../assets/gallery1.jpg"
import gallery2 from "../assets/gallery2.jpg"
import gallery3 from "../assets/gallery3.jpg"
import gallery4 from "../assets/gallery4.jpg"
import darkarrow from "../assets/darkarrow.png"


function Orgnization() {
  return (
    <div className='organization'>
        <div className='gallery'>
          <img src={gallery1} alt="" />
          <img src={gallery2} alt="" />
          <img src={gallery3} alt="" />
          <img src={gallery4} alt="" />
          
        </div>
        <button className='btn dark-btn'>See more here <img src={darkarrow}/></button>
    </div>
  )
}

export default Orgnization