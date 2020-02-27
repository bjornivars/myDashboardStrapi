import React, { Component } from 'react';
import Header from '../components/header';
import JobCard from '../components/jobs';

export default class JobSpecific extends Component {
  render() {
    return (
        <div className="JobSpecific">
                <Header dashboardlink={'Dashboard'} 
                bloglink={'Blog'}
                joblink={'Jobs'}
                profilelink={'Profile'}
                logout={'Logout'}
        />

<h1 className="text-center mt-5 mb-5">JobSpecific.js</h1>

          <JobCard jobTitle={"Some job for now"}
                jobLogo={'https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png'}
                jobLocation={'location will stay here'}
                how_to_apply={ 'Apply here '}
                />
                        <JobCard jobTitle={"Some job for now"}
                jobLogo={'https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png'}
                jobLocation={'location will stay here'}
                how_to_apply={ 'Apply here '}
                />
                          <JobCard jobTitle={"Some job for now"}
                jobLogo={'https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png'}
                jobLocation={'location will stay here'}
                how_to_apply={ 'Apply here '}
                />
        </div>



    );
  }
}