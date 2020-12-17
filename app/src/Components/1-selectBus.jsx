import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Selectbus = (props) => {
  const ifinputvalid = () => {
    if (props.isinputvalid) {
      return (
        <Link to="/destination">
          <button type="button" className="btn btn-danger">
            Next
          </button>
        </Link>
      );
    } else {
      return (
        <button type="button" className="btn btn-danger">
          Next
        </button>
      );
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-6 text-center">
          <h1>Bus Service</h1>
          <br />
          <br />
          <p>Please enter the bus service number you are taking below</p>
          <input
            type="text"
            placeholder="Enter Bus Number"
            className="form-control"
            maxLength="4"
            onChange={(e) => props.handleChangeBusNumInput(e)}
          />

          {props.selectbus.length > 0 && props.busstopcode.length === 0 ? (
            <p>Invalid Bus Number</p>
          ) : (
            <p></p>
          )}
        </div>
      </div>

      <br />
      <br />

      <div className="row justify-content-center">
        <div className="col-6 text-center d-flex justify-content-around">
          <Link to="/">
            <button type="button" className="btn btn-danger">
              Back
            </button>
          </Link>

          {ifinputvalid()}

          {/* <Link to="/destination">
            <button type="button" className="btn btn-danger">
              Next
            </button>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Selectbus;
