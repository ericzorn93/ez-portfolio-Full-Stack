import React, { Component } from "react";
import "./App.css";
import NavHead from './components/Navbar';
import Items from './components/Items';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <NavHead/>
        <Items/>
      </div>
    );
  }
}

export default App;
