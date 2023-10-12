import React from 'react'
import './header.css'
import HeaderImage from '../../images/photo.jpg'
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';

// import socialData from './socialData'
function Header() {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__portfolio">
          <img src={HeaderImage} alt='Header Porflio'/>
        </div>
      <h3>Divya BA</h3>
      <p>As a passionate MERN Stack developer, I specialize in creating dynamic web applications.  
        I bring creativity and problem-solving skills to every project.</p>
        {/* As a recent graduate, I am eager to contribute my skills and adaptability to your team.
        I continuously seek opportunities for growth and stay updated with the latest industry trends.
        Together, we can build innovative web solutions that engage and inspire users.
        Let's connect and turn ideas into reality!  */}
        <div className="header__cta">
          <a href='#contact' className='btn primary'>Let's Talk</a>
          <a href='#portfolio' className='btn primary'>My Work</a>
        </div>
        <div className="header__socials">
          {/* {
            socialData.map((item) => <a key={item.id} href={item.link} target='_blank' rel='noopener noreferrer'>{item.icon}</a>)
          } */}
          <a href='https://github.com/Divya-BA' target='_blank'><AiFillGithub /></a>
          <a href='https://www.linkedin.com/in/divya-b-a-64090223a/' target='_blank'> <AiOutlineLinkedin /></a>
        </div>
      </div>
    </header>
)}

export default Header