import React from 'react';

const Blog = (prop) => {
    return(
        <>

        <div>        

            <h1 className="text-center mt-5">BlogSpecific.js</h1>
            <div className="col-md-5 m-auto pt-5">
                <h2>{prop.blogTitle}</h2>
                <p>{prop.blogText}</p>

                <img className=" " src={'https://seo-focus.com/wp-content/uploads/2018/10/A-Blog-Isn%E2%80%99t-a-Blog-It%E2%80%99s-a-Business.jpg'} alt="Blog image" />
                <p>{prop.blogText}</p>
                <p>{prop.blogText}</p>
                <p>{prop.blogText}</p>
            </div>
        </div>





        </>
    )
}
export default Blog;


{/*   API TO BE MAKE IN STRAPI  */}