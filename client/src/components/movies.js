import React from 'react';

const Movies = (prop) => {
    return(
        <>
        <input type="text" placeholder="Search.." />

            <div>
                <img src={prop.movieImage} alt="movie image" />
                <h3>{prop.movieTitle}</h3>
                <ul>
                    <li>{prop.genre}</li>
                </ul>
            </div>
    </>
    );
}

export default Movies;
