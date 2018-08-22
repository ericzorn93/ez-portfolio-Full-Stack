import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';
import Axios from 'axios';

export default class Items extends Component {

  state = {
    items: []
  }

  componentDidMount() {
    Axios.get('/api/orders').then(orders => this.setState());
  }

  handleChange = e => {
    this.setState({inputVal: e.target.value})
  }

  render() {
    return (
      <div className="container">
        <h1>Items Works</h1>
        {this.state.items.map(item => <Alert key={item.id}>{item.name}</Alert>)}
      </div>
    )
  }
}
