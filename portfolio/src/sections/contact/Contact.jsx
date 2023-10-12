import React from 'react'
import './contact.css'
import {BiLogoGmail} from 'react-icons/bi'
function Contact() {
  return (
<section id="contact">
  <h2>Contact Me</h2>
  <div className="container contact__container">
    <div className="contact__option">
      <div className="contact__icon">
      <BiLogoGmail/>
      </div>
      
      <h3>Email</h3>
      {/* <p>divyaanbalagan28@gmail.com</p> */}
      <a href='mailto:divyaanbalagan28@gmail.com' target='_blank'>divyaanbalagan28@gmail.com</a>
    </div>
  </div>
</section>  )
}

export default Contact