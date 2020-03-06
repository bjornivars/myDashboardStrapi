import React, * as react from 'react';
import axios from 'axios';
import Navbar from '../components/header';
import Movies from '../components/movies';
import Facts from '../components/fact';
import Weather from '../components/weather';
import Crypto from '../components/crypto';
import {
  HEROKU_BYPASS_CORS,
  WEATHER_API,
  BITCOIN_API,
  ETHEREUM_API,
  RIPPLE_API,
  TV_API,
  TV_SEARCH_API,
  FACT_API
} from '../Constants';


export default class Dashboard extends react.Component {
  state = {
    consolidatedWeather: undefined,
    weatherCityName: undefined,

    btcData: undefined,
    ethData: undefined,
    xrpData: undefined,

    moviesData: undefined,

    factData: undefined,

    searchValue: '',
    searchedData: undefined,
  }

  componentDidMount() {
    axios.get(HEROKU_BYPASS_CORS + WEATHER_API)
      .then(result => {
        // console.log(result)
        this.setState({
          consolidatedWeather: result.data.consolidated_weather,
          weatherCityName: result.data.title,
        })
      })
    axios.get(BITCOIN_API)
      .then(btcResult => {
        // console.log(btcResult)
        this.setState({
          btcData: btcResult.data.ticker,
        })
      })
    axios.get(ETHEREUM_API)
      .then(ethResult => {
        // console.log(ethResult)
        this.setState({
          ethData: ethResult.data.ticker,
        })
      })
    axios.get(RIPPLE_API)
      .then(xrpResult => {
        // console.log(xrpResult)
        this.setState({
          xrpData: xrpResult.data.ticker,
        })
      })
    axios.get(TV_API)
      .then(moviesResult => {
        // console.log(moviesResult)
        this.setState({
          moviesData: moviesResult.data.slice(0, 4),
        })
      })
    axios.get(FACT_API)
      .then(factResult => {
        // console.log(factResult)
        this.setState({
          factData: factResult.data,
        })
      })
  }

  handleOnChange = (input) => {
    //console.log('event.target', input.target)
    this.setState({
      searchValue: input.target.value,
    })
    }


 handleOnSubmit = (event) => {
  event.preventDefault();
  console.log('Click happened');

  axios.get(TV_SEARCH_API + this.state.searchValue)
  //console.log(this.state.searchValue);
  .then(searched => {
    console.log("searched", searched)
    this.setState({
      searchedData: searched.data,
    })
  })
  .catch(error => {
    console.log('An error occurred: ', error)
  })
  }


 

