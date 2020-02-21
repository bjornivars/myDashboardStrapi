import React from 'react';

const Facts = (prop) => {
    return(
        <>
        <div>
            <h2>{prop.factTitle}</h2>
            <p>{prop.fact}</p>
        </div>

        </>
    )
}
export default Facts;