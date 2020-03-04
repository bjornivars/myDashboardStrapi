import React, { Component } from 'react';
import Header from '../components/header';
import Blog from '../components/blog';
import axios from 'axios';
import { STRAPI_BLOG_API } from '../Constants';

export default class BlogSpecific extends Component {

state = {
  Blogs: undefined,
}

componentDidMount() {
  axios.get(STRAPI_BLOG_API)
  .then(result => {
     console.log(result)
    this.setState({
      Blogs: result.data,
    })
  })
}

  render() {
    return (
      <div className="BlogSpecific">
        <Header dashboardlink={'Dashboard'}
          bloglink={'Blog'}
          joblink={'Jobs'}
          profilelink={'Profile'}
          logout={'Logout'}
        />
        {
          <Blog 
          blogTitle={"this.state.blog[0].Blog"}
          blogText={"this.state.blog[0].Article"}
        />
        }

      </div>
    );
  }
}