  render() {
    const { consolidatedWeather, weatherCityName,
      btcData, ethData, xrpData,
      moviesData, searchedData,
      factData
    } = this.state;
    //console.log(btcData);
    return (
      <div className="Component">

        <Navbar />
        <h1 className="mb-3 headerPadding">Dashboard.js</h1>

        <div className="DashBoard container-fluid">
          <div className="row d-flex justify-content-between">
            <div className="row col-md-12 d-flex ">
              {/* Movies Card */}
              <form onSubmit={this.handleOnSubmit}>
        <input
          type="text"
          placeholder="Search for..."
          name="searchValue"
          onChange={this.handleOnChange}
          className="form-control"
        /> 
        <input type='submit' />
      </form>



      <h2 className="col-md-12 mt-5">Testing search</h2>
{
  (searchedData !== undefined) ?
  searchedData.map((value, index) => {
    let img;
    (value.show.image !== null) ? img = value.show.image.medium : img = "https://via.placeholder.com/150"; 
    return <Movies key={index}
      name={value.show.name}
      image={img}
      genres={value.show.genres[0]}
      url={value.show.url}
    />
  }) : <div>No testing results</div>
}












              <h2 className="col-md-12 mt-5">Top 4 Series this week!</h2>
              {
                (moviesData !== undefined) ?
                  moviesData.map((value, index) => {
                    return <Movies key={index}
                      name={value.name}
                      image={value.image.medium}
                      genres={value.genres[0]}
                      url={value.url}
                    />
                  }) : <div>No information for you dick</div>
              }
            </div>
          </div>

          <div className="row d-flex justify-content-between">
            <div className="row col-md-12 d-flex ">
              {/* Weather Card */}
              <h2 className="col-md-12 mt-5">Weather for {weatherCityName} the next 6 days</h2>
              {
                (consolidatedWeather !== undefined) ?
                  consolidatedWeather.map((value, index) => {
                    let icon = " ";
                    switch (value.weather_state_name) {
                      case 'Snow':
                        icon = <img className="weatherImage" src="https://www.metaweather.com/static/img/weather/sn.svg" alt="Thunderstorm" />
                        break;
                      case 'Sleet':
                        icon = <img className="weatherImage" src="https://www.metaweather.com/static/img/weather/sl.svg" alt="Thunderstorm" />
                        break;
                      case 'Hail':
                        icon = <img className="weatherImage" src="https://www.metaweather.com/static/img/weather/h.svg" alt="Thunderstorm" />
                        break;
                      case 'Thunder':
                        icon = <img className="weatherImage" src="https://www.metaweather.com/static/img/weather/t.svg" alt="Thunderstorm" />
                        break;
                      case 'Heavy Rain':
                        icon = <img className="weatherImage" src="https://www.metaweather.com/static/img/weather/hr.svg" alt="Thunderstorm" />
                        break;
                      case 'Light Rain':
                        icon = <img className="weatherImage" src="https://www.metaweather.com/static/img/weather/lr.svg" alt="Thunderstorm" />
                        break;
                      case 'Showers':
                        icon = <img className="weatherImage" src="https://www.metaweather.com/static/img/weather/s.svg" alt="Thunderstorm" />
                        break;
                      case 'Heavy Cloud':
                        icon = <img className="weatherImage" src="https://www.metaweather.com/static/img/weather/hc.svg" alt="Thunderstorm" />
                        break;
                      case 'Light Cloud':
                        icon = <img className="weatherImage" src="https://www.metaweather.com/static/img/weather/lc.svg" alt="Thunderstorm" />
                        break;
                      case 'Clear':
                        icon = <img className="weatherImage" src="https://www.metaweather.com/api/static/img/weather/c.svg" alt="Thunderstorm" />
                        break;
                      default:
                        return 'No image available';
                    }
                    return <Weather key={index}
                      applicable_date={value.applicable_date}
                      weatherStateName={value.weather_state_name}
                      icon={icon}
                      min_temp={Math.round(value.min_temp)}
                      max_temp={Math.round(value.max_temp)}
                      the_temp={Math.round(value.the_temp)}
                    />
                  }) : <div>No information for you dick</div>
              }
            </div>
          </div>

          <div className="row d-flex justify-content-between">
            <div className="row col-md-12 d-flex ">
              {/* Crypto Cards */}
              <h2 className="col-md-12 mt-5">Crypto </h2>
              {
                (btcData !== undefined) ?
                  <Crypto cryptoName={btcData.base}
                    cryptoPrice={btcData.price}
                    cryptoVolume={btcData.volume}
                  /> : <div>No crypto for you dick</div>
              }
              {
                (ethData !== undefined) ?
                  <Crypto cryptoName={ethData.base}
                    cryptoPrice={ethData.price}
                    cryptoVolume={ethData.volume}
                  /> : <div>No crypto for you dick</div>
              }
              {
                (xrpData !== undefined) ?
                  <Crypto cryptoName={xrpData.base}
                    cryptoPrice={xrpData.price}
                    cryptoVolume={xrpData.volume}
                  /> : <div>No crypto for you dick</div>
              }
            </div>
          </div>

          <div className="row d-flex justify-content-between mb-5">
            <div className="row col-md-12 d-flex ">
              {/* Facts Card */}
              <h2 className="col-md-12 mt-5">Fact of the day</h2>
              {
                (factData !== undefined) ?
                  <Facts
                    text={factData.text}
                    source={factData.source}
                    source_url={factData.source_url}
                  /> : <div>No information for you dick</div>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}