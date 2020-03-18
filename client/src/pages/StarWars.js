import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { HEROKU_BYPASS_CORS, STAR_WARS_API } from './../Constants';

import StarWarsCard from './../components/starWarsCard';

export default function StarWars() {
  const [characters, setCharacters] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);

  //componentDidMount
  useEffect(() => {
    axios.get(HEROKU_BYPASS_CORS + STAR_WARS_API)
      .then((result) => {
        setCharacters(result.data.results);
        setIsLoading(false)
      })
  }, [])

  return (
    (isLoading) ?
      <div className="col-md-4 d-flex  justify-content-center m-auto">
        <img className='w-100' src='https://flevix.com/wp-content/uploads/2019/07/Bubble-Preloader-1.gif' alt="loading" />
      </div> :
      <div>
        <div className="col-md-12 ">
          <h1 className='headerPadding text-center'>Star Wars</h1>
          <div className='d-flex justify-content-start wrap'>
            {
              (characters !== undefined) ?
                characters.map((value, index) => {
                  return <StarWarsCard key={index}
                    url={value.url}
                    name={value.name}
                    gender={value.gender}
                    height={value.height}
                    birth_year={value.birth_year}
                  />
                }) :
                <div>No Data</div>
            }
          </div>
        </div>
      </div>
  );
}