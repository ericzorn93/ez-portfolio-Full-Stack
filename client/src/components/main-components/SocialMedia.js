import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class SocialMedia extends Component {
  render() {
    return (
      <div className={"container"}>
        <h1 className={"text-center"}>Social Media</h1>
        <Table>
            <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">1</th>
                <td><i className={"fab fa-linkedin"}></i> LinkedIn</td>
                <td><a href="https://www.linkedin.com/in/danieljkitchen" target={"_blank"}>Click Here</a></td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td><i className={"fab fa-facebook-square"}></i> Facebook</td>
                <td><a href="https://www.facebook.com/danieljkitchen" target={"_blank"}>Click Here</a></td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td><i className={"fab fa-twitter-square"}></i> Twitter</td>
                <td><a href="https://twitter.com/dankitchen" target={"_blank"}>Click Here</a></td>
            </tr>
            <tr>
                <th scope="row">4</th>
                <td><i className={"fas fa-briefcase"}></i> Los Angeles Office</td>
                <td><a href="http://www.laofficelounge.com/dankitchen" target={"_blank"}>Click Here</a></td>
            </tr>
            <tr>
                <th scope="row">5</th>
                <td><i className={"fas fa-gamepad"}></i> International Game Developers Association</td>
                <td><a href="https://www.igda.org/default.aspx" target={"_blank"}>Click Here</a></td>
            </tr>
            </tbody>
        </Table>
      </div>
    )
  }
}
