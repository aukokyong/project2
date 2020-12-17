import { Link } from "react-router-dom";
import { useState } from "react";

const Distance = (props) => {
  const [input, setinput] = useState();

  const updateinput = (e) => {
    setinput(e.target.value);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-6 text-center">
          <h1>Alerting Distance</h1>
          <br />
          <h4>Current alerting distance</h4>
          <h3>{props.alertdistance} km</h3>

          <br />

          <div className="input-group mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="Enter a number to change alerting distance"
              onChange={updateinput}
            />

            <button
              type="button"
              className="btn btn-danger"
              onClick={(e) => {
                props.updateAlertDistance(input);
              }}
            >
              Update
            </button>
          </div>
        </div>
      </div>

      <br />
      <br />

      <div className="row justify-content-center">
        <div className="col-6 text-center d-flex justify-content-around">
          <Link to="/alert">
            <button type="button" className="btn btn-danger">
              Start Alert
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Distance;
