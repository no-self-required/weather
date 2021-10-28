import "./App.css";
import React, { useState } from "react";
import axios from "axios";

import "./styles/Weatherbox.scss";

import Searchbox from "./components/Searchbox";
import LocationTimeType from "./components/LocationTimeType";
import TopWeatherInfo from "./components/TopWeatherInfo";
import Graph from "./components/Graph";
import SingleDay from "./components/SingleDay";

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
const apiBaseUrl = `https://api.openweathermap.org/data/2.5/`;
const apiBaseCoords = `http://api.openweathermap.org/geo/1.0/`;

function App() {
  const [query, setQuery] = useState("");
  const [coords, setCoords] = useState([]);
  const [weather, setWeather] = useState([]);

  const getCoords = (e) => {
    if (e.key === "Enter") {
      axios
        .get(`${apiBaseCoords}direct?q=${query}&appid=${apiKey}`)
        .then(function (response) {
          setQuery("");
          setCoords(response);
          console.log("COORDS----", coords);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const search = () => {
    axios
      .get(
        `${apiBaseUrl}onecall?lat=${coords[0].lat}&lon=${coords[0].lon}&appid=${apiKey}`
      )
      .then(function (response) {
        setWeather(response);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

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
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div className="app">
      <main>
        <Searchbox query={query} setQuery={setQuery} getCoords={getCoords} />
        {typeof weather.city != "undefined" ? (
          <div className="info-box">
            <div className="topBox">
              <LocationTimeType weather={weather} datebuilder={datebuilder} />
              <TopWeatherInfo weather={weather} />
            </div>
            <Graph />
            <SingleDay />
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default App;

