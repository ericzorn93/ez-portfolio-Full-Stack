import React, { Component } from 'react';
import ProfilePicture from '../../assets/img/profile-picture-second.jpg';
import { Link } from 'react-router-dom';
import '../../assets/css/navigation.css';
import { SocialIcon } from 'react-social-icons';


class Navigation extends Component {

  state = {
      sidebarOpen: false
  };

  toggleSidebar = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  };

  handleLinkToggle = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  };

  render() {
    const { sidebarOpen } = this.state;
    const { sidebarMarginTop, profileImgMarginLeft} = this.props;
    return (
        <nav className={sidebarOpen ? "sidebar active" : "sidebar"} style={{marginTop: sidebarMarginTop ? sidebarMarginTop : "", zIndex: 999}}>
            <button className="toggle-menu-btn" onClick={this.toggleSidebar}>
                &#9776;
            </button>
            <Link to={'/'}><h1 className={'nav-title'}>Eric Zorn<i className="fas fa-code"></i></h1></Link>
            <ul>
                <a href="https://github.com/ericzorn93" target={"_blank"}><img src={ProfilePicture} alt="profile-pic" className="profile-pic" style={{marginLeft: profileImgMarginLeft}}/></a>
                <li><Link to={'/'} onClick={this.handleLinkToggle}>Home</Link></li>
                <li><Link to={'/about'} onClick={this.handleLinkToggle}>About</Link></li>
                <li><Link to={'/contact'} onClick={this.handleLinkToggle}>Contact Me</Link></li>
            </ul>
            <div className="social-icons">
                <SocialIcon url={"mailto:zornwebdev@gmail.com?subject=EZ%20Business%20Inquiry&body=Hey%20Eric,%20my%20name%20is%20,"} network={"email"} style={{width: 30, marginLeft: 5}}/>
                <SocialIcon url={"https://www.linkedin.com/in/ericzorn/"} style={{width: 30, marginLeft: 5}}/>
                <SocialIcon url={"https://github.com/ericzorn93"} style={{width: 30, marginLeft: 5}}/>
                <SocialIcon url={"https://www.facebook.com/ezorn"} style={{width: 30, marginLeft: 5}}/>
                <SocialIcon url={"https://www.instagram.com/ericzorndesigns/"} style={{width: 30, marginLeft: 5}}/>
            </div>
            <footer className={"nav-footer text-center"}>
                <p style={{color: "white"}}>Made with <span style={{color: "#e25555",}}>&hearts;</span> by Eric Zorn</p>
            </footer>
        </nav>
    )
  }
}

export default Navigation;
