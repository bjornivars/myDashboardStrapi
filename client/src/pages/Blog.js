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

    userName: window.sessionStorage.getItem("user"),

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
    const { isResultsFiltered, searchPhrase, blogResults, filteredResults, userName } = this.state;

    console.log(blogResults);
    return (
      <div className="Blog">
        <div className="jumbotronImage-Blog">
          <h1 className="text-center pt-8 mb-5">{userName} Random Blogs</h1>
          <form className='col-md-6 m-auto'>
            <p>Search for a Blog</p>
            <input type='text'
              name='username'
              onChange={this.handleFiltering}
              className="form-control"
            />
            <br />
            <br />
          </form>
        </div>
        <div className=" d-flex justify-content-between wrap">
          {
            (isResultsFiltered) ?
              <div className="col-md-12 ">
                <h1>Filtered Results for "{searchPhrase}"</h1>
                <div className='d-flex justify-content-start wrap'>
                  {
                    (filteredResults.length > 0) ?
                      filteredResults.map((value, index) => {
                        return <BlogPost key={index}
                          id={value.id}
                          Blog={value.Blog}
                          created_at={value.created_at}
                          Image={'http://localhost:1337' + value.Image.url}
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
                        Image={'http://localhost:1337' + value.Image.url}
                        Article={value.Article}
                      />
                    }) :
                    <div className="d-flex justify-content-center">
                      <img src='https://flevix.com/wp-content/uploads/2019/07/Bubble-Preloader-1.gif' alt="loading" />
                    </div>
                }
              </>
          }
        </div>
      </div>
    );
  }
}

