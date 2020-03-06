import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import './index.css';
import App from './App';
import Dashboard from './pages/Dashboard';
import Blog from './pages/Blog';
import Job from './pages/Job';
import Profile from './pages/Profile';


import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    <Router>
        <App>
            <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/blog-specific/" component={Blog} />
                <Route path="/profile-specific/" component={Profile} />
                <Route path="/job-specific/" component={Job} />
            </Switch>
        </App>
    </Router>,

    document.getElementById('root'));


// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
