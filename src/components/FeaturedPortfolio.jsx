import React from 'react'
import FeaturedPortfolioslider from './FeaturedPortfolioslider'

export default function FeaturedPortfolio() {
  return (
    <section className='featuredportfolio is__section'>
       <div className="portfolio_wrapper container">
         <h2 className="text__center is__heading">
           Dedicated to delivering <strong className="highlight">Excellence</strong> for our clients.            
         </h2>
         <FeaturedPortfolioslider/>
       </div>
    </section>
  )
}