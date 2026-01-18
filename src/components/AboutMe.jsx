import React from 'react'
import author from '../author.jpeg';
import {Link} from 'react-scroll'

const AboutMe = () => {
  return (
    <div id='about' className='container py-5'>
      <div className="row">
        <div className="col-lg-6 col-xs-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author..." />
          </div>
          </div>        
        <div className="col-lg-6 col-xs-12">
          <h1 className="about-heading">About me</h1>
          <h2>Hello! 👋</h2>
          <p>My name is Mariusz and I am 
Full Stack Developer with 2 years of experience in JavaScript frameworks (React, Vue.js), connecting front-end and back-end systems, and deploying solutions with Docker, GCP, and AWS.
 </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe


