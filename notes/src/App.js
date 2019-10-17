import React, { Component } from 'react';
import './App.css';
import NotesContainer from './components/NotesContainer';
import Home from './components/Home';
import Nav from './components/Nav'
import NewNote from './components/NewNote';
import { Router, Route, Switch } from 'react-router-dom';

// import configureStore from './configureStore'
// const store = configureStore();

class App extends Component {
  render() {
    return (
      <Router>
        <div>
         <Nav/>
          <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/notes/new' component={NewNote}></Route>
          <Route exact path='/notes' component={NotesContainer}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;