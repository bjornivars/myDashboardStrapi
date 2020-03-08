import React from 'react';

const Facts = (prop) => {
    return (
        <>
            <div className="col-md-12 mt-4">
                <div className="card col-md-12">
                    <div className="card-body">
                        <h5 className="card-title">{prop.text}</h5>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Facts;