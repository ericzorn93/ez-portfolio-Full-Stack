import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    posts: [],
  }

  componentWillMount = () => {
    fetch("http://localhost:3001/api/orders").then(data => data.json()).then(response => this.setState({posts: this.state.posts.push(response)})); 
  }

  render() {
    const { posts } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p>{posts}</p>
      </div>
    );
  }
}

export default App;
