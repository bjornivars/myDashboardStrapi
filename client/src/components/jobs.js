import React from 'react';
import { Link } from 'react-router-dom';


const JobCard = (props) => {
    const { company_logo, title, company, type, location, id, company_url } = props;
    return (
        <div className="col-md-3 mt-4 ">
            <div className="card">
                <div className="job__image" style={{ backgroundImage: "url(" + company_logo + ")" }}></div>
                <div className="card-body p-3">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">Company: {company}</p>
                    <p className="card-text">Position: {type}</p>
                    <p className="card-text">Location: {location}</p>
                    <div className='d-flex justify-content-between'>
                        <Link className="btn btn-primary" to={`/jobs-specific/${id}`}>Read More</Link>
                        <a className="btn btn-primary" href={company_url} target="_blank" rel="noopener noreferrer">Company website</a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default JobCard;

