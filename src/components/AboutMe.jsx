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
          <p>My name is Mariusz and I am a young developer currently seeking a new position
          related to Web Development and/or Software Engineering. </p>
          <p>I am still learning a lot of things about Web Development, but I already gained some experience in that field.</p>
          <p>Currently I am working on creating my side projects which I will include in <Link to="#">Portfolio</Link> section when it's ready.</p>
          <p> I am always seeking new opportunities where I can improve and develop my Web Development / Software Engineering skils.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe


