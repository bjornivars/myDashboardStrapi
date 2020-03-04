import React from 'react';

const Weather = (prop) => {
  return (
    <>
      <div className="col-md-3 mt-3">
        <div className="card">
          {/*<img className="card-img-top weather" src="https://image.shutterstock.com/image-vector/sun-icon-260nw-411668686.jpg" alt="Card cap" /> */}
          <div className="card-body p-3">
            <h5 className="card-title">{prop.applicable_date}</h5>
            <div className="col-md-6 mb-5 d-flex justify-content-center ">
              <span>{prop.icon}</span>
            </div>
            <ul>
              <li>Weather State Name: {prop.weatherStateName}</li>
              <li>Date: {prop.applicable_date}</li>
              <li>Location Type: {prop.location}</li>
              <li>Min Temp: {prop.min_temp}</li>
              <li>Max Temp: {prop.max_temp}</li>
              <li>The Temp: {prop.the_temp}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
export default Weather;

