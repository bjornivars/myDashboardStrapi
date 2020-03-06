import React, { Component } from 'react';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/styles.scss';
import Login from './pages/Login';
import Navbar from './components/header';


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
  state = {
    isLoggedIn: true,

  }

  updateLogin = () => {
    this.setState({
      isLoggedIn: true,
    })
  }

  logoutUser = () => {
    this.setState({
      isLoggedIn: false,
    })
    sessionStorage.clear();
  }

  render() {
    return (sessionStorage.getItem('token') !== null && this.state.isLoggedIn) ? 
    ( 
      <div className="App">
        <Navbar />   
        <button className="btn btn-primary fixed-top btn-logout" onClick={this.logoutUser}>Log out</button>
          {this.props.children}
      </div>
    ) : (
      <Login updateLoginStatus={this.updateLogin} />
    )
  }
}
