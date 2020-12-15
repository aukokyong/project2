// only for Node. For browser, require another method
let fs = require("fs");

// let txtData = fs.readFileSync("./busStops.txt");
// let data = JSON.parse(txtData);

let dataBusRoutes = JSON.parse(fs.readFileSync("./busRoute.txt"));
let dataBusStops = JSON.parse(fs.readFileSync("./busStop.txt"));
let dataBusServices = JSON.parse(fs.readFileSync("./busService.txt"));

// list out all the bus stop names in sequence
const busstopNames = () => {
  dataBusRoutes.map((bus) => {
    if (bus.ServiceNo === "55" && bus.Direction === 1) {
      dataBusStops.map((stop) => {
        if (stop.BusStopCode === bus.BusStopCode) {
          console.log(`No: ${bus.StopSequence} Name: ${stop.Description}`);
        }
      });
    }
  });
};
// busstopNames();

// console.log(dataBusRoutes[0]);
// console.log(dataBusStops[0]);
// console.log(dataBusServices[0]);

// list out all the bus stop names in sequence
const routes = () => {
  dataBusRoutes.map((bus) => {
    if (bus.ServiceNo === "120" && bus.Direction === 1) {
      console.log(bus.StopSequence + " : " + bus.BusStopCode);
    }
  });
};
// routes();

const businfo = () => {
  dataBusServices.map((bus) => {
    if (bus.ServiceNo === "103") {
      console.log(bus);
    }
  });
};
// businfo();

// List out all the bus at a particular bus stop
const listBusAtBusstop = () => {
  dataBusRoutes.map((bus) => {
    if (bus.BusStopCode === "53249") {
      console.log(bus.ServiceNo);
    }
  });
};
// listBusAtBusstop();

//console.log(dataBusRoutes[0]);

const listBus = () => {
  dataBusServices.map((bus) => {
    console.log(bus.ServiceNo);
  });
};
listBus();
