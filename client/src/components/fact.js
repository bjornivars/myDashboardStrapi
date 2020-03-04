import React from 'react';

const Facts = (prop) => {
    return (
        <>
            <div className="col-md-12 mt-4">
                <div className="card col-md-12">
                    <div className="card-body">
                        <h5 className="card-title">{prop.text}</h5>
                        <p className="card-text">Fact found at: <u><b>{prop.source}</b></u></p>
                        <a className="card-text" href={prop.source_url} target="_blank" rel="noopener noreferrer">{prop.source_url}</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Facts;