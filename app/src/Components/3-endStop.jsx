import { Link } from "react-router-dom";
import ListBusStop from "./ListBusStop";

const Endstop = (props) => {
  return (
    <div class="container" style={{ border: "1px black solid" }}>
      <div class="row justify-content-center">
        <div class="col-6" style={{ border: "1px red solid" }}>
          <h1>End Stop</h1>

          <select
            value={props.enddestination}
            onChange={(e) => props.handleChangeEnd(e)}
          >
            <option></option>
            <ListBusStop
              busstopcode={props.busstopcode}
              databusstop={props.databusstop}
              isselectvalid={props.isselectvalid}
            />
          </select>

          <br />
          <br />

          <button>
            <Link to="/startstop">Back</Link>
          </button>
          <button>
            <Link to="/busarrival">Next</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Endstop;
