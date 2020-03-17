import React from 'react';

const StarWarsCard = ({ name, gender, height, birth_year }) => {
    return (
        <div className="col-md-3 mt-4 ">
            <div className="card">
                <div className="card-body p-3">
                    <h5 className="blog__heading"> {name} </h5>
                    <p>Gender: {gender}</p>
                    <p>Height: {height}</p>
                    <p>Birth Year: {birth_year}</p>
                </div>
            </div>
        </div>
    )
}

export default StarWarsCard;