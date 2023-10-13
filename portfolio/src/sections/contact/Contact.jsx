import React from 'react'
import './contact.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1ispkuf', 'template_h9w451v', form.current,'ST6aOv16mI-bBXYfL')
      .then((result) => {
          console.log(result.text);
          console.log("Email send successfully");
          toast.success("Your Message send successfully", { autoClose: 2000 }); 

      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
<section id="contact">
  <h2>Contact Me</h2>
  <div className="container contact__container">
    <form ref={form} onSubmit={sendEmail} >
       <input type='text' name='user_name' placeholder='Your Full Name' required/>
       <input type='email' name='user_email' placeholder='Your Email' required/>
       <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
       <button type='submit' className='btn primary'>Send Message</button>
    </form>
  </div>
  <ToastContainer />
</section>  )
}

export default Contact