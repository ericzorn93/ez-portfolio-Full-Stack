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
                <th>Link</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Facebook</td>
                <td>Otto</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Twitter</td>
                <td>Thornton</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Instagram</td>
                <td>Larry</td>
            </tr>
            </tbody>
        </Table>
      </div>
    )
  }
}
