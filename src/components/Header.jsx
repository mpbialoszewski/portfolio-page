import React from 'react'
import Typed from 'react-typed'
import { Link } from 'react-scroll'

const Header = () => {
    return (
        <div>
            <div id='home' className="header-wrapper">
                <div className="main-info">
                    <h1>I have worked with such technologies as:</h1>
                    <Typed 
                        className='typed-text'
                        strings={['Ruby on Rails','React.js', 'Node.js', 'Docker', 'Kubernetes', 'SASS', 'Javascript ES6', 'Spring Boot']}
                        typeSpeed={30}
                        backSpeed={60}  
                        loop                  
                    />
                    <Link smooth={false} to='contact' offset={-110} className ='btn-main-offer'> Contact me </Link>
                </div>
            </div> 
        </div>
    )
}

export default Header;
