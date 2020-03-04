import React, * as react from 'react';
import Header from '../components/header';
import Profile from '../components/profile';
import axios from 'axios';
import { STRAPI_API } from '../Constants';


export default class ProfileSpecific extends react.Component {
  state = {
    profile: undefined,
    name: "no name yet",
    age: undefined,
    email: undefined,
  }

  componentDidMount(){
    axios.get(STRAPI_API)
    .then(result => {
      console.log(result)
    this.setState({
      profile: result.data,
      name: result.data.Name,
      age: result.data.Age,
      email: result.data.Email,

    })
  })
  }
  render() {
    const {profile, name, age, email,
    
    } = this.state;
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
          console.log(profile[0].id);
          return <Profile key={index}
              profileTitle={name}
              age={age}
              email={email}
            /> 
        }) :
        <div>No Information</div>
      }
        </div>
    );
  }
}