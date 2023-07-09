import React from 'react'
import './Portfolio.css'
import project1 from '../../assets/project1.jpeg'
import project2 from '../../assets/project2.jpg'
import project3 from '../../assets/project3.jpg'
import project4 from '../../assets/project4.jpg'
import project5 from '../../assets/project5.jpg'
const Portfolio = () => {
  return (
    <section id ="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src = {project4} alt = ""/>
          </div>
          <h3>Face Recognition Website</h3>
          <div className='porfolio__item-cta'>
            <a href = "https://github.com/vinay-menon123/ai-ml-facial-recognition" className='btn' target='_blank'>Github</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src = {project2} alt = ""/>
          </div>
          <h3>Human Fall Detection and Prevention System</h3>
          <div className='porfolio__item-cta'>
            <a href = "https://github.com/vinay-menon123/Human-Fall-Detection" className='btn' target='_blank'>Github</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src = {project3} alt = ""/>
          </div>
          <h3>ChatGPT Clone</h3>
          <div className='porfolio__item-cta'>
            <a href = "https://github.com/vinay-menon123/ChatGPT-Clone" className='btn' target='_blank'>Github</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src = {project5} alt = ""/>
          </div>
          <h3>ARway for indoor hostel navigation</h3>
          <div className='porfolio__item-cta'>
            <a href = "https://github.com/vinay-menon123/ARway-for-indoor-hostel-navigation" className='btn' target='_blank'>Github</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src = {project1} alt = ""/>
          </div>
          <h3>Solar System using blender</h3>
          <div className='porfolio__item-cta'>
            <a href = "https://github.com/vinay-menon123/Solar-System" className='btn' target='_blank'>Github</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio