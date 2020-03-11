import React from 'react';
import Moment from 'react-moment';

import { Link } from 'react-router-dom';

const BlogPost = (props) => {
    const { Blog, created_at, Image, id } = props;
    return (
        <>
            <div className="col-md-3 mt-3">
                <div className="card">
                    <img className="card-img-top" src={Image} alt="Card cap" />
                    <div className="card-body p-3">
                        <h5 className="card-title">{Blog}</h5>
                        <p className=""><Moment>{created_at}</Moment></p>
                        <div className="d-flex justify-content-between">
                            <Link className="btn btn-primary" to={`/blog-specific/${id}`}>Read More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default BlogPost;
