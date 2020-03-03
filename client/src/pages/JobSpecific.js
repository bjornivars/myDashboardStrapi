import React, * as react from 'react';
import axios from 'axios';
import Header from '../components/header';
import JobCard from '../components/jobs';
import {HEROKU_BYPASS_CORS} from '../Constants';
import {JOBS_API} from '../Constants';

export default class JobSpecific extends react.Component {

  state = {
    allJobs: undefined,
    jobId: undefined,
    jobLogo: "there is no logo for this company",
    jobTitle: "no title yet",
    jobDescription: "no description yet"

  }

  componentDidMount(){
    axios.get(HEROKU_BYPASS_CORS + JOBS_API)
    .then(result => {
      console.log(result)
      this.setState({
        allJobs: result.data,
        jobId: result.data.id,
        jobLogo: "no logo",
        jobTitle: result.data.title,
        jobDescription: result.data.description,
      })
    })
  }

  render() {
    const {allJobs, jobId, jobTitle, jobDescription} = this.state;
    console.log(jobId);
    return (
        <div className="JobSpecific">
                <Header dashboardlink={'Dashboard'} 
                bloglink={'Blog'}
                joblink={'Jobs'}
                profilelink={'Profile'}
                logout={'Logout'}
        />
<h1 className="text-center headerPadding mb-5">JobSpecific.js</h1>

            {
              (allJobs !== undefined) ?
              allJobs.map((value, index) => {
                return  <JobCard key={index}
                jobTitle={jobTitle}
                jobLogo={'https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png'}
                jobDescription={jobDescription}
                how_to_apply={ 'Apply here '}
                />
              })
              : 
              <div>No information for you dick</div>

            }

        </div>



    );
  }
}