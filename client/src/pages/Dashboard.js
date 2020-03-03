import React, * as react from 'react';
import axios from 'axios';
import Header from '../components/header';
import Movies from '../components/movies';
import Facts from '../components/fact';
import Weather from '../components/weather';
import Crypto from '../components/crypto';
import {HEROKU_BYPASS_CORS,
        WEATHER_API,
        BITCOIN_API,
        ETHEREUM_API,
        RIPPLE_API
} from '../Constants';


export default class Dashboard extends react.Component {
  state = {
    consolidatedWeather: undefined,
    weatherCityName: undefined,
    lattLong: "no data yet Lattlong",
    locationType: undefined,

    bitcoinData: undefined,
    btcTitle: "No name defined",
    btcPrice: undefined,
    btcVolume: undefined,


    ethData: undefined,
    ethTitle: "no name defined",
    ethPrice: undefined,
    ethVolume: undefined,

    xrpData: undefined,
    xrpTitle: undefined,
    xrpPrice: undefined,
    xrpolume: undefined,
  }
  
  componentDidMount(){
    axios.get(HEROKU_BYPASS_CORS + WEATHER_API)
    .then(result => {
      console.log(result)
    this.setState({
      consolidatedWeather: result.data.consolidated_weather,
      weatherCityName: result.data.title,
      lattLong: result.data.latt_long,
      locationType: result.data.location_type,
    })
  })
  axios.get(BITCOIN_API)
  .then(bitcoinResult => {
   // console.log(bitcoinResult)
  this.setState({
    bitcoinData: bitcoinResult,
    btcTitle: bitcoinResult.data.ticker.base,
    btcPrice: bitcoinResult.data.ticker.price,
    btcVolume: bitcoinResult.data.ticker.volume,

  })
})
axios.get(ETHEREUM_API)
.then(ethResult => {
 // console.log(ethResult)
this.setState({
  ethData: ethResult,
  ethTitle: ethResult.data.ticker.base,
  ethPrice: ethResult.data.ticker.price,
  ethVolume: ethResult.data.ticker.volume,

})
})
axios.get(RIPPLE_API)
.then(xrpResult => {
 // console.log(xrpResult)
this.setState({
  xrpData: xrpResult,
  xrpTitle: xrpResult.data.ticker.base,
  xrpPrice: xrpResult.data.ticker.price,
  xrpVolume: xrpResult.data.ticker.volume,

})
})
  }

  render() {
    const {consolidatedWeather, weatherCityName, lattLong, locationType, 
          bitcoinData, btcTitle, btcPrice, btcVolume,
          ethData, ethTitle, ethPrice, ethVolume,
          xrpData, xrpTitle, xrpPrice, xrpVolume,
        
        } = this.state;
    console.log(consolidatedWeather);
    return (
      <div className="Component">

        <Header dashboardlink={'Dashboard'} 
                bloglink={'Blog'}
                joblink={'Jobs'}
                profilelink={'Profile'}
                logout={'Logout'}
        />
        <h1 className="mb-3 headerPadding">Dashboard.js</h1>

        <div className="DashBoard container-fluid d-flex justify-content-between">
          <div className="row col-md-8">
            {/* Movies Card */}
            <Movies movieImage={'https://via.placeholder.com/640x360'}
                  movieTitle={"Static movie title"}
                  movieText={'Static movie text for now is great gusto mucho'}
                  movieGenre={"Static genre"}
/>
            {/* Crypto Card */}
            {
              (bitcoinData !== undefined || ethData !== undefined || xrpData !== undefined) ? 
              <Crypto cryptoTitle={'Crypto'}
                  cryptoBTC={btcTitle}
                  BTCprice={btcPrice}
                  BTCvolume={btcVolume}
                  cryptoETH={ethTitle}
                  ETHprice={ethPrice}
                  ETHvolume={ethVolume}
                  cryptoXRP={xrpTitle}
                  XRPprice={xrpPrice}
                  XRPvolume={xrpVolume}
/>  : <div>Shit not working </div>
            }

            {/* Random fact Card */}
            <Facts factTitle={'Random Fact Of The Day'}
                  factText={'geriojfoigjnrejg jgeroijngverijngdjk gruengiernl'}
/>

          </div> {/* col-md-8 */}


<div className="row col-md-4">

            {/* Weather Card */}
            {
              (consolidatedWeather !== undefined) ?
              consolidatedWeather.map((value, index) => {
               return <Weather key={index}
                  weatherTitle={weatherCityName}
                  latitudeLongitude={lattLong}
                  location={locationType}
/>
              }) : 
              <div>No information for you dick</div>

            }
</div>



        </div>


{/*
      {
        (this.state.profile !== undefined) ?
          <Profile 
              profileTitle={this.state.profile[0].Bjornivar}
              profileText={this.state.profile[0].Skills}
            /> :
            <div>No Information</div>
      }
*/}


              
      </div>

    );
  }
}