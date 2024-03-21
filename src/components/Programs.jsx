import React from 'react'
import "../styles/Programs.css"
import program1 from "../assets/program1.jpg"
import program2 from "../assets/program2.jpg"
import program3 from "../assets/program3.jpg"
import FoodBankIcon from '@mui/icons-material/FoodBank';
import BathtubIcon from '@mui/icons-material/Bathtub';
import ChildCareIcon from '@mui/icons-material/ChildCare';


function Programs() {
  return (
    <div className='programs'>
        <div className='program'>
            <img src={program1} alt="" />
            <div className='caption'>
               <span> < FoodBankIcon /></span>
               <p>feeding</p>
            </div>
            
        </div>
        <div className='program'>
            <img src={program2} alt="" />
            <div className='caption'>
              <span><BathtubIcon /></span>
               <p>Bath</p>
            </div>
            
            
        </div>
        <div className='program'>
            <img src={program3} alt="" />
            <div className='caption'>
               <span><ChildCareIcon /></span>
               <p>caring</p>
            </div>
            
            
        </div>
    </div>
  )
}

export default Programs