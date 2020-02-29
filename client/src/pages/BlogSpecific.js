import React, { Component } from 'react';
import Header from '../components/header';
import Blog from '../components/blog';

export default class BlogSpecific extends Component {
  state = {
    blog: undefined
  }

  componentDidMount(){
    fetch("http://localhost:1337/Blogs")
    .then(response => {return response.json()})
    .then(result => {
      this.setState({
        blog: result
      })
    });
  }
  render() {
    console.log(this.state.blog)
    return (
        <div className="BlogSpecific">
        
                <Header dashboardlink={'Dashboard'} 
                bloglink={'Blog'}
                joblink={'Jobs'}
                profilelink={'Profile'}
                logout={'Logout'}
        />
    {
      (this.state.blog !== undefined) ?
      <Blog blogTitle={this.state.blog[0].Blog}
            blogText={this.state.blog[0].Article}
    /> : 
    <div>No Information</div>

}

        </div>
    );
  }
}

{/* http://localhost:1337/blogs */ }