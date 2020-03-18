import React, { Component } from 'react';

import axios from 'axios';
import { STRAPI_BLOG_API } from '../Constants';

import BlogClick from '../components/blog-specific';

export default class BlogSpecific extends Component {
    state = {
        blogResults: undefined,
    }

    componentDidMount() {
//        console.log('match', this.props.match)
        axios.get(STRAPI_BLOG_API + '/' + this.props.match.params.id)
            .then(result => {
                console.log(result)
                this.setState({
                    blogResults: result.data,
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        const { blogResults } = this.state;
        return (
            <div className="row">
                <div className="col-sm-12">
                    <h1>Blog Specific</h1>
                </div>
                <div className="col-sm-12">
                    {
                        (blogResults !== undefined) ?
                            <BlogClick
                                Blog={blogResults.Blog}
                                Image={'http://localhost:1337' + blogResults.Image.url}
                                created_at={blogResults.created_at}
                                Article={blogResults.Article}
                                Article2={blogResults.Article2}
                            /> :
                            <div className="d-flex justify-content-center col-md-6">
                                <img className='w-100' src='https://flevix.com/wp-content/uploads/2019/07/Bubble-Preloader-1.gif' alt="loading" />
                            </div>
                    }
                </div>
            </div>
        )
    }
}