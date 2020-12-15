import { Link } from "react-router-dom";
import ListBusStop from "./ListBusStop";

const Startstop = (props) => {
  return (
    <div class="container" style={{ border: "1px black solid" }}>
      <div class="row justify-content-center">
        <div class="col-6" style={{ border: "1px red solid" }}>
          <h1>Start Stop</h1>

          <select
            value={props.startdestination}
            onChange={(e) => props.handleChangeStart(e)}
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
            <Link to="/selectbus">Back</Link>
          </button>
          <button>
            <Link to="/endstop">Next</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Startstop;
