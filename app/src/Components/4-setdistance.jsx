import { Link } from "react-router-dom";
import { useState } from "react";

const Distance = (props) => {
  const [input, setinput] = useState();

  const updateinput = (e) => {
    setinput(e.target.value);
  };

  return (
    <div className="container" style={{ border: "1px black solid" }}>
      <div className="row justify-content-center">
        <div className="col-6" style={{ border: "1px red solid" }}>
          <h2>Set distance to alert</h2>
          <p>Set distance to alert</p>
          <input type="number" onChange={updateinput} />
          km
          <br />
          <button
            onClick={(e) => {
              props.updateAlertDistance(input);
            }}
          >
            <Link to="/alert">Set</Link>
          </button>
        </div>
      </div>

      <br />
    </div>
  );
};

export default Distance;
