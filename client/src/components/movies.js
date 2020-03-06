import React from 'react';
import {Link} from 'react-router-dom';

const Movies = (props) => {
    // console.log(props)
    return (
        <>
            <div className="col-md-3 mt-3 moviesCard">
                <div className="card">
                    <img className="card-img-top" src={props.image} alt="Card cap" />
                    <div className="card-body p-3">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">{props.summary}</p>
                        <p className="card-text">{props.genres}</p>
                        <div className="d-flex justify-content-between">
                        <Link className="btn btn-primary" to={'/movie-specific/$(id)'} target="_blank" rel="noopener noreferrer">Read more</Link>
                        <a className="btn btn-primary" href={props.url} target="_blank" rel="noopener noreferrer">Watch</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Movies;

