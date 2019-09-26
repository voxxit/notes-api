import React, { Component } from 'react';
import './App.css';
import NotesContainer from './components/NotesContainer';
import NoteForm from './components/NoteForm';
import Home from './components/Home';
import { Route, Switch } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/notes" component={NotesContainer} />
          <Route exact path="/new_note" component={NoteForm} />
          
        </Switch>
      </div>
    );
  }
}

export default App