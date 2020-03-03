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
        <li>Latitude and longitude: {prop.latitudeLongitude}</li>
        <li>Location Type: {prop.location}</li>
    </ul>
  </div>
</div>
</div>


        </>
    )
}
export default Weather;

