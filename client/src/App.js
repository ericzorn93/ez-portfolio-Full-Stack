import React, { Component } from "react";
import "./App.css";
import NavHead from './components/Navbar';
import Games from './components/Games';
import Footer from './components/Footer';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <NavHead/>
        <br/>
        <Games/>
        <Footer/>
      </div>
    );
  }
}

export default App;
