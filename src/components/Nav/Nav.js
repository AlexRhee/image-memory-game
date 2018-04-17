import React from "react";
import "./Nav.css";

const Nav = props => 

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand disabled" href="/">NBA Team Logo Memory Game</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav ml-auto">
      <span id="score" className="nav-text">Score: {props.score}</span>
    </div>
  </div>
</nav>


export default Nav;
