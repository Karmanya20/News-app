import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './components.css'
import PropTypes from 'prop-types';

export class Navbar extends Component {
  static defaultProps={
    category:""
  }
  static propTypes={
    category:PropTypes.string
  }
  render() {
    return (
      <div>
       <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><img src="./favicon-32x32.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" style={{marginRight: "5px"}}/>News</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link general" aria-current="page" to="/">General</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${(this.props.category===`business`)?`active`:``}`} to="/business">Business</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${(this.props.category===`entertainment`)?`active`:``}`} to="/entertainment">Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${(this.props.category===`health`)?`active`:``}`} to="/health">Health</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${(this.props.category===`science`)?`active`:``}`} to="/science">Science</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${(this.props.category===`sports`)?`active`:``}`} to="/sports">Sports</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${(this.props.category===`technology`)?`active`:``}`} to="/technology">Technology</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
      </div>
    );
  }
}

export default Navbar;
