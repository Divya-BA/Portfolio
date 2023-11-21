import React from 'react'
import './portfolio.css'
import task from './task'


function Portfolio() {
  return (
   <section id="portfolio">
    <h2>Portfolio</h2>
    <div className="container portfolio__container">
      {
        task.map(({id,image,title,demo})=>{
          return(
            <div key={id} className="portfolio__item">
                <div className="portfolio__item__image">
                  <img src={image} alt={title}></img>
                </div>
                <p>{title}</p>
                <div className="portfolio__item__cta">
                  {/* <a href={github} className='btn primary' target='_blank'>Github</a> */}
                  <a href={demo} className='btn primary' target='_blank'>Demo</a>

                </div>
            </div>
          )
        })
      }
    </div>
  </section>

  )
}

export default Portfolio