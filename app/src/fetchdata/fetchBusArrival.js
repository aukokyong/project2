require("dotenv").config({ path: "../../.env" });
const axios = require("axios").default;
let fs = require("fs");

let result = [];

const url = "http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2";
const stopId = "?BusStopCode=53399";
const busNum = "&ServiceNo=88";
const queryUrl = url + stopId + busNum;

const config = {
  headers: {
    AccountKey: process.env.REACT_APP_API_KEY,
    accept: "application/json",
  },
};

const getData = () => {
  return axios
    .get(queryUrl, config)
    .then((response) => {
      console.log(response.data.Services);
    })
    .catch((error) => {
      console.log(error);
      return result;
    });
};

getData();
