require("dotenv").config({ path: "../../.env" });
const axios = require("axios").default;
let fs = require("fs");

let result = [];

const url = "http://datamall2.mytransport.sg/ltaodataservice/BusRoutes?$skip=";
const config = {
  headers: {
    AccountKey: process.env.REACT_APP_API_KEY,
    accept: "application/json",
  },
};

const saveToFile = () => {
  fs.writeFile("./busRoute.txt", JSON.stringify(result, null, 4), (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("File successfully written!");
    }
  });
};

const getData = () => {
  return axios
    .get(url + result.length, config)
    .then((response) => {
      if (response.data.value.length === 0) {
        console.log("No more data.");
        console.log("Total no. of data recevied: " + result.length);
        console.log("Writing all data to file...");
        saveToFile();
      } else {
        result = result.concat(response.data.value);
        console.log(response.data.value.length + " data received");
        return getData();
      }
    })
    .catch((error) => {
      console.log(error);
      return result;
    });
};

getData();
