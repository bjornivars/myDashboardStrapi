import React, * as react from 'react';
import axios from 'axios';
import { HEROKU_BYPASS_CORS } from '../Constants';
import { JOBS_API } from '../Constants';
import JobCard from '../components/jobs';

export default class Job extends react.Component {

  state = {
    jobResults: undefined,

    filteredResults: [],
    isResultsFiltered: false,
    searchPhrase: '',
  }

  componentDidMount() {
    axios.get(HEROKU_BYPASS_CORS + JOBS_API)
      .then(result => {
        console.log(result)
        this.setState({
          jobResults: result.data,
        })
      })
  }

  handleFiltering = (input) => {
    const { jobResults } = this.state
    let filteredJobPosts = jobResults.filter((value) => {
      return value.title.toLowerCase().includes((input.target.value).toLowerCase())
    })
    this.setState({
      filteredResults: filteredJobPosts,
      searchPhrase: input.target.value,
      isResultsFiltered: true
    })
  }


  render() {
    const { jobResults, isResultsFiltered, searchPhrase, filteredResults } = this.state;
    console.log(jobResults);
    return (
      <div className="Job">
        <div className="container-fluid">
          <div className="row d-flex justify-content-between">
            <div className="row col-md-12 d-flex ">
              {/* Jobs Card */}
              <h1 className="col-md-12 headerPadding">Jobs Mr. Worldwide</h1>
              <form className='col-md-6'>
          <p>Search for a Job</p>
          <input type='text'
            name='username'
            onChange={this.handleFiltering}
            className="form-control"
          />
          <br />
          <br />
        </form>
        <div className=" d-flex justify-content-between wrap">
          {
            (isResultsFiltered) ?
              <div className="col-md-12 ">
                <h1>Filtered Results for {searchPhrase}</h1>
                <div className='d-flex justify-content-start wrap'>
                  {
                    (filteredResults.length > 0) ?
                      filteredResults.map((value, index) => {
                        return <JobCard key={index}
                      id={value.id}
                      title={value.title}
                      company_logo={value.company_logo}
                      company={value.company}
                      type={value.type}
                      location={value.location}
                      description={value.description}
                      company_url={value.company_url}
                    />
                      }) :
                      <div>No Results</div>
                  }
                </div>
              </div> : <>
                {
                  (jobResults !== undefined) ?
                  jobResults.map((value, index) => {
                    return <JobCard key={index}
                      id={value.id}
                      title={value.title}
                      company_logo={value.company_logo}
                      company={value.company}
                      type={value.type}
                      location={value.location}
                      description={value.description}
                      company_url={value.company_url}
                    />
                    }) : 
                    <div className="col-md-12"><p>No information to show yet</p></div>
                }
              </>
          }
        </div> 
             
             
             
             
             
             
{/* 

              {
    (jobResults !== undefined) ?
      jobResults.map((value, index) => {
        return <JobCard key={index}
          title={value.title}
          company_logo={value.company_logo}
          company={value.company}
          type={value.type}
          location={value.location}
          description={value.description}
          company_url={value.company_url}
        />
      }) : <div className="col-md-12"><p>No information to show yet</p></div>
  }
*/}  

            </div>
          </div>
        </div>
      </div>
    );
  }
}