import React, { Component } from 'react';
import Header from '../components/header';
import Movies from '../components/movies';
import Facts from '../components/fact';
import Weather from '../components/weather';
import Crypto from '../components/crypto';






export default class Dashboard extends Component {



  render() {
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
            <Crypto cryptoTitle={'Crypto'}
                  cryptoBTC={'BTC'}
                  BTCprice={'1102020543253464575'}
                  BTCvolume={'324567875645.413254365'}
                  cryptoETH={'ETH'}
                  ETHprice={'12345'}
                  ETHvolume={'65.413254365'}
                  cryptoXRP={'XRP'}
                  XRPprice={'5234365476'}
                  XRPvolume={'524365'}
/>
            {/* Random fact Card */}
            <Facts factTitle={'Random Fact Of The Day'}
                  factText={'geriojfoigjnrejg jgeroijngverijngdjk gruengiernl'}
/>

          </div> {/* col-md-8 */}


<div className="row col-md-4">

            {/* Weather Card */}
            <Weather weatherTitle={'weatherTitle'}
                  weatherStateName={'weatherStateName'}
                  weatherStateAbbr={'weatherStateAbbr'}
                  weatherCreated={'weatherCreated'}
                  weatherapplicableDate={'weatherapplicableDate'}
                  weatherMinTemp={'weatherMinTemp'}
                  weatherMaxTemp={'weatherMaxTemp'}
                  weatherTheTemp={'weatherTheTemp'}
                  weatherWindSpeed={'weatherWindSpeed'}
                  weatherWindDirection={'weatherWindDirection'}
                  weatherAirPressure={'weatherAirPressure'}
                  weatherHumidity={'weatherHumidity'}
                  weatherVisibility={'weatherVisibility'}
                  weatherPredictability={'weatherPredictability'}
/>
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