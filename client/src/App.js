import React, { Component } from "react";
import { BrowserRouter, Link, Route } from 'react-router-dom';
import "./App.css";
import NavHead from './components/Navbar';
import Games from './components/Games';
import Footer from './components/Footer';
import About from './components/main-components/About';

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavHead/>
          <br/>
          <Route exact component={Games} path="/"></Route>
          <Route exact component={About} path="/about"></Route>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
