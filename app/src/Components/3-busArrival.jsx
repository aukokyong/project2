import { Link } from "react-router-dom";

const Busarrival = (props) => {
  // let timeBus1 = new Date(props.busarrivalinfo[0].NextBus.EstimatedArrival);
  // let timeBus2 = props.busarrivalinfo[0].NextBus2.EstimatedArrival;
  // let timeBus3 = props.busarrivalinfo[0].NextBus3.EstimatedArrival;
  // let bustime =
  //   timeBus1.getHours() +
  //   ":" +
  //   timeBus1.getMinutes() +
  //   ":" +
  //   timeBus1.getSeconds();

  let today = new Date();
  let currenttime =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  console.log(currenttime);

  let timediff = new Date(currenttime);
  console.log(timediff.getHours());

  const nextBusinMins = () => {};

  return (
    <div className="container" style={{ border: "1px black solid" }}>
      <div className="row justify-content-center">
        <div className="col-6" style={{ border: "1px red solid" }}>
          <h1>Bus Arrival</h1>

          <h2>Bus: {props.busarrivalinfo.ServiceNo}</h2>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-6" style={{ border: "1px red solid" }}>
          <div className="row">
            <div className="col" style={{ border: "1px blue solid" }}>
              <p>Next Bus</p>
              <p>{}</p>
            </div>
            <div className="col" style={{ border: "1px blue solid" }}>
              <p>Next Bus</p>

              {/* <h2>Bus: {props.busarrivalinfo[0].ServiceNo}</h2> */}
            </div>
            <div className="col" style={{ border: "1px blue solid" }}>
              <p>Next Bus</p>

              {/* <h2>Bus: {props.busarrivalinfo[0].ServiceNo}</h2> */}
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
            <Link to="/distance">Next</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Busarrival;
