import React from 'react';

const Movies = (prop) => {
    return(
        <>

<div className="col-md-12 d-flex justify-content-between mb-5">
    <div className="card col-md-3 ">
    <img className="card-img-top" src={prop.movieImage} alt="Card image cap" />
    <div className="card-body">
        <h5 className="card-title">{prop.movieTitle}</h5>
        <p className="card-text">{prop.movieText}</p>
        <p className="card-text">{prop.movieGenre}</p>
        <a href="#" className="btn btn-primary">Watch</a>
    </div>
    </div>

    <div className="card col-md-3 ">
    <img className="card-img-top" src={prop.movieImage} alt="Card image cap" />
    <div className="card-body">
        <h5 className="card-title">{prop.movieTitle}</h5>
        <p className="card-text">{prop.movieText}</p>
        <p className="card-text">{prop.movieGenre}</p>
        <a href="#" className="btn btn-primary">Watch</a>
    </div>
    </div>

    <div className="card col-md-3 ">
    <img className="card-img-top" src={prop.movieImage} alt="Card image cap" />
    <div className="card-body">
        <h5 className="card-title">{prop.movieTitle}</h5>
        <p className="card-text">{prop.movieText}</p>
        <p className="card-text">{prop.movieGenre}</p>
        <a href="#" className="btn btn-primary">Watch</a>
    </div>
    </div>

</div>






           
    </>
    );
}

export default Movies;


{/* 
    http://api.tvmaze.com/singlesearch/shows?q=sons%20of%20anarachy
*/}

{/* 
        <input type="text" placeholder="Search.." />

            <div classNameName="">
                <img src={prop.movieImage} alt="movie image" />
                <h3>{prop.movieTitle}</h3>
                <ul>
                    <li>{prop.genre}</li>
                </ul>
            </div>
 */}