import React from 'react'
import './Header.css'
import CTA from './CTA'
import me from '../../assets/me.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
   return(
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Vinay Menon</h1>
        <h5 className="text-light">Final Year Student</h5>
        <CTA/>
        <HeaderSocials/>
        <div className = "me">
          <img src = {me} alt = "me" />
        </div>

        <a href = "#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
   )
}

export default Header