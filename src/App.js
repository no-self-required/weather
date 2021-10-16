import "./App.css";
import React, { useState, useEffect } from "react";
import Searchbox from "./components/searchbox";
import axios from "axios";

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=${apiKey}`;

function App() {

  const datebuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year  = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  };

  axios
    .get(apiUrl)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.error(error);
    });

  return (
    <div className="app">
      <main>
        <Searchbox></Searchbox>
        <div className="location-time">
          <div className="location">Toronto</div>
          <div className="date">{datebuilder(new Date())}</div>
        </div>
      </main>
    </div>
  );
}

export default App;
