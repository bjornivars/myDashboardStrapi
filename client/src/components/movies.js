import React from 'react';
import { Link } from "react-router-dom";

const Movies = (prop) => {
    return(
        <>

<div className="col-md-12 d-flex justify-content-between mb-5">
    <div className="card no-border col-md-3 ">
    <img className="card-img-top" src={prop.movieImage} alt="Card cap" />
    <div className="card-body">
        <h5 className="card-title">{prop.movieTitle}</h5>
        <p className="card-text">{prop.movieText}</p>
        <p className="card-text">{prop.movieGenre}</p>
        <Link className="btn btn-primary" to="#">Watch</Link>
    </div>
    </div>

    <div className="card no-border col-md-3 ">
    <img className="card-img-top" src={prop.movieImage} alt="Card cap" />
    <div className="card-body">
        <h5 className="card-title">{prop.movieTitle}</h5>
        <p className="card-text">{prop.movieText}</p>
        <p className="card-text">{prop.movieGenre}</p>
        <Link className="btn btn-primary" to="#">Watch</Link>
    </div>
    </div>

    <div className="card no-border col-md-3 ">
    <img className="card-img-top" src={prop.movieImage} alt="Card cap" />
    <div className="card-body">
        <h5 className="card-title">{prop.movieTitle}</h5>
        <p className="card-text">{prop.movieText}</p>
        <p className="card-text">{prop.movieGenre}</p>
        <Link className="btn btn-primary" to="#">Watch</Link>
    </div>
    </div>

</div>






           
    </>
    );
}

export default Movies;

