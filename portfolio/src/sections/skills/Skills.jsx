import React from 'react'
import './Skills.css'
import { frontend,backend } from './data'
import {BsPatchCheckFill} from 'react-icons/bs'
function Skills() {
  return (
<section id="skills">
  <h2 className='h2'>My Skills</h2>
  <div className="container skills__container">
     <div className="skills__frontend">
          <h3>Frontend Development</h3>
          <div className="skills__content">
          
            {frontend.map(({id,skills})=>{
              return(<div key={id} className="skills__details">
                <BsPatchCheckFill className='skills__details__icon'/>
                  <div>
                    <p>{skills}</p>
                  </div>
              </div>
            )})}
            
           
          </div>
     </div>
     <div className="skills__backend">
          <h3>Backend Development</h3>
          <div className="skills__content">
          {backend.map(({id,skills})=>{
              return(<div key={id} className="skills__details">
                <BsPatchCheckFill className='skills__details__icon'/>
                  <div>
                    <p>{skills}</p>
                  </div>
              </div>
            )})}
            
          </div>
     </div>
  </div>
</section>  
)
}

export default Skills