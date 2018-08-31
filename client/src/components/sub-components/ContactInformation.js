import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../../css/ContactInformation.css";

export default class ContactInformation extends Component {
  render() {
    return (
      <div className={"container contact-info text-center"}>
          <p>Daniel Kitchen</p>
          <p>316 Prospect Avenue, Suite 3C</p>
          <p>Hackensack, NJ 07601</p>
          <a href={"mailto: dan@dankitchen.com"}>dan@dankitchen.com | </a>
          <Link to="/">www.dankitchen.com</Link> |
          <a href={"tel:1-201-704-4068"}> 201-704-4068</a>
      </div>
    )
  }
}
