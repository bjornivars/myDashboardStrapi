import React, { Component } from 'react';
import Header from '../components/header';






export default class ProfileSpecific extends Component {
  render() {
    return (
        <div className="ProfileSpecific">

        <Header dashboardlink={'Dashboard'} 
                bloglink={'Blog'}
                joblink={'Jobs'}
                logout={'Logout'}
        />
        <h1>ProfileSpecific.js</h1>
        {this.props.childrem}
        </div>
    );
  }
}