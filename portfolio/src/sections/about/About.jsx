import React from 'react'
import Resume from '../../assets/Resume .pdf'
import './about.css'
import {HiOutlineDownload} from 'react-icons/hi'
function About() {
  return (
    <section id="about">
      <div className="container about__container">
        <h2>About Me</h2>
        <p> I'm a recent graduate with a BSc in Computer Science from Meenakshi College for Women, where I achieved an 83% academic performance.
            My journey into the world of technology began during my school days at All Angels Matriculation Higher Secondary School, where I obtained 79% in 12th grade and 84% in 10th grade.
        </p>
        <p>My fascination with web development led me to specialize in the MERN stack, a versatile and in-demand technology stack. 
          I've invested time in mastering front-end technologies like HTML5, CSS, and JavaScript, enabling me to create engaging and interactive web interfaces.
          I also have hands-on practice with React, a powerful library for building dynamic web applications.
           On the back-end, I've delved into MongoDB, Express.js, and Node.js to create robust and scalable server-side solutions. MongoDB's NoSQL capabilities, coupled with Express.js and Node.js, provide me with the tools to build full-stack applications.
        </p>
        <a href={Resume} download className='btn primary'>Download CV <HiOutlineDownload/></a>
      </div>
    </section>
  )
}

export default About