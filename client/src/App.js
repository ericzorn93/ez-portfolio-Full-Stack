import React, { Component } from "react";
import "./App.css";
import Navbar from './components/Navbar';
import Items from './components/Items';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Items/>
      </div>
    );
  }
}

export default App;
