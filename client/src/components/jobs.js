import React from 'react';

const JobCard = (props) => {
    return (


        <div className="col-md-3 mt-4 ">
        <div className="card">
            <img className="card-img-top companyLogo" src={props.company_logo} alt="Card cap" />
            <div className="card-body p-3">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">Company: {props.company}</p>
                <p className="card-text">Position: {props.type}</p>
                <p className="card-text">Location: {props.location}</p>
                <a className="btn btn-primary" href={props.company_url} target="_blank" rel="noopener noreferrer">Company website</a>
            </div>
        </div>
    </div>

    )
};

export default JobCard;

