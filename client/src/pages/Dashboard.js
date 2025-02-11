import React, * as react from 'react';
import axios from 'axios';
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
import Movies from '../components/movies';
import Facts from '../components/fact';
import Weather from '../components/weather';
import Crypto from '../components/crypto';

export default class Dashboard extends react.Component {

  state = {
    consolidatedWeather: undefined,
    weatherCityName: undefined,

    btcData: undefined,
    ethData: undefined,
    xrpData: undefined,

    moviesData: undefined,

    movieHeading: 'Search for show by name',
    searchValue: '',
    searchedData: undefined,
    searchResultName: "",

    factData: undefined,
    factDay: new Date().getDate(),
    factMonth: new Date().getMonth() + 1,

    showArrow: undefined,

    userName: window.sessionStorage.getItem("user"),
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
    axios.get(HEROKU_BYPASS_CORS + FACT_API + this.state.factMonth + '/' + this.state.factDay + '/date')
      .then(factResult => {
        // console.log(this.state.factMonth)
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
          searchResultName: `Results for "${this.state.searchValue}"`,
          showArrow: '',

        })
      })
  }



  render() {
    const { consolidatedWeather, weatherCityName,
      btcData, ethData, xrpData,
      moviesData, searchedData, movieHeading,
      factData, searchResultName, showArrow,
      userName,
    } = this.state;
    //console.log(btcData);
    return (
      <div className="Component">
        <h1 className="mb-5 headerPadding">Welcome back, {userName}</h1>
        <div className="DashBoard container-fluid">
          <div className="row d-flex justify-content-between">
            <div className="row col-md-12 d-flex ">
              {/* Movies Card */}
              <h2 className="col-md-12 mt-3 mb-3">{movieHeading}</h2>
              <div className="row col-md-12 d-flex ">
                <form onSubmit={this.handleOnSubmit} className="d-flex justify-content-center search-form" >
                  <input
                    type="text"
                    placeholder="Search for..."
                    name="searchValue"
                    onChange={this.handleOnChange}
                    className="form-control "
                  />
                  <input type='submit' className="btn btn-primary" />
                </form>
              </div>
              <div className="mt-3 padding-l-15">{searchResultName}</div>

              <div className="row d-flex searchResult">
                {
                  showArrow !== undefined && <div><i className="fas fa-chevron-circle-right test"></i></div>
                }

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
                    }) : <div className="col-md-12"><p>No search results</p></div>
                }
              </div>
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
                  }) :
                  <div className="d-flex justify-content-center col-md-3">
                    <img src='https://flevix.com/wp-content/uploads/2019/07/Bubble-Preloader-1.gif' alt="loading" />
                  </div>
              }
            </div>
          </div>

          <div className="row d-flex justify-content-between">
            <div className="row col-md-12 d-flex ">
              {/* Weather Card */}
              <h2 className="col-md-12 mt-5">Weather in {weatherCityName} the next 6 days</h2>
              {
                (consolidatedWeather !== undefined) ?
                  consolidatedWeather.map((value, index) => {
                    let icon = " ";
                    switch (value.weather_state_name) {
                      case 'Snow':
                        icon = <img className="weatherImage" src="https://www.metaweather.com/static/img/weather/sn.svg" alt="Snow" />
                        break;
                      case 'Sleet':
                        icon = <img className="weatherImage" src="https://www.metaweather.com/static/img/weather/sl.svg" alt="Sleet" />
                        break;
                      case 'Hail':
                        icon = <img className="weatherImage" src="https://www.metaweather.com/static/img/weather/h.svg" alt="Hail" />
                        break;
                      case 'Thunder':
                        icon = <img className="weatherImage" src="https://www.metaweather.com/static/img/weather/t.svg" alt="Thunder" />
                        break;
                      case 'Heavy Rain':
                        icon = <img className="weatherImage" src="https://www.metaweather.com/static/img/weather/hr.svg" alt="Heavy Rain" />
                        break;
                      case 'Light Rain':
                        icon = <img className="weatherImage" src="https://www.metaweather.com/static/img/weather/lr.svg" alt="Light Rain" />
                        break;
                      case 'Showers':
                        icon = <img className="weatherImage" src="https://www.metaweather.com/static/img/weather/s.svg" alt="Showers" />
                        break;
                      case 'Heavy Cloud':
                        icon = <img className="weatherImage" src="https://www.metaweather.com/static/img/weather/hc.svg" alt="Heavy Cloud" />
                        break;
                      case 'Light Cloud':
                        icon = <img className="weatherImage" src="https://www.metaweather.com/static/img/weather/lc.svg" alt="Light Cloud" />
                        break;
                      case 'Clear':
                        icon = <img className="weatherImage" src="https://www.metaweather.com/static/img/weather/c.svg" alt="Clear" />
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
                  }) :
                  <div className="d-flex justify-content-center col-md-3">
                    <img src='https://flevix.com/wp-content/uploads/2019/07/Bubble-Preloader-1.gif' alt="loading" />
                  </div>
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
                  /> :
                  <div className="d-flex justify-content-center col-md-3">
                    <img className='w-100' src='https://flevix.com/wp-content/uploads/2019/07/Bubble-Preloader-1.gif' alt="loading" />
                  </div>
              }
              {
                (ethData !== undefined) ?
                  <Crypto cryptoName={ethData.base}
                    cryptoPrice={ethData.price}
                    cryptoVolume={ethData.volume}
                  /> :
                  <div className="d-flex justify-content-center col-md-3">
                    <img className='w-100' src='https://flevix.com/wp-content/uploads/2019/07/Bubble-Preloader-1.gif' alt="loading" />
                  </div>
              }
              {
                (xrpData !== undefined) ?
                  <Crypto cryptoName={xrpData.base}
                    cryptoPrice={xrpData.price}
                    cryptoVolume={xrpData.volume}
                  /> :
                  <div className="d-flex justify-content-center col-md-3">
                    <img className='w-100' src='https://flevix.com/wp-content/uploads/2019/07/Bubble-Preloader-1.gif' alt="loading" />
                  </div>
              }
            </div>
          </div>

          <div className="row d-flex justify-content-between mb-5">
            <div className="row col-md-12 d-flex ">
              {/* Facts Card */}
              <h2 className="col-md-12 mt-5">What happened on this date in history?</h2>
              {
                (factData !== undefined) ?
                  <Facts
                    text={factData}
                  /> :
                  <div className="d-flex col-md-3">
                    <img className='w-100' src='https://flevix.com/wp-content/uploads/2019/07/Bubble-Preloader-1.gif' alt="loading" />
                  </div>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}