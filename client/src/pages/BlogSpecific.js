import React, { Component } from 'react';
import Header from '../components/header';

export default class BlogSpecific extends Component {
  render() {
    return (
        <div className="BlogSpecific">
                <Header dashboardlink={'Dashboard'} 
                bloglink={'Blog'}
                joblink={'Jobs'}
                logout={'Logout'}
        />
        <h1>BlogSpecific.js</h1>
          <img src={'https://seo-focus.com/wp-content/uploads/2018/10/A-Blog-Isn%E2%80%99t-a-Blog-It%E2%80%99s-a-Business.jpg'} alt="Blog image" />
        </div>
    );
  }
}