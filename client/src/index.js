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
import BlogSpecific from './pages/BlogSpecific';
import JobSpecific from './pages/JobSpecific';
import ProfileSpecific from './pages/ProfileSpecific';
import LoginSpecific from './pages/LoginSpecific';


import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    <Router>
        <App>
            <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/blog-specific/" component={BlogSpecific} />
                <Route path="/profile-specific/" component={ProfileSpecific} />
                <Route path="/job-specific/" component={JobSpecific} />
                <Route path="/login-specific/" component={LoginSpecific} />
            </Switch>
        </App>
    </Router>,

    document.getElementById('root'));


// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
