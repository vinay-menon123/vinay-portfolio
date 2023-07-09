import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id = "services">
      <h5>Skills I Have</h5>
      <h2>Experience</h2>

      <div className="container services__container">
        <article className = "service__article">
          <div className='service__head'>
            <h3>Tvastr Cloud Ltd.</h3> 
          </div>
          <ul className = 'service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Worked on LogClass, and understood how to identify and categorize anomalies based on their specific key words using TFILF</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Worked on CloudRCA project from scratch, which makes use of heterogeneous multi-source data including Key Performance Indicators (KPIs), logs, as well as
                  topology, and extracts important features via state-of-the-art anomaly detection and log analysis techniques. 
                  The engineered features are then utilized in a knowledge-informed Hierarchical Bayesian Network (KHBN) model to infer root causes with high accuracy and efficiency</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Worked on Kubeflow, MLflow, FEAST Feature Store, Kserve, Kale and Katib</p>
            </li>
          </ul>
        </article>
        <article className = "service__article">
          <div className='service__head'>
            <h3>GlobalLogic</h3>
          </div>
          <ul className = 'service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Worked on a VScode extension to convert old programming languages into new ones.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Worked with openai and langchain llms to get the old codes from the file/folder and send them to the backend.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Worked on creating a wizard using React for managing the extension</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Worked on debugging and cleaning up old code.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services