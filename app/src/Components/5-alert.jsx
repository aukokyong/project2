import { useState, useEffect } from "react";
import moment from "moment";
import { Link } from "react-router-dom";

const Alert = (props) => {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }, []);

  const successCallback = (pos) => {
    setcurrentposcoor({
      Latitude: pos.coords.latitude,
      Longitude: pos.coords.longitude,
    });
    settime(moment().format("LTS"));
  };
  const errorCallback = (error) => {
    console.log(error);
  };

  const fun = () => {
    // navigator.geolocation.watchPosition(successCallback, errorCallback);
  };

  let interval = setInterval(fun, 30000);
  const [time, settime] = useState(moment().format("LTS"));
  const [currentposcoord, setcurrentposcoor] = useState(interval);
  //   const [endstopcoord, setendstopcoord] = useState(props.endstopcoord);

  console.log(time);
  console.log(currentposcoord);
  //   console.log(endstopcoord);

  const distLeft = () => {
    let latBus = props.endstopcoord.Latitude;
    let longBus = props.endstopcoord.Longitude;
    let latPos = currentposcoord.Latitude;
    let longPos = currentposcoord.Longitude;
    let latlength = (latBus - latPos) * 111;
    let longlength = (longBus - longPos) * 111;
    let dist = Math.sqrt(latlength ** 2 + longlength ** 2);
    dist = Math.floor(dist);
    console.log(dist + " km");

    if (dist <= 0.2) {
      return (
        <>
          <h2>You have reached your destination</h2>
          <br />
          <p>Thank you for using this app!</p>
        </>
      );
    } else if (dist <= props.alertdistance) {
      return (
        <>
          <h2>Distance Remaining </h2>
          <h1>{dist}</h1>
          <p>You are reaching your destination in {dist} km</p>
        </>
      );
    } else {
      return (
        <>
          <h2>Distance Remaining </h2>
          <h1>{dist}</h1>
          <p>km</p>
        </>
      );
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-6 text-center">{distLeft()}</div>
      </div>
      <div className="row justify-content-center">
        <div className="col-6 text-center" style={{ height: "200px" }}>
          <div className="spinner-border mt-5" role="status" />
          <p className="visually-hidden"> Loading map...</p>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-6 text-center">
          <Link to="/">
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => {
                props.clickhomereset();
              }}
            >
              Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Alert;
