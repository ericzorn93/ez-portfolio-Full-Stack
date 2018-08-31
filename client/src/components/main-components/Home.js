import React, { Component } from 'react';
import WelcomeJumbotron from '../sub-components/WelcomeJumbotron';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <WelcomeJumbotron/>
      </div>
    )
  }
}
