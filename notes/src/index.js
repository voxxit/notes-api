import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NotesContainer from './components/NotesContainer';
import Home from './components/Home';
// import App from './App'
import NewNote from './components/NewNote';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';


document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
      <Router>
         <Route exact path='/' component={Home}></Route>
         <Route exact path='/notes/new' component={NewNote}></Route>
         <Route exact path='/notes' component={NotesContainer}></Route>
      </Router>,
      document.body.appendChild(document.createElement('div')),
    )
  })
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
