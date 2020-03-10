import React from 'react';
import Moment from 'react-moment';

const BlogClick = (props) => {
    const { Blog, created_at, Image, Article, Article2 } = props;
    return (
        <>
            <div className="col-md-6 mt-3 m-auto">
                <div className="">
                    <h1 className='text-center mt-5'>{Blog}</h1>
                    <p className="mt-3 text-center"><Moment>{created_at}</Moment></p>
                    <img className="card-img-top" src={Image} alt={Blog} />
                    <div className='mt-5'>
                        <p>{Article}</p>
                        <p>{Article2}</p>
                    </div>

                </div>
            </div>
        </>
    )
}
export default BlogClick;
