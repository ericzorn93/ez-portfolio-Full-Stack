import React, { Component } from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import "./App.css";
import NavHead from './components/sub-components/Navbar';
import Home from './components/main-components/Home';
import Games from './components/main-components/Games';
import About from './components/main-components/About';
import Footer from './components/main-components/Footer';

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavHead/>
          <br/>
          <Route exact component={Home} path="/"/>
          <Route exact component={Games} path="/games"/>
          <Route exact component={About} path="/about"/>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
