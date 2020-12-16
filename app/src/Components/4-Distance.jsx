import { Link } from "react-router-dom";
import { useState } from "react";

const Distance = (props) => {
  const [input, setinput] = useState();

  const checkInput = (e) => {
    setinput(e.target.value);
  };

  return (
    <div className="container" style={{ border: "1px black solid" }}>
      <div className="row justify-content-center">
        <div className="col-6" style={{ border: "1px red solid" }}>
          <h2>Set distance to alert</h2>
          <p>Distance to alert: {props.alertdistance} km</p>
          <input type="number" onChange={checkInput} />
          km
          <br />
          <button
            onClick={() => {
              props.updateAlertDistance(input);
            }}
          >
            Set
          </button>
        </div>
      </div>

      <br />

      <div className="row justify-content-center">
        <div className="col-6" style={{ border: "1px red solid" }}>
          <h2>Distance Left</h2>

          <button>
            <Link to="/busarrival">Back</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Distance;
