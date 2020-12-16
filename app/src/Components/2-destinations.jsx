import { Link } from "react-router-dom";
import ListBusStop from "./ListBusStop";

const Destination = (props) => {
  return (
    <div className="container" style={{ border: "1px black solid" }}>
      <div className="row justify-content-center">
        <div className="col-6" style={{ border: "1px red solid" }}>
          <h1>Destinations</h1>
        </div>
      </div>

      <br />

      <div className="row justify-content-center">
        <div className="col-6" style={{ border: "1px red solid" }}>
          <h2>Start Stop</h2>

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
        </div>
      </div>

      <br />

      <div className="row justify-content-center">
        <div className="col-6" style={{ border: "1px red solid" }}>
          <h2>End Stop</h2>

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
            <Link to="/selectbus">Back</Link>
          </button>
          <button onClick={(e) => props.handleFetchBusArrivalInfo(e)}>
            <Link to="/busarrival">Next</Link>
          </button>
          <button onClick={(e) => props.handleFetchBusArrivalInfo(e)}>
            Click
          </button>
        </div>
      </div>
    </div>
  );
};

export default Destination;
