import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

// Component Imports
import Home from './components/main-components/Home';
import About from './components/main-components/About';
import Contact from "./components/main-components/Contact";
import Users from "./components/main-components/Users";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
            <Route exact path={'/'} component={Home} />
            <Route exact path={'/about'} component={About} />
            <Route exact path={'/contact'} component={Contact} />
            <Route exact path={'/admin/users'} component={Users} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
