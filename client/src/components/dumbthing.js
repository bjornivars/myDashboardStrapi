import React from 'react';

const DumbThing = (props) => {
    return(
        <>

        <h2>{props.subheading}</h2>
        <img src={props.imageMe} alt={'image of me'} style={imageStyle} />
        <p>{props.blurbMe}</p>
        </>
    )
}

// Add styling to image
const imageStyle = {
    width: '30%',
    margin: 'auto'
};

export default DumbThing;