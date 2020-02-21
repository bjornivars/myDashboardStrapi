import React from 'react';

const Heading = (props) => {
    console.log(props);

    return(
        <>
            <h1>{props.heading}</h1>
            <img src={props.image} alt={'image of Cam'}/>
            <p>{props.blurb}</p>

        </>
    )
}

export default Heading;
