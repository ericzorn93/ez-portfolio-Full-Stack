import React, { Component } from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import "./App.css";
import NavHead from './components/sub-components/Navbar';
import Home from './components/main-components/Home';
import Games from './components/main-components/Games';
import About from './components/main-components/About';
// import Footer from './components/main-components/Footer';
import Contact from "./components/main-components/Contact";
import SocialMedia from "./components/main-components/SocialMedia";


class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavHead/>
          <br/>
          <Route exact component={Home} path="/"/>
          <Route exact component={Contact} path="/contact" />
          <Route exact component={Games} path="/games"/>
          <Route exact component={About} path="/about"/>
          <Route exact component={SocialMedia} path="/social-media"/>
          {/*<Footer/>*/}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
