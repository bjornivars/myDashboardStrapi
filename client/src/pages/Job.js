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

    userName: window.sessionStorage.getItem("user"),

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
    const { jobResults, isResultsFiltered, searchPhrase, filteredResults, userName } = this.state;
    console.log(jobResults);
    return (
      <div className="Job">
        <div className="row d-flex justify-content-between">
          {/* Jobs Card */}
          <div className="jumbotronImage-Job text-center">
            <h1 className="col-md-12 headerPadding">Jobs that might suit you, {userName}</h1>
            <form className='col-md-6 m-auto'>
              <p>Search for a React Job</p>
              <input type='text'
                name='username'
                onChange={this.handleFiltering}
                className="form-control"
              />
              <br />
              <br />
            </form>
          </div>
          <div className="container-fluid">
            <div className=" d-flex justify-content-between wrap">
              {
                (isResultsFiltered) ?
                  <div className="col-md-12 ">
                    <h1>Filtered Results for "{searchPhrase}"</h1>
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
                          <div>No Resultsssss</div>
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
                        <div className="d-flex justify-content-center col-md-6">
                          <img className='w-100' src='https://flevix.com/wp-content/uploads/2019/07/Bubble-Preloader-1.gif' alt="loading" />
                        </div>
                    }
                  </>
              }
            </div>
          </div>

        </div>
      </div>
    );
  }
}