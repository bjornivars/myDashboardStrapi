import React, { Component } from 'react';
import Header from '../components/header';
import Login from '../components/header';


export default class LoginSpecific extends Component {
  render() {
    return (
        <div className="LoginSpecific">
        <Header dashboardlink={'Dashboard'} 
                bloglink={'Blog'}
                joblink={'Jobs'}
                profilelink={'Profile'}
                logout={'Logout'}
        />
        <h1>LoginSpecific.js</h1>
        <img src={"https://image.freepik.com/free-vector/login-template_1017-6719.jpg"} alt="Login" />

        <Login loginTitle={'Login title'}
               loginText={'HERE WILL BE LOGIN'}
        /> 
        </div>
    );
  }
}


