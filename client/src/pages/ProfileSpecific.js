import React, { Component } from 'react';
import Header from '../components/header';
import Profile from '../components/profile';




export default class ProfileSpecific extends Component {
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
        <div className="ProfileSpecific">

        <Header dashboardlink={'Dashboard'} 
                bloglink={'Blog'}
                joblink={'Jobs'}
                profilelink={'Profile'}
                logout={'Logout'}
        />


<h1 className="text-center headerPadding mb-5">ProfileSpecific.js</h1>

        {
        (this.state.profile !== undefined) ?
          <Profile 
              profileTitle={this.state.profile[0].Bjornivar}
              profileText={this.state.profile[0].Skills}
            /> :
            <div>No Information</div>
      }
        </div>
    );
  }
}