import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/header";
import Home from "./Components/home";
import About from "./Components/about";
import Destination from "./Components/2-destinations";
import Selectbus from "./Components/1-selectBus";
import Busarrival from "./Components/3-busArrival";
import Setdistance from "./Components/4-setdistance";
import Alert from "./Components/5-alert";
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

  let template = [
    {
      ServiceNo: "88",
      Operator: "SBST",
      NextBus: {
        OriginCode: "77009",
        DestinationCode: "52009",
        EstimatedArrival: "2020-12-18T10:10:27+08:00",
        Latitude: "1.3555396666666666",
        Longitude: "103.84651483333333",
        VisitNumber: "1",
        Load: "SEA",
        Feature: "WAB",
        Type: "DD",
      },
      NextBus2: {
        OriginCode: "77009",
        DestinationCode: "52009",
        EstimatedArrival: "2020-12-18T10:18:52+08:00",
        Latitude: "1.3688576666666668",
        Longitude: "103.84642766666667",
        VisitNumber: "1",
        Load: "SEA",
        Feature: "WAB",
        Type: "DD",
      },
      NextBus3: {
        OriginCode: "77009",
        DestinationCode: "52009",
        EstimatedArrival: "2020-12-18T10:24:58+08:00",
        Latitude: "1.3693383333333333",
        Longitude: "103.85682483333333",
        VisitNumber: "1",
        Load: "SEA",
        Feature: "WAB",
        Type: "DD",
      },
    },
  ];

  const [databusroute, setdatabusroute] = useState([]);
  const [databusservice, datasetbusservice] = useState([]);
  const [databusstop, datasetbusstop] = useState([]);

  const [selectbus, setselectbus] = useState("");
  // const [bussuggestion, setbussuggestion] = useState([]);
  const [isinputvalid, setisinputvalid] = useState(false);
  const [busstopcode, setbusstopcode] = useState([]);
  const [startdestination, setstartdestination] = useState("");
  const [enddestination, setenddestination] = useState("");
  const [busarrivalinfo, setbusarrivalinfo] = useState(template);
  const [alertdistance, setalertdistance] = useState(1);
  const [endstopcoord, setendstopcoord] = useState([]);
  // const [alertuser, setalertuser] = useState(false);

  const handleChangeBusNumInput = (e) => {
    setstartdestination("");
    setenddestination("");

    checkIfUserInputValid(e);
    listBusStopSequence(e);
    // listBusSuggestion(e);
  };

  const checkIfUserInputValid = (e) => {
    // Loop through bus services, break loop if true
    for (let i = 0; i < databusservice.length; i++) {
      if (databusservice[i].ServiceNo === e.target.value) {
        setisinputvalid(true);
        break;
      } else {
        setisinputvalid(false);
      }
    }
    setselectbus(e.target.value);
  };
  // console.log(selectbus);
  // console.log(busstopcode);

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

  // const listBusSuggestion = (e) => {
  //   let suggestion = new Set();
  //   databusservice.map((bus) => {
  //     setbussuggestion([]);
  //     let checkChar = bus.ServiceNo.slice(0, e.target.value.length);
  //     if (checkChar === e.target.value && e.target.value.length > 0) {
  //       suggestion.add(bus.ServiceNo);
  //     }
  //     return null;
  //   });
  //   suggestion = [...suggestion]; // convert set to array
  //   setbussuggestion(suggestion);
  // };
  // console.log(bussuggestion);

  const handleChangeStart = (e) => {
    console.log("Selected: " + e.target.value);
    setstartdestination(e.target.value);
  };
  // console.log("startdestination: " + startdestination);

  const handleChangeEnd = (e) => {
    console.log("Selected: " + e.target.value);
    for (let i = 0; i < databusstop.length; i++) {
      if (databusstop[i].BusStopCode === e.target.value) {
        setendstopcoord({
          Latitude: databusstop[i].Latitude,
          Longitude: databusstop[i].Longitude,
        });
        break;
      }
    }
    setenddestination(e.target.value);
  };
  // console.log("enddestination: " + enddestination);

  //
  //
  //
  //
  //
  const handleFetchBusArrivalInfo = (e) => {
    // console.log("Start", e);
    if (isinputvalid && startdestination !== "" && enddestination !== "") {
      // axiosCall();
      axiosCallTemporary();
    }
  };

  // const axiosCall = () => {
  // let baseUrl =
  //   "http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2";
  // let queryUrl = `${baseUrl}?BusStopCode=${startdestination}&ServiceNo=${selectbus}`;
  // const config = {
  //   headers: {
  //     AccountKey: process.env.REACT_APP_API_KEY,
  //     accept: "application/json",
  //   },
  // };
  // axios
  //   .get(queryUrl, config)
  //   .then((response) => {
  //     setbusarrivalinfo(response.data.data.Services);
  //     // console.log(busarrivalinfo);
  //   })
  //   .catch((err) => console.log(err));
  // };

  const axiosCallTemporary = () => {
    let baseUrl = "../database/busArrival.txt";
    axios
      .get(baseUrl)
      .then((response) => {
        setbusarrivalinfo(response.data.data.Services);
        // console.log(busarrivalinfo);
      })
      .catch((err) => console.log(err));
  };

  const updateAlertDistance = (dist) => {
    console.log("CLICKED");
    console.log(dist);
    setalertdistance(dist);
  };

  const clickhomereset = () => {
    setisinputvalid(false);
  };

  return (
    <Router>
      <Header clickhomereset={clickhomereset} />
      <div>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/bus">
            <Selectbus
              handleChangeBusNumInput={handleChangeBusNumInput}
              selectbus={selectbus}
              busstopcode={busstopcode}
              isinputvalid={isinputvalid}
            />
          </Route>

          <Route path="/destination">
            {isinputvalid ? (
              <Destination
                startdestination={startdestination}
                handleChangeStart={handleChangeStart}
                busstopcode={busstopcode}
                databusstop={databusstop}
                isselectvalid={isinputvalid}
                enddestination={enddestination}
                handleChangeEnd={handleChangeEnd}
                handleFetchBusArrivalInfo={handleFetchBusArrivalInfo}
              />
            ) : (
              <p></p>
            )}
          </Route>

          <Route path="/busarrival">
            {isinputvalid ? (
              <Busarrival busarrivalinfo={busarrivalinfo} />
            ) : (
              <p></p>
            )}
          </Route>

          <Route path="/setdistance">
            {isinputvalid ? (
              <Setdistance
                updateAlertDistance={updateAlertDistance}
                alertdistance={alertdistance}
              />
            ) : (
              <p></p>
            )}
          </Route>
          <Route path="/alert">
            {isinputvalid ? (
              <Alert
                alertdistance={alertdistance}
                endstopcoord={endstopcoord}
                clickhomereset={clickhomereset}
              />
            ) : (
              <p></p>
            )}
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
