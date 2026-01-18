import React from 'react'
import Gallery from '../components/atom/Gallery'

const Portfolio = () => {
  return (
    <div className="portfolio">
       <h1 className="py-5">Portfolio</h1>
        <div className="container-fluid px-0">
              <div id='projects' className="div">
                < Gallery />
          </div>
      </div>
    </div>

  )
}

export default Portfolio
