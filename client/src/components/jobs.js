import React from 'react';

const JobCard = (prop) => {
return(




<div className="col-md-12 d-flex justify-content-between mb-5">
    <div className="card col-md-3 ">
    <img className="card-img-top" src={prop.jobLogo} alt="Card image cap" />
    <div className="card-body">
        <h5 className="card-title">{prop.jobTitle}</h5>
        <p className="card-text">{prop.jobLocation}</p>
        <a href="#" className="btn btn-primary">{prop.how_to_apply}</a>
    </div>
    </div>

    <div className="card col-md-3 ">
    <img className="card-img-top" src={prop.jobLogo} alt="Card image cap" />
    <div className="card-body">
        <h5 className="card-title">{prop.jobTitle}</h5>
        <p className="card-text">{prop.jobLocation}</p>
        <a href="#" className="btn btn-primary">{prop.how_to_apply}</a>
    </div>
    </div>

    <div className="card col-md-3 ">
    <img className="card-img-top" src={prop.jobLogo} alt="Card image cap" />
    <div className="card-body">
        <h5 className="card-title">{prop.jobTitle}</h5>
        <p className="card-text">{prop.jobLocation}</p>
        <a href="#" className="btn btn-primary">{prop.how_to_apply}</a>
    </div>
    </div>

</div>



    )
};

export default JobCard; 


{/*
    https://jobs.github.com/positions.json?description=react&location=oslo
*/}