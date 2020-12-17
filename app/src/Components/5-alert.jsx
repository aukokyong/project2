import { useState, useEffect } from "react";
import moment from "moment";

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

    if (dist <= 0.1) {
      return (
        <>
          <p>You have reached your destination</p>
        </>
      );
    } else if (dist <= props.alertdistance) {
      return (
        <>
          <p>You are reaching your destination in {dist} km</p>
        </>
      );
    } else {
      return <p>{dist} km remaining</p>;
    }
  };

  return (
    <div className="container" style={{ border: "1px black solid" }}>
      <div className="row justify-content-center">
        <div className="col-6" style={{ border: "1px red solid" }}>
          <h2>Distance Remaining </h2>
          {distLeft()}
        </div>
      </div>
    </div>
  );
};

export default Alert;
