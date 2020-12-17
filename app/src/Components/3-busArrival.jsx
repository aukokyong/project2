import { Link } from "react-router-dom";
import { useState } from "react";
import moment from "moment";

const Busarrival = (props) => {
  const timenow = (e) => {
    setnow(moment().format("LT"));
    console.log("CLICKED");
  };
  const [now, setnow] = useState(moment().format("LT"));

  let bus1 = moment(props.busarrivalinfo[0].NextBus.EstimatedArrival);
  let bus2 = moment(props.busarrivalinfo[0].NextBus2.EstimatedArrival);
  let bus3 = moment(props.busarrivalinfo[0].NextBus3.EstimatedArrival);
  let crowd1 = props.busarrivalinfo[0].NextBus.Load;
  let crowd2 = props.busarrivalinfo[0].NextBus2.Load;
  let crowd3 = props.busarrivalinfo[0].NextBus3.Load;
  let feature1 = props.busarrivalinfo[0].NextBus.Feature;
  let feature2 = props.busarrivalinfo[0].NextBus2.Feature;
  let feature3 = props.busarrivalinfo[0].NextBus3.Feature;

  const nextBus = (nextbus) => {
    let now = moment();
    let next = nextbus;
    let timediffmins = Math.floor(next.diff(now) / 1000 / 60);
    return <p>{timediffmins} mins</p>;
  };

  const crowd = (code) => {
    if (code === "SEA") {
      return <p>Seats Available</p>;
    } else if (code === "SDA") {
      return <p>Standing Available</p>;
    } else if (code === "LSD") {
      return <p>Limited Standing</p>;
    } else {
      return <p>No Info</p>;
    }
  };

  const feature = (code) => {
    if (code === "WAB") {
      return <p>Wheel-chair Accessible</p>;
    } else {
      return <p>None</p>;
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-6 text-center">
          <h1>Bus Arrival Time</h1>
        </div>
      </div>

      <br />

      <div className="row justify-content-center text-center">
        <div className="col-6">
          <h4>Bus: {props.busarrivalinfo[0].ServiceNo}</h4>
          <p>Bus Operator: {props.busarrivalinfo[0].Operator}</p>
          <p>Last update: {now}</p>
          <button
            type="button"
            className="btn btn-danger"
            onClick={(e) => timenow(e)}
          >
            Check for update
          </button>
        </div>
      </div>

      <br />
      <br />

      <div className="row justify-content-center">
        <div className="col-6">
          <div className="row">
            <div className="col" style={{ border: "1px black solid" }}>
              <p>Next Bus Info</p>
              {nextBus(bus1)}
              {crowd(crowd1)}
              {feature(feature1)}
            </div>
            <div className="col" style={{ border: "1px black solid" }}>
              <p>Next Bus Info</p>
              {nextBus(bus2)}
              {crowd(crowd2)}
              {feature(feature2)}
            </div>
            <div className="col" style={{ border: "1px black solid" }}>
              <p>Next Bus Info</p>
              {nextBus(bus3)}
              {crowd(crowd3)}
              {feature(feature3)}
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />

      <div className="row justify-content-center">
        <div className="col-6 text-center d-flex justify-content-around">
          <Link to="/destination">
            <button type="button" className="btn btn-danger">
              Back
            </button>
          </Link>

          <Link to="/setdistance">
            <button type="button" className="btn btn-danger">
              I am on the bus!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Busarrival;
