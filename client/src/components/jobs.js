import React from 'react';
import {Link} from "react-router-dom";

const JobCard = (prop) => {
return(


<div className="container">

<div className="col-md-12 d-flex justify-content-between mb-5">
    <div className="card col-md-3 ">
    <img className="card-img-top" src={prop.jobLogo} alt="Card cap" />
    <div className="card-body">
        <h5 className="card-title">{prop.jobTitle}</h5>
        <p className="card-text">{prop.jobLocation}</p>
        <Link  className="btn btn-primary" to="#">{prop.how_to_apply}</Link>
    </div>
    </div>

    <div className="card col-md-3 ">
    <img className="card-img-top" src={prop.jobLogo} alt="Card cap" />
    <div className="card-body">
        <h5 className="card-title">{prop.jobTitle}</h5>
        <p className="card-text">{prop.jobLocation}</p>
        <Link  className="btn btn-primary" to="#">{prop.how_to_apply}</Link>
    </div>
    </div>

    <div className="card col-md-3 ">
    <img className="card-img-top" src={prop.jobLogo} alt="Card cap" />
    <div className="card-body">
        <h5 className="card-title">{prop.jobTitle}</h5>
        <p className="card-text">{prop.jobLocation}</p>
        <Link className="btn btn-primary" to="#">{prop.how_to_apply}</Link>
    </div>
    </div>

</div>

</div>

    )
};

export default JobCard; 

