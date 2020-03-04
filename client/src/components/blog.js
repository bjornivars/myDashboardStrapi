import React from 'react';

const Blog = (prop) => {
    return (
        <>
            <h1 className="text-center headerPadding mb-3">BlogSpecific.js</h1>
            <img className=" w-100" src={'https://seo-focus.com/wp-content/uploads/2018/10/A-Blog-Isn%E2%80%99t-a-Blog-It%E2%80%99s-a-Business.jpg'} alt="Blog " />

            <div className="container">
                <div className="m-auto col-md-8 pt-5">
                    <h2 className="text-center">{prop.blogTitle}</h2>
                    <p>{prop.blogThing}</p>

                    <img className=" w-100 " src={'https://seo-focus.com/wp-content/uploads/2018/10/A-Blog-Isn%E2%80%99t-a-Blog-It%E2%80%99s-a-Business.jpg'} alt="Blog " />
                    <p>{prop.blogText}</p>
                </div>
            </div>
        </>
    )
}
export default Blog;
