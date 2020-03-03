import React from 'react';

const Weather = (prop) => {
    return(
        <>
<div className="col-md-12">
<div className="card">
  <img className="card-img-top weather" src="https://image.shutterstock.com/image-vector/sun-icon-260nw-411668686.jpg" alt="Card cap" />
  <div className="card-body">
    <h5 className="card-title">{prop.weatherTitle}</h5>
    <ul>
        <li>{prop.weatherId}</li>
        <li>{prop.weatherStateName}</li>
        <li>{prop.weatherStateAbbr}</li>
        <li>{prop.weatherCreated}</li>
        <li>{prop.weatherapplicableDate}</li>
        <li>{prop.weatherMinTemp}</li>
        <li>{prop.weatherMaxTemp}</li>
        <li>{prop.weatherTheTemp}</li>
        <li>{prop.weatherWindSpeed}</li>
        <li>{prop.weatherWindDirection}</li>
        <li>{prop.weatherAirPressure}</li>
        <li>{prop.weatherHumidity}</li>
        <li>{prop.weatherVisibility}</li>
        <li>{prop.weatherPredictability}</li>
    </ul>
  </div>
</div>
</div>


        </>
    )
}
export default Weather;

