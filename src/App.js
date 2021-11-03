import "./App.css";
import React, { useState } from "react";
import axios from "axios";

import "./styles/Weatherbox.scss";

import Searchbox from "./components/Searchbox";
import LocationTimeType from "./components/LocationTimeType";
import TopWeatherInfo from "./components/TopWeatherInfo";
import SingleDay from "./components/SingleDay";

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
const apiBaseUrl = `https://api.openweathermap.org/data/2.5/`;
const apiBaseCoords = `http://api.openweathermap.org/geo/1.0/`;

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState([]);

  const getCoordinatesBasedOn = (query) => axios.get(`${apiBaseCoords}direct?q=${query}&appid=${apiKey}`)
  const getWeatherBasedOn = (coords) => axios.get(`${apiBaseUrl}onecall?lat=${coords.data[0].lat}&lon=${coords.data[0].lon}&appid=${apiKey}`)

  const handleSubmission = async (event) => {
    if (event.key !== "Enter") { return; }

    try{
      const coords = await getCoordinatesBasedOn(query) // get coordinates based on city submitted by user
      const weather = await getWeatherBasedOn(coords) // get weather
      setWeather(weather)
      console.log("WEATHER------", weather)
    } catch (e) {
      console.log("An error occured while trying to get coordinates or the weather", e.message)
    }

  }

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
        <Searchbox query={query} setQuery={setQuery} handleSubmission={handleSubmission} />
        {typeof weather.data != "undefined" ? (
          <div className="info-box">
            <div className="topBox">
              <LocationTimeType weather={weather} datebuilder={datebuilder} query={query}/>
              <TopWeatherInfo weather={weather} />
            </div>
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

