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

  const nextBus = (nextbus) => {
    let now = moment();
    let next = nextbus;
    let timediffmins = Math.floor(next.diff(now) / 1000 / 60);
    return <p>{timediffmins} mins</p>;
  };

  const crowd = (code) => {
    if (code === "SEA") {
      return "Seats Available";
    } else if (code === "SDA") {
      return "Standing Available";
    } else if (code === "LSD") {
      return "Limited Standing";
    } else {
      return "No Info";
    }
  };

  return (
    <div className="container" style={{ border: "1px black solid" }}>
      <div className="row justify-content-center">
        <div className="col-6" style={{ border: "1px red solid" }}>
          <h1>Bus Arrival</h1>

          <h4>Bus: {props.busarrivalinfo[0].ServiceNo}</h4>
          <p>Bus Operator: {props.busarrivalinfo[0].Operator}</p>
          <p>Last update: {now}</p>
          <button onClick={(e) => timenow(e)}>Refresh</button>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-6" style={{ border: "1px red solid" }}>
          <div className="row">
            <div className="col" style={{ border: "1px blue solid" }}>
              <p>Next Bus</p>
              {nextBus(bus1)}
              <p>{crowd(crowd1)}</p>
            </div>
            <div className="col" style={{ border: "1px blue solid" }}>
              <p>Next Bus</p>
              {nextBus(bus2)}
              <p>{crowd(crowd2)}</p>
            </div>
            <div className="col" style={{ border: "1px blue solid" }}>
              <p>Next Bus</p>
              {nextBus(bus3)}
              <p>{crowd(crowd3)}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-6" style={{ border: "1px red solid" }}>
          <button>
            <Link to="/destination">Back</Link>
          </button>
          <button>
            <Link to="/setdistance">Next</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Busarrival;
