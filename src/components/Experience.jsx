import React from "react";

const Experience = () => {
  return (
    <div className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>experience</h1>
      </div>
      <div className="container experience-wrapper">
         {/* - */}
         <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h4>Data Integration Developer </h4>
            <h5>OpenCorporates LTD, London (Remote) </h5>
          <ul>
            <li>Automating fetching and delivering processes through SSH</li>
            <li>Identifying issues for bot runs based on logs and proposing possible solutions to fix them</li>
            <li>Creating and editing API Accounts on demand</li>
            <li>Ongoing moderating content of main page www.opencorporates.com through Rails console</li>
            <li><i>Stack: Ruby, Ruby on Rails , SSH, Unix, NumPy, Pandas, Python 3</i></li>
            <li>Software used: Jira, Docker, Postman, Sequel Pro, RubyMine, IntelliJ Idea Ultimate</li>
            </ul>
          </div>
        </div>
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h4>Ruby on Rails Developer (Industry Placement)</h4>
            <h5>Superbyte, Shrewsbury, UK</h5>
            <ul>
              <li>On-going developer tasks with implementing new features</li>
              <li>Version control and creating pull requests for review of changes</li>
              <li>Releasing new product through Google Cloud console</li>
              <li>Stack: Ruby/ Ruby on Rails, React, Docker, Kubernetes, Git</li>
            </ul>
          </div>
        </div>
        {/* - */}
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">

            <h4>Scrum Master</h4>
            <h5>FootballTeamGame.com, International(Remote)</h5>
            <ul>
              <li>Organizing and conducting daily stand-ups as well as weekly sum up meetings where successes and failures in work-flow were discussed</li>
              <li>Recruiting and employing new developers</li>
              <li>Collecting reports of on-going progress in a project from developers through SlackBots(StandUply);</li>
              <li>Conducting code review through CodeCommit console in Amazon Web Service;</li>
              <li>Technological stack: Laravel , Php 7, Vue.js, Google Cloyd Platform, Atlassian Jira</li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience;
