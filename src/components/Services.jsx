import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs} from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faGem, faTools } from "@fortawesome/free-solid-svg-icons";


const Services = () => {
  return (
    <div>
      <div className="services">
        <h1 className="py-5">Stack</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="box">
                <div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size="2x" /></div>
                <h3>Web Design</h3>
                <p>HTML/CSS/JS</p>
                <p>React/Vue</p>
                <p>LESS/SASS</p>
              </div>
            </div>
            {/* - */}
            <div className="col-md-3 col-sm-6">
              <div className="box">
                <div className="circle"><FontAwesomeIcon className="icon" icon={faJs} size="2x" /></div>

                <h3>Web Development</h3>
                <p>
                <p>React.JS</p>
                <p>Node.JS</p>
                <p>NPM/Yarn</p>
                </p>
              </div>
            </div>
            {/* - */}
            <div className="col-md-3 col-sm-6">
              <div className="box">
                <div className="circle"><FontAwesomeIcon className="icon" icon={faGem} size="2x" /></div>

                <h3>Software Engineering</h3>
                <p>Ruby on Rails</p>
                <p>Python</p>
                <p>Java</p>
              </div>
            </div>
            {/* - */}
            <div className="col-md-3 col-sm-6">
              <div className="box">
                <div className="circle"><FontAwesomeIcon className="icon" icon={faTools} size="2x" /></div>

                <h3>DevOps</h3>
                <p>Docker</p>
                <p>Kubernetes</p>
                <p>AWS/Azure</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Services
