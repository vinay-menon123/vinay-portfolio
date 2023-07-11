import React from 'react'
import './About.css'
import me from '../../assets/about-me.png.jpg'
import {FaAward} from 'react-icons/fa'
import {MdOutlineWork} from 'react-icons/md'
import {MdGrade} from 'react-icons/md'
const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container"> 
        <div className='about__me'>
          <div className="about__me-image">
            <img src = {me} alt = "About me"/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>  
              <h5>Experience</h5>
              <small>4 months</small>
            </article>
            <article className='about__card'>
              <MdOutlineWork className='about__icon'/>  
              <h5>Internships</h5>
              <small>2</small>
            </article>
            <article className='about__card'>
              <MdGrade className='about__icon'/>  
              <h5>CGPA</h5>
              <small>9.01</small>
            </article>
          </div>
          <p>
          . Student at Vellore Institute of Technology, Chennai.<br/>
          . Pursuing Bachelor's in Computer Science and Engineering.<br/>
          . Competitive Programmer.<br/>
          . Proficient in Python.<br/>
          . 750+ questions on leetcode.
          </p>
          <a href = "#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
     
    </section>
  )
}

export default about