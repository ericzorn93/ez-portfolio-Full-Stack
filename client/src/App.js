import React, { Component } from "react";
import "./App.css";
import NavHead from './components/Navbar';
import Items from './components/Items';
import Footer from './components/Footer';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <NavHead/>
        <Items/>
        <Footer/>
      </div>
    );
  }
}

export default App;
