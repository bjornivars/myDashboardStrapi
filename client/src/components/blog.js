import React from 'react';

const Blog = (prop) => {
    return(
        <>
        <div>
            <h2>{prop.blogTitle}</h2>
            <p>{prop.blogText}</p>
        </div>

        </>
    )
}
export default Blog;


{/*   API TO BE MAKE IN STRAPI  */}