import React from 'react';

const Navbar = (props) => {
    return(
        <div >




<nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="#">This shit lit</a>
    </div>

    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
        <li className=""><a href="#">{props.dashboardlink}</a></li>
        <li><a href="#">{props.bloglink}</a></li>
        <li><a href="#">{props.joblink}</a></li>
        <li><a href="#">{props.logout}</a></li>

      </ul>
      
    </div>
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
