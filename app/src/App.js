import "bootstrap/dist/css/bootstrap.min.css";
import React, { isValidElement, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/header";
import Home from "./Components/home";
import About from "./Components/about";
import Destination from "./Components/2-destinations";
import Selectbus from "./Components/1-selectBus";
import Busarrival from "./Components/3-busArrival";
import Distance from "./Components/4-Distance";
import Arrived from "./Components/6-arrived";
import axios from "axios";

const App = () => {
  const loadFile = (filepath, filename, setData) => {
    axios(filepath)
      .then((response) => {
        // console.log(response.data);
        setData(response.data);
        console.log(`Data loaded: ${filename}`);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    let busRoutePath = "../database/busRoute.txt";
    let busServicePath = "../database/busService.txt";
    let busStopFilePath = "../database/busStop.txt";
    console.log("Loading files...");
    loadFile(busRoutePath, "Route", setdatabusroute);
    loadFile(busServicePath, "Service", datasetbusservice);
    loadFile(busStopFilePath, "Stop", datasetbusstop);
  }, []);

  const [databusroute, setdatabusroute] = useState([]);
  const [databusservice, datasetbusservice] = useState([]);
  const [databusstop, datasetbusstop] = useState([]);

  const [selectbus, setselectbus] = useState("");
  const [bussuggestion, setbussuggestion] = useState([]);
  const [isselectvalid, setisselectvalid] = useState(false);
  const [busstopcode, setbusstopcode] = useState([]);
  const [startdestination, setstartdestination] = useState("");
  const [enddestination, setenddestination] = useState("");
  const [busarrivalinfo, setbusarrivalinfo] = useState([]);
  const [alertdistance, setalertdistance] = useState(1);
  const [currentposcoord, setcurrentposcoord] = useState([]);
  const [endstopcoord, setendstopcoord] = useState([]);
  const [distancetoend, setdistancetoend] = useState();

  const handleChangeBusNumInput = (e) => {
    setstartdestination("");
    setenddestination("");

    checkIfUserInputValid(e);
    listBusStopSequence(e);
    listBusSuggestion(e);
  };

  const checkIfUserInputValid = (e) => {
    // Loop through bus services, break loop if true
    for (let i = 0; i < databusservice.length; i++) {
      if (databusservice[i].ServiceNo === e.target.value) {
        setisselectvalid(true);
        break;
      } else {
        setisselectvalid(false);
      }
    }
    setselectbus(e.target.value);
  };
  // console.log(selectbus);

  const listBusStopSequence = (e) => {
    let busstopCodeArr = [];
    databusroute.map((bus) => {
      if (bus.ServiceNo === e.target.value && bus.Direction === 1) {
        busstopCodeArr.push(bus.BusStopCode);
      }
      return null;
    });
    setbusstopcode(busstopCodeArr);
  };
  // console.log(busstopcode);

  const listBusSuggestion = (e) => {
    let suggestion = new Set();
    databusservice.map((bus) => {
      setbussuggestion([]);
      let checkChar = bus.ServiceNo.slice(0, e.target.value.length);
      if (checkChar === e.target.value && e.target.value.length > 0) {
        suggestion.add(bus.ServiceNo);
      }
      return null;
    });
    suggestion = [...suggestion]; // convert set to array
    setbussuggestion(suggestion);
  };
  // console.log(bussuggestion);

  const handleChangeStart = (e) => {
    console.log("Selected: " + e.target.value);
    setstartdestination(e.target.value);
  };
  console.log("startdestination: " + startdestination);

  const handleChangeEnd = (e) => {
    console.log("Selected: " + e.target.value);
    setenddestination(e.target.value);
    databusstop.map((info) => {
      if (info.BusStopCode === e.target.value) {
        return setendstopcoord({
          Latitude: info.Latitude,
          Longitude: info.Longitude,
        });
      }
    });
  };
  console.log("enddestination: " + enddestination);
  console.log("END BUSSTOP COORDINATE:");
  console.log(endstopcoord);

  const handleFetchBusArrivalInfo = (e) => {
    console.log("Start", e);
    if (isselectvalid && startdestination !== "") {
      // axiosCall();
      axiosCallTemporary();
      console.log(busarrivalinfo);
    }
  };

  const axiosCall = () => {
    let baseUrl =
      "http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2";
    let queryUrl = `${baseUrl}?BusStopCode=${startdestination}&ServiceNo=${selectbus}`;
    const config = {
      headers: {
        AccountKey: process.env.REACT_APP_API_KEY,
        accept: "application/json",
      },
    };
    axios
      .get(queryUrl, config)
      .then((response) => {
        setbusarrivalinfo(response.data.Services);
      })
      .catch((err) => console.log(err));
  };

  const axiosCallTemporary = () => {
    let baseUrl = "../database/busArrival.txt";
    axios
      .get(baseUrl)
      .then((response) => {
        console.log(response.data.data.Services[0]);
        setbusarrivalinfo(response.data.data.Services[0]);
      })
      .catch((err) => console.log(err));
  };
  // console.log(busarrivalinfo);

  const updateAlertDistance = (dist) => {
    console.log("CLICKED");
    setalertdistance(dist);
  };

  const successCallback = (pos) => {
    setcurrentposcoord({
      Latitude: pos.coords.latitude,
      Longitude: pos.coords.longitude,
    });
  };
  const errorCallback = (error) => {
    console.log(error);
  };
  // setInterval(() => {
  //   navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  // }, 30000);
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  console.log("CURRENT POSITION COORDINATE:");
  console.log(currentposcoord);

  const calculateDistance = () => {
    let latBus = endstopcoord.Latitude;
    let longBus = endstopcoord.Longitude;
    let latPos = currentposcoord.Latitude;
    let longPos = currentposcoord.Longitude;
  };

  return (
    <Router>
      <Header />
      <div>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/selectbus">
            <Selectbus
              handleChangeBusNumInput={handleChangeBusNumInput}
              selectbus={selectbus}
              busstopcode={busstopcode}
            />
          </Route>

          <Route path="/destination">
            <Destination
              startdestination={startdestination}
              handleChangeStart={handleChangeStart}
              busstopcode={busstopcode}
              databusstop={databusstop}
              isselectvalid={isselectvalid}
              enddestination={enddestination}
              handleChangeEnd={handleChangeEnd}
              handleFetchBusArrivalInfo={handleFetchBusArrivalInfo}
            />
          </Route>

          <Route path="/busarrival">
            <Busarrival busarrivalinfo={busarrivalinfo} />
          </Route>

          <Route path="/distance">
            <Distance
              updateAlertDistance={updateAlertDistance}
              alertdistance={alertdistance}
            />
          </Route>

          <Route path="/arrived">
            <Arrived />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
