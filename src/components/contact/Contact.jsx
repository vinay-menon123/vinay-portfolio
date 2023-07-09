import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiFillInstagram} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_g5ccyyb', 'template_hu5czda', form.current, '8F4iFLIUvMjlTkGUS')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
      e.target.reset();
  };
  return (
    <section id = "contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>vinay.menon2707@gmail.com</h5>
            <a href='mailto:vinay.menon2707@gmail.com' target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <AiFillInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>vinay_menon.007</h5>
            <a href='https://www.instagram.com/vinay_menon.007/' target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+91 9895440839</h5>
            <a href='https://api.whatsapp.com/send?phone=+919895440839' target='_blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type = "text" name = 'name' placeholder='Your Full Name' required />
          <input type = "email" name = 'email' placeholder='Your Email' required />
          <textarea name = "message" rows = '7' placeholder='Your Message' required />
          <button type = "submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact