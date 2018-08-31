import React, { Component } from 'react';
import WelcomeJumbotron from '../sub-components/WelcomeJumbotron';

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <WelcomeJumbotron/>
        <h1 className="home-header">Welcome to Daniel Kitchen Gaming - <strong>Home</strong></h1>
      </div>
    )
  }
}
