import React from 'react'
import './footer.css'
import {AiOutlineLinkedin} from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai';

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
      <a href='https://github.com/Divya-BA' target='_blank'><AiFillGithub /></a>
      <a href='https://www.linkedin.com/in/divya-b-a-64090223a/' target='_blank'> <AiOutlineLinkedin /></a>
      </div>
     </footer>
    )
}

export default Footer