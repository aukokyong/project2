import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";

const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
      <NavLink
        className="navbar-brand"
        to="/"
        onClick={() => {
          props.clickhomereset();
        }}
      >
        Next Stop
      </NavLink>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink
              className="nav-link"
              to="/"
              onClick={() => {
                props.clickhomereset();
              }}
            >
              Home <span className="sr-only">(current)</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>

          {/* <li className="nav-item">
            <NavLink className="nav-link" to="/bus">
              bus
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/destination">
              destination
            </NavLink>
          </li>
          <li className="nav-item ">
            <NavLink className="nav-link" to="/busarrival">
              busarrival
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/setdistance">
              setdistance
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/alert">
              Alert
            </NavLink>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
