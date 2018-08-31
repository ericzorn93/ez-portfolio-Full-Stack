import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import DanKitchenImg from '../../assets/img/Dan_Kitchen.jpg';
import '../../css/WelcomeJumbotron.css';

export default class WelcomeJumbotron extends Component {
  render() {
    return (
      <Jumbotron className={"jumbo-layout"}>
        <h1 className="display-3">Welcome to Daniel Kitchen Gaming</h1>
        <div className="text-center">
            <img src={DanKitchenImg} alt="Daniel Kitchen Profile Picture" className={"profile-img"}/>
        </div>
        <p className="lead">
            Daniel Kitchen is an accomplished, results-driven, recognized software industry pioneer with over 10 years of combined management and design experience creating, marketing, and distributing branded entertainment software generating over $100M in revenues. He is a highly creative “out-of-the-box" executive who facilitates the global expansion of intellectual properties by creating long-term partnerships between entertainment brand owners and interactive companies.
        </p>
        <hr className="my-2" />
        <p>Throughout his career, Dan has developed relationships with A-List brands and Hollywood studios, agents and talent.</p>
        <p className="lead">
            <Button color="primary"><Link to={"/games"} style={{color: "white"}}>View Dan's Work</Link></Button>
        </p>
      </Jumbotron>
    )
  }
}
