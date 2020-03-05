import React, * as react from 'react';
import axios from 'axios';
import Header from '../components/header';
import JobCard from '../components/jobs';
import { HEROKU_BYPASS_CORS } from '../Constants';
import { JOBS_API } from '../Constants';

export default class JobSpecific extends react.Component {

  state = {
    allJobs: undefined,
  }

  componentDidMount() {
    axios.get(HEROKU_BYPASS_CORS + JOBS_API)
      .then(result => {
        console.log(result)
        this.setState({
          allJobs: result.data,
        })
      })
  }

  render() {
    const { allJobs } = this.state;
    // console.log(allJobs);
    return (
      <div className="JobSpecific">
        <Header dashboardlink={'Dashboard'}
          bloglink={'Blog'}
          joblink={'Jobs'}
          profilelink={'Profile'}
          login={'Login'}
        />

<div className="container-fluid">
<div className="row d-flex justify-content-between">
            <div className="row col-md-12 d-flex ">
              {/* Jobs Card */}
              <h2 className="col-md-12 headerPadding">Jobs Mr. Worldwide</h2>
              {
                (allJobs !== undefined) ?
                  allJobs.map((value, index) => {
                    return <JobCard key={index}
                      title={value.title}
                      company_logo={value.company_logo}
                      company={value.company}
                      type={value.type}
                      location={value.location}
                      description={value.description}
                      company_url={value.company_url}
                    />
                  }) : <div>No information for you dick</div>
              }
            </div>
          </div>
      </div>
</div>


    );
  }
}