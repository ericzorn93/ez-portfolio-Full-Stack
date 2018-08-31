import React, { Component } from 'react';
import WelcomeJumbotron from '../sub-components/WelcomeJumbotron';

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <WelcomeJumbotron/>
      </div>
    )
  }
}
