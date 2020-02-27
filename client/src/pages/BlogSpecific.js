import React, { Component } from 'react';
import Header from '../components/header';
import Blog from '../components/blog';

export default class BlogSpecific extends Component {
  render() {
    return (
        <div className="BlogSpecific">
                <Header dashboardlink={'Dashboard'} 
                bloglink={'Blog'}
                joblink={'Jobs'}
                profilelink={'Profile'}
                logout={'Logout'}
        />
          <Blog blogTitle={'Blog title'}
              blogText={'blogText'}
/>
        </div>
    );
  }
}