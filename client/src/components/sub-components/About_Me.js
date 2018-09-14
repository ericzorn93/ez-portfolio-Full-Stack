import React from 'react';
import '../../assets/css/about_me.css';
import ProfilePicture from '../../assets/img/profile-picture-second.jpg';

const AboutMe = (props) => {
  return (
    <div className={"about-me-container container"}>
        <div className="row text-center">
            <img className={"profile-img"} src={ProfilePicture} alt="Profile"/>
        </div>
        <h4 className={"about-me-text"}><a style={{color: "white"}} href="https://github.com/ericzorn93" target={"_blank"}><strong>My Github: https://github.com/ericzorn93</strong></a></h4>
        <br/>
        <p className={"about-me-text"}>- Highly motivated, creative, multi-disciplinary Full-Stack Web Developer with a passion for emerging technology, engaging in interactive digital Web Design &amp; Development seeking a full-time opportunity with a progressive technology company as a Full-Stack or Front-End Web Developer.</p>

        <p className={"about-me-text"}>- Possess unique talent to visualize concepts with an understanding of design principles and web protocols such as HTML/CSS, JavaScript/jQuery, React JS, Angular JS, PHP, and Python (Django), and Ruby on Rails with an understanding of web design and browser usability and cross-platform compatibility.</p>

        <p className={"about-me-text"}>- Collaborative team member with a committed personality to deliver results. Adept at learning
        technology with the recognition that technological change is constant.</p>
    </div>
  )
}

export default AboutMe;
