import React, { Component } from 'react';
import axios from 'axios';
import { STRAPI_BLOG_API } from '../Constants';
import BlogPost from '../components/blog';


export default class Blog extends Component {

  state = {
    blogResults: undefined,

    filteredResults: [],
    isResultsFiltered: false,
    searchPhrase: '',
  }
  componentDidMount() {
    axios.get(STRAPI_BLOG_API)
      .then(result => {
        console.log(result)
        this.setState({
          blogResults: result.data,
        })
      })
  }

  handleFiltering = (input) => {
    const { blogResults } = this.state
    let filteredBlogPosts = blogResults.filter((value) => {
      return value.Blog.toLowerCase().includes((input.target.value).toLowerCase())
    })
    this.setState({
      filteredResults: filteredBlogPosts,
      searchPhrase: input.target.value,
      isResultsFiltered: true
    })
  }

  render() {
    const { isResultsFiltered, searchPhrase, blogResults, filteredResults } = this.state;

    console.log(blogResults);
    return (
      <div className="Blog">
        <h1 className="text-center pt-8 mb-5">My Random Blog</h1>
        <form className='col-md-6'>
          <p>Search for a Blog</p>
          <input type='text'
            name='username'
            onChange={this.handleFiltering}
            className="form-control"
          />
          <br />
          <br />
        </form>
        <div className=" d-flex justify-content-between wrap">
          {
            (isResultsFiltered) ?
              <div className="col-md-12 ">
                <h1>Filtered Results for {searchPhrase}</h1>
                <div className='d-flex justify-content-start wrap'>
                  {
                    (filteredResults.length > 0) ?
                      filteredResults.map((value, index) => {
                        return <BlogPost key={index}
                          id={value.id}
                          Blog={value.Blog}
                          created_at={value.created_at}
                          Image={'http://localhost:1337/' + value.Image.url}
                        />
                      }) :
                      <div>No Results</div>
                  }
                </div>
              </div> : <>
                {
                  (blogResults !== undefined) ?
                    blogResults.map((value, index) => {
                      return <BlogPost key={index}
                        id={value.id}
                        Blog={value.Blog}
                        created_at={value.created_at}
                        Image={'http://localhost:1337/' + value.Image.url}
                        Article={value.Article}
                      />
                    }) : 
                    <div className="col-md-12"><p>No information to show yet</p></div>
                }
              </>
          }
        </div>
      </div>
    );
  }
}

