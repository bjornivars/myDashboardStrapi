import React from 'react';

const Blog = (props) => {
    return (
        <>
            <div className="container">
                <div className="m-auto col-md-8 pt-5">
                    <h2 className="text-center">{props.Blog}</h2>
                    <p className="text-center">{props.created_at}</p>
                    <img className=" w-100 " src={props.Image} alt="Blog " />
                    <h5 className="mt-3">{props.Article}</h5>
                </div>
            </div>
        </>
    )
}
export default Blog;
