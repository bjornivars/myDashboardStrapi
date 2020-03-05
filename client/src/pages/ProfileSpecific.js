import React, * as react from 'react';
import Header from '../components/header';
import Profile from '../components/profile';
import axios from 'axios';
import { STRAPI_PROFILE_API } from '../Constants';


export default class ProfileSpecific extends react.Component {
  state = {
    profile: undefined,
  }

  componentDidMount() {
    axios.get(STRAPI_PROFILE_API)
      .then(result => {
        console.log(result)
        this.setState({
          profile: result.data,
        })
      })
  }
  render() {
    const { profile } = this.state;
    console.log(profile);
    return (
      <div className="ProfileSpecific">

        <Header />

        <h1 className="text-center pt-8 mb-5">My Profile</h1>
        {
          (profile !== undefined) ?
            profile.map((value, index) => {
              return <Profile key={index}
                profileTitle={value.Name}
                age={value.Age}
                skills={value.Skills}
                email={value.Email}
                Image={'http://localhost:1337/' + value.ImageOfMe.url}
              />
            }) :
            <div>No Information</div>
        }
      </div>
    );
  }
}