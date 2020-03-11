import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="page-footer font-small indigo">
            <div className="container">
                <div className="row text-center d-flex justify-content-center pt-5 mb-3">
                    <div className="col-md-2 mb-3">
                        <h6 className="text-uppercase font-weight-bold m-0">
                            <Link className="nav-link" to="/">{"Dashboard"}</Link>
                        </h6>
                    </div>
                    <div className="col-md-2 mb-3">
                        <h6 className="text-uppercase font-weight-bold">
                            <Link className="nav-link" to="/blog/">{'Blog'}</Link>
                        </h6>
                    </div>
                    <div className="col-md-2 mb-3">
                        <h6 className="text-uppercase font-weight-bold">
                            <Link className="nav-link" to="/job/">{'Jobs'}</Link>
                        </h6>
                    </div>
                    <div className="col-md-2 mb-3">
                        <h6 className="text-uppercase font-weight-bold">
                            <Link className="nav-link" to="/profile/">{'Profile'}</Link>
                        </h6>
                    </div>
                </div>
                <div className="row d-flex text-center justify-content-center mb-md-0 mb-4">
                    <div className="col-md-8 col-12 mt-2">
                        <p className="pStyle">This Dashboard, Blog, Profile, and Jobs website is Module Assignment 2. The site
                        is built in React, and is using both APIs from different websites, but also
                        with own-built APIs from Strapi.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;







