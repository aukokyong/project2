import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Selectbus = (props) => {
  return (
    <div className="container" style={{ border: "1px black solid" }}>
      <div className="row justify-content-center">
        <div className="col-6" style={{ border: "1px red solid" }}>
          <h1>Select Bus </h1>
          <br />
          <input
            type="text"
            placeholder="Enter Bus Number"
            maxLength="4"
            onChange={(e) => props.handleChangeBusNumInput(e)}
          />

          {props.selectbus.length > 0 && props.busstopcode.length === 0 ? (
            <p>Invalid Bus Number</p>
          ) : (
            <p></p>
          )}

          <br />

          <button>
            <Link to="/">Back</Link>
          </button>
          <button>
            <Link to="/destination">Next</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Selectbus;
