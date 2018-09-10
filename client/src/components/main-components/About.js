import React, { Component } from 'react';
import Navigation from '../sub-components/Navigation';
import '../../assets/css/about.css';
import { ProgressBar } from 'react-bootstrap';
import AboutMe from '../sub-components/About_Me';

class About extends Component {


  state = {
    workExperiences: [
        {
          id: 0,
            title: 'Technical Specialist',
            company: 'Apple Inc.',
            location: 'Nanuet, NY',
            time: '2017-2018',
            description: 'As a Technical Specialist, we address the customer’s need of' +
            'assistance and assess their situation. Sometimes I take care of' +
            'customers with advice or a solution on the spot, using your' +
            'knowledge of current Apple technology to help with iPod, iPhone,' +
            'and iPad devices. At other times, you refer customers to support' +
            'team members who get them up and running again. We provide' +
            'personal training for new customers, helping them acquire the' +
            'basic skills they need to get started on photo, video, and music' +
            'projects.'
        },
        {
          id: 1,
            title: 'Group Leader - Counselor',
            company: 'Camp Ramaquois',
            location: 'Pomona, NY',
            time: '2010-2016',
            description: 'Promoted to Group Leader from Counselor and Counselor' +
            'in Training Responsible for overseeing group of 20+ campers' +
            'everyday.'
        },
        {
          id: 2,
            title: 'Summer Digital Intern',
            company: 'Green Lion Digital',
            location: 'Wyckoff, NJ',
            time: 'June 2016, July 2016',
            description: 'Assist with Website and Email Campaign creation and' +
            'maintenance. I also created and designed info graphics and' +
            'imagery for company and clients'
        }
    ]
  };

  render() {
    const { workExperiences } = this.state;
    return (
      <React.Fragment>
        <Navigation sidebarMarginTop={-10} profileImgMarginLeft={2}/>
        <div className="row">
          <div className="container">
            <h1 className="about-header text-center">About Me / Skills</h1>
            <AboutMe/>
            <section className="education-section">
              <h3 className="section-header-text">Education <i className="fas fa-graduation-cap" style={{color: "white", fontSize: 40}}></i></h3>
              <div className="schools container">
                {/* University of Denver */}
                <div className="info-card">
                  <h4 className="about-label">
                  University of Denver - M.S. Information &amp; Communications Technology <span>Concentration: Web Design &amp; Development</span>
                  </h4>
                  <p className="about-info">Earned August 2018</p>
                  <p className="about-info">Focused on Full-Stack Web Design and Development - Cumulative GPA: 3.94</p>
                </div>

                {/* Quinnipiac University */}
                <div className="info-card">
                  <h4 className="about-label">
                  Quinnipiac University - B.A. Interactive Digital Design
                  </h4>
                  <p className="about-info">Earned May 2017</p>
                  <p className="about-info">Focused on UX/UI and Front-End Web Design and Development - Cumulative GPA: 3.40</p>
                  <p className="about-info">Founding Father of Beta Theta Pi Fraternity: Eta Sigma Chapter</p>
                </div>
              </div>
            </section>
              <br/>
            <section className="skills">
              <h3 className="section-header-text">Skills <i className="fas fa-check-double" style={{color: "white", fontSize: 40}}></i></h3>
              <div className="progress-bars container">

                  <label className="progressbar-label">JavaScript (ES6, ES7, ES8), jQuery, React, NodeJS, Angular, ExpressJS</label>
                  <ProgressBar>
                    <ProgressBar bsStyle={"warning"} now={50} key={1} label={"Vanilla JS"}/>
                    <ProgressBar bsStyle={"success"} now={20} key={2} label={"jQuery"}/>
                    <ProgressBar bsStyle={"warning"} now={20} key={3} label={"React JS"} />
                    <ProgressBar bsStyle={"success"} now={5} key={4} label={"NodeJS"} />
                    <ProgressBar bsStyle={"warning"} now={1} key={5} label={"Angular JS"} />
                    <ProgressBar bsStyle={"success"} now={3} key={6} label={"Express JS"} />
                  </ProgressBar>

                  <label className={"progressbar-label"}>Relational Database Management Systems (RDBMS)</label>
                  <ProgressBar>
                    <ProgressBar bsStyle={"warning"} label={"MySQL"} now={33.33} />
                    <ProgressBar bsStyle={"success"} label={"PostgreSQL"} now={33.33} />
                    <ProgressBar bsStyle={"warning"} label={"SQL Server"} now={33.33} />
                  </ProgressBar>

                  <label className={"progressbar-label"}>HTML5:</label>
                  <ProgressBar now={95} label={"HTML 5"} bsStyle={"warning"} />

                  <label className="progressbar-label">CSS3</label>
                  <ProgressBar now={90} label={"CSS3"} bsStyle={"warning"} />

                  <label className={"progressbar-label"}>PHP</label>
                  <ProgressBar now={70} label={"PHP"} bsStyle={"warning"}/>

                  <label className={"progressbar-label"}>Ruby &amp; Rails Framework</label>
                  <ProgressBar now={65} label={"Ruby & Rails"} bsStyle={"warning"}/>

                  <label className={"progressbar-label"}>Python &amp; Django Framework</label>
                  <ProgressBar now={60} label={"Python & Django"} bsStyle={"warning"}/>

                  <label className={"progressbar-label"}>NoSQL Databases</label>
                  <ProgressBar now={60} label={"MongoDB"} bsStyle={"warning"}/>
              </div>
            </section>

            <section className="experience-section">
                <div className="experiences container">
                    <h3 className="section-header-text">Experience <i className="fas fa-briefcase" style={{color: "white", fontSize: 40}}></i></h3>
                    {workExperiences.map(experience => (
                        <div className="info-card" key={experience.id}>
                            <h4 className="about-label experience-title">{experience.title}</h4>
                            <p className="about-info"><strong>Company: </strong>{experience.company}</p>
                            <p className="about-info"><strong>Location: </strong>{experience.location}</p>
                            <p className="about-info"><strong>Time: </strong>{experience.time}</p>
                            <p className="about-info"><strong>Job Description: </strong>{experience.description}</p>
                        </div>
                    ))}
                </div>
            </section>
          </div>
        </div>
          <br/><br/><br/>
      </React.Fragment>
    )
  }
}

export default About;