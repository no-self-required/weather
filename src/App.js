import "./App.css";
import React, { useState } from "react";

import "./styles/info-box.scss";

import Searchbox from "./components/Searchbox";
import LocationTimeType from "./components/LocationTimeType";
import TopWeatherInfo from "./components/TopWeatherInfo";
import Graph from "./components/Graph";
import SingleDay from "./components/SingleDay";

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
          console.log(result);
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
        <Searchbox 
        query={query}
        setQuery={setQuery}
        search={search}
        />
        {typeof weather.city != "undefined" ? (
          <div className="info-box">
            <div className="topBox">
              <LocationTimeType 
                weather={weather}
                datebuilder={datebuilder}
              />  
              <TopWeatherInfo
                weather={weather}
              />
            </div>
            <Graph />
            <SingleDay             
            />
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default App;
