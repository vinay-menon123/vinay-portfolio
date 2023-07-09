import React from 'react'
import './Footer.css'
import {BsFacebook} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href = "#" className='footer__logo'>My Portfolio</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Services</a></li>
        <li><a href='#services'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Certifications</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://www.facebook.com/Vinay.Menon007/' target='_blank'><BsFacebook/></a>
        <a href='https://www.instagram.com/vinay_menon.007/' target='_blank'><AiFillInstagram/></a>
        <a href = "https://www.linkedin.com/in/vinay-menon123/" target = "_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href = "https://github.com/vinay-menon123" target = "_blank" rel="noreferrer"><BsGithub/></a>
      </div>
    </footer>
  )
}

export default Footer