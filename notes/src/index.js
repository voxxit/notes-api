import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';


document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
      <Router>
        <Route path="/" component={App} />
      </Router>,
      document.body.appendChild(document.createElement('div')),
    )
  })
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
