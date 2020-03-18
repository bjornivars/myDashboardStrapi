import React, { Component } from 'react';
import axios from 'axios';
import { STRAPI_API } from '../Constants';


export default class Login extends Component {
  state = {
    login: '',
    password: '',

    errorMessage: undefined,
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
        console.log('An error occurred: ', error);
        this.setState({
          errorMessage: 'Username or Password is incorrect'
        })
      })
  }

  render() {
    const { errorMessage } = this.state;
    return (
      <div className="container-fluid">
        <h1 className="text-center pt-8 mb-5">Login</h1>
        <div className="row m-auto">
          <form onSubmit={this.handleSubmit} className="col-md-4 m-auto">
            {
              errorMessage !== undefined && <div><p className='errorMessage'>Username or password is incorrect</p></div>
            }
            <p>Enter a username</p>
            <input type='text'
              name='username'
              onChange={this.handleChange}
              className='form-control'
            />
            <br />
            <p>Enter a password</p>
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


