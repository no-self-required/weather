import "./App.css";
import React, { useState } from "react";
// import Searchbox from "./components/searchbox";
// import axios from "axios";

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
const apiBaseUrl = `https://api.openweathermap.org/data/2.5/`;

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState([]);

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${apiBaseUrl}forecast?q=${query}&appid=${apiKey}`)
        .then((res) => res.json())
        .then((result) => {
          setQuery("");
          setWeather(result);
          console.log(result)
        });
    }
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
        <div className="searchbox">
          <input
            type="text"
            className="search-bar"
            placeholder="Enter a city"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          ></input>
        </div>
        {typeof weather.main != "undefined" ? (
          <div id="info-box">
            <div className="location-time">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date">{datebuilder(new Date())}</div>
            </div>
            <div className="weatherbox">
              <div className="temp">
                temp:
                {(weather.main.temp - 273.15).toFixed()}
              </div>
              <div className="weatherType">{weather.weather[0].main}</div>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default App;

// axios
// .get(apiUrl)
// .then(function (response) {
//   console.log(response);
// })
// .catch(function (error) {
//   console.error(error);
// });
