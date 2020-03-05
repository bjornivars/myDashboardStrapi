import React, { Component } from 'react';
import axios from 'axios';
import { STRAPI_API } from '../Constants';


export default class Login extends Component {
  state = {
    login: '',
    password: '',
  }

  handleChange = (input) => {
    // console.log('event.target', input.target)
    let name = input.target.name;
    let value = input.target.value;
    this.setState({
      [name]: value
    })
    // console.log('this.state', this.state)
  }

  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(STRAPI_API + 'auth/local', {
        identifier: this.state.username,
        password: this.state.password,
      })
      .then(response => {
        // console.log('User Data', response)
        sessionStorage.setItem('token', response.data.jwt);
        sessionStorage.setItem('user', response.data.user.username);
        sessionStorage.setItem('email', response.data.user.email);
        this.props.updateLoginStatus();
      })
      .catch(error => {
        console.log('An error occurred: ', error)
      })
  }

   removeToken() {
    sessionStorage.removeItem("token");
    window.location.reload();
  }
  render() {
    return (
      <div className="container-fluid">
        <h1 className="text-center pt-8 mb-5">LoginSpecific.js</h1>
        <div className="row">
          <form onSubmit={this.handleSubmit}>
            <p>Enter a username</p>
            <input type='text'
              name='username'
              onChange={this.handleChange}
              className='form-control'
            />
            <br />
            <input type='password'
              name='password'
              onChange={this.handleChange}
              className='form-control'
            />
            <br />
            <input type='submit' className='btn btn-primary' />
          </form>
        </div>
      </div>
    );
  }
}


