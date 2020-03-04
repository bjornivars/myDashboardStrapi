import React, * as react from 'react';
import Header from '../components/header';
import Profile from '../components/profile';
import axios from 'axios';
import { STRAPI_API } from '../Constants';


export default class ProfileSpecific extends react.Component {
  state = {
    profile: undefined,
  }

  componentDidMount() {
    axios.get(STRAPI_API)
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

        <Header dashboardlink={'Dashboard'}
          bloglink={'Blog'}
          joblink={'Jobs'}
          profilelink={'Profile'}
          logout={'Logout'}
        />

        <h1 className="text-center headerPadding mb-5">ProfileSpecific.js</h1>
        {
          (profile !== undefined) ?
            profile.map((value, index) => {
              return <Profile key={index}
                profileTitle={value.Name}
                age={value.Age}
                skills={value.Skills}
                email={value.Email}
              />
            }) :
            <div>No Information</div>
        }
      </div>
    );
  }
}