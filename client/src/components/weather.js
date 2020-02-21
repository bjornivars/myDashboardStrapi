import React from 'react';

const Weather = (prop) => {
    return(
        <>
        <div>
                    <h2>{prop.weatherTitle}</h2>
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

        </>
    )
}
export default Weather;