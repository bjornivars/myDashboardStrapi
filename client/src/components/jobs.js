import React from 'react';

const JobCard = (prop) => {
return(
    <div>
        <h1>{prop.title}</h1>
        <img src={prop.logo} alt="Some image"/>
        <h4>{prop.location}</h4>
        <h4>{prop.how_to_apply}</h4>
    </div>
    )
};

export default JobCard; 