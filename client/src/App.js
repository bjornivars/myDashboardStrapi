import React, { Component } from 'react';
// import './App.css';
import 'bootstrap3/dist/css/bootstrap.min.css';
import './scss/styles.scss';

/*
import Movies from './components/movies';
import Facts from './components/fact';
import Weather from './components/weather';
import Crypto from './components/crypto';
*/
/*
import Blog from './components/blog';
import Profile from './components/profile';
import Login from './components/login';

*/


export default class App extends Component {
  render() {
    return (
      <div className="App">

      {this.props.children}

      </div>

    );
  }
}