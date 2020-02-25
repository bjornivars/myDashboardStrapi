import React, { Component } from 'react';
import Header from '../components/header';



export default class LoginSpecific extends Component {
  render() {
    return (
        <div className="LoginSpecific">

        <Header dashboardlink={'Dashboard'} 
                bloglink={'Blog'}
                joblink={'Jobs'}
                logout={'Logout'}
        />
        <h1>LoginSpecific.js</h1>
        </div>
    );
  }
}