import React, { Component } from 'react';

import axios from 'axios';
import {
    JOBS_test_API,
    HEROKU_BYPASS_CORS,
} from '../Constants';

import JobClick from '../components/jobs-specific';

export default class BlogSpecific extends Component {
    state = {
        jobResults: undefined,
    }

    componentDidMount() {
        console.log('match', this.props.match)

        axios.get(HEROKU_BYPASS_CORS + JOBS_test_API + this.props.match.params.id + '.json')
            .then(result => {
                console.log(result);
                this.setState({
                    jobResults: result.data,
                })
            })
    }


    render() {
        const { jobResults } = this.state;
        //console.log(jobResults)
        return (
            <div className="row">
                <div className="col-sm-12">
                    <h1>Job Specific</h1>
                </div>
                <div className="col-sm-12">
                    {
                        (jobResults !== undefined) ?
                            <JobClick
                                title={jobResults.title}
                                company_logo={jobResults.company_logo}
                                created_at={jobResults.created_at}
                                description={jobResults.description}
                            /> :
                            <div>
                                <div className="d-flex justify-content-center col-md-6">
                                    <img className='w-100' src='https://flevix.com/wp-content/uploads/2019/07/Bubble-Preloader-1.gif' alt="loading" />
                                </div>
                            </div>
                    }
                </div>
            </div>
        )
    }
}