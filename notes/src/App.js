import React, { Component } from 'react';
import './App.css';
import NotesContainer from './components/NotesContainer';
import Home from './components/Home';
import { Route, Switch } from 'react-router-dom';
import NewNote from './components/NewNote';

import configureStore from './configureStore'
const store = configureStore();

class App extends Component {
  render() {
    return (
      <div>
        <Switch store={store}>
          <Route exact path="/" component={Home} />
          <Route exact path="/notes" component={NotesContainer} />
          <Route exact path="/notes/new" component={NewNote} />
          
        </Switch>
      </div>
    );
  }
}

export default App