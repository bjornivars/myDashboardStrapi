import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <Link className="navbar-brand" to="/">Bjornivars</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">{"Dashboard"}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog/">{'Blog'}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/job/">{'Jobs'}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/StarWars/">{'StarWars'}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile/">{'Profile'}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact/">{'Contact'}</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
