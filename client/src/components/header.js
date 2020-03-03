import React from 'react';
import { Link } from "react-router-dom";

const Navbar = (props) => {
    return(
        <div >

<nav className="navbar navbar-expand-lg navbar-light fixed-top">
  <Link className="navbar-brand" to="/">Navbar</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" to="/">{props.dashboardlink}</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/blog-specific/">{props.bloglink}</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/job-specific/">{props.joblink}</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/profile-specific/">{props.profilelink}</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link disabled" to="/logout-specific/">{props.logout}</Link>
      </li>
    </ul>
  </div>
</nav>




</div> // Main div




/*
            <ul >
                <li><a href="" >{props.dashboardlink}</a></li>
                <li><a href="" >{props.bloglink}</a></li>
                <li><a href="" >{props.joblink}</a></li>
                <li><a href="" >{props.logout}</a></li>
            </ul>
            */


    )
}



export default Navbar;
