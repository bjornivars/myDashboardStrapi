import React, { Component } from 'react';
import Header from '../components/header';
import Movies from '../components/movies';
import Facts from '../components/fact';
import Weather from '../components/weather';
import Crypto from '../components/crypto';
import JobCard from '../components/jobs';
import Blog from '../components/blog';
import Profile from '../components/profile';
import Login from '../components/login';





export default class Dashboard extends Component {

  state = {
    profile: undefined
  }

  componentDidMount(){
    fetch("http://localhost:1337/Bjornivars")
    .then(response => {return response.json()})
    .then(result => {
      this.setState({
        profile: result
      })
    });


  }

  render() {
    console.log("this.state.profiles", this.state.profile)
    return (
      <div className="Component">

        <Header dashboardlink={'Dashboard'} 
                bloglink={'Blog'}
                joblink={'Jobs'}
                logout={'Logout'}
        />
        <h1>Dashboard.js</h1>

        <div className="DashBoard">
            {/* Movies Card */}
             <Movies movieImage={'https://via.placeholder.com/640x360'}
                  movieTitle={"Static movie title"}
                  genre={"Static genre"}
/>
            {/* Random fact Card */}
                <Facts factTitle={'Random Fact Of The Day'}
                  fact={'geriojfoigjnrejg jgeroijngverijngdjk gruengiernl'}
/>
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
        </div>

        <JobCard title={"Static for now"}
                logo={'https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png'}
                location={'location will stay here'}
                how_to_apply={ 'Apply here '}
/>
        <Blog blogTitle={'Blog title'}
              blogText={'blogText'}
/>
      {
        (this.state.profile !== undefined) ?
          <Profile 
              profileTitle={this.state.profile[0].Bjornivar}
              profileText={this.state.profile[0].Skills}
            /> :
            <div>No Information</div>
      }

        <Login loginTitle={'Login title'}
              loginText={'HERE WILL BE LOGIN'}
/>               
      </div>

    );
  }
}