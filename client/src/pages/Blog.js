import React, { Component } from 'react';
import BlogPost from '../components/blog';
import axios from 'axios';
import { STRAPI_BLOG_API } from '../Constants';


export default class Blog extends Component {

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
    const { Blogs } = this.state;
    console.log(Blogs);
    return (
      <div className="Blog">
        <h1 className="text-center pt-8 mb-5">My Random Blog</h1>
        {
          (Blogs !== undefined) ?

            Blogs.map((value, index) => {
              return <BlogPost key={index}
                Blog={value.Blog}
                created_at={value.created_at}
                Image={'http://localhost:1337/' + value.Image.url}
                Article={value.Article}
              />
            }) : <div className="col-md-12"><p>No information to show yet</p></div>
        }
      </div>
    );
  }
}

