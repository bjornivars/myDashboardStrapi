import React from 'react';

const Navbar = (props) => {
    return(
        <div >

<nav className="navbar navbar-expand-lg navbar-light fixed-top">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="/">{props.dashboardlink}</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/blog-specific/">{props.bloglink}</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/job-specific/">{props.joblink}</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/profile-specific/">{props.profilelink}</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="/logout-specific/">{props.logout}</a>
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
