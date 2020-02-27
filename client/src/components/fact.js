import React from 'react';

const Facts = (prop) => {
    return(
        <>
        <div className="col-md-12 mb-5">
            <div className="card col-md-12">
                <div className="card-body">
                    <h5 className="card-title">{prop.factTitle}</h5>
                    <p className="card-text">{prop.factText}</p>
                </div>
            </div>
        </div>
        </>
    )
}
export default Facts;