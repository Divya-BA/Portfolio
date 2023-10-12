import React from 'react'
import './footer.css'
import {AiOutlineLinkedin} from 'react-icons/ai'
function Footer() {
  return (
     <footer>
      <ul className='links'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#skills'>Skills</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href='https://www.linkedin.com/' target='_blank'> <AiOutlineLinkedin /></a>
      </div>
     </footer>
    )
}

export default Footer