import { Link } from "react-router-dom";
import ListBusStop from "./ListBusStop";

const Destination = (props) => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-6 text-center">
          <h1>My Travel Plan</h1>
        </div>
      </div>

      <br />

      <div className="row justify-content-center">
        <div className="col-6 text-center">
          <h3>My Start Location</h3>
          <p>Please select your start location</p>
          <select
            value={props.startdestination}
            onChange={(e) => props.handleChangeStart(e)}
          >
            <option></option>
            <ListBusStop
              busstopcode={props.busstopcode}
              databusstop={props.databusstop}
              isinputvalid={props.isinputvalid}
            />
          </select>
        </div>
      </div>

      <br />

      <div className="row justify-content-center">
        <div className="col-6 text-center">
          <h3>My End Location</h3>
          <p>Please select your end location</p>
          <select
            value={props.enddestination}
            onChange={(e) => props.handleChangeEnd(e)}
          >
            <option></option>
            <ListBusStop
              busstopcode={props.busstopcode}
              databusstop={props.databusstop}
              isinputvalid={props.isinputvalid}
            />
          </select>
        </div>
      </div>

      <br />
      <br />
      <br />

      <div className="row justify-content-center">
        <div className="col-6 text-center d-flex justify-content-around">
          <Link to="/bus">
            <button type="button" className="btn btn-danger">
              Back{" "}
            </button>
          </Link>

          <Link to="/busarrival">
            <button
              type="button"
              className="btn btn-danger"
              onClick={(e) => props.handleFetchBusArrivalInfo(e)}
            >
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Destination;
