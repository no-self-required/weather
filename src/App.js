
import React, { useState, useEffect } from "react";
import axios from "axios";

import "./styles/Weatherbox.scss";

import Searchbox from "./components/Searchbox";
import LocationTimeType from "./components/LocationTimeType";
import TopWeatherInfo from "./components/TopWeatherInfo";
import SingleDay from "./components/SingleDay";

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
const apiBaseUrl = `https://api.openweathermap.org/data/2.5/`;
const apiBaseCoords = `http://api.openweathermap.org/geo/1.0/`;

//CSS IDEA: use glass effect for info container, maybe with different colours?

function App() {
  const [query, setQuery] = useState("Toronto");
  const [weather, setWeather] = useState();
  //weather is daily array

  useEffect(() => {
    const setDefaultCity = async () => {
      const defaultCity = await axios.get(
        `${apiBaseUrl}onecall?lat=43.651070&lon=-79.3832&appid=${apiKey}`
      );
      setWeather(defaultCity.data.daily);
    };
    setDefaultCity();
  }, []);

  const getCoordinatesBasedOn = (query) =>
    axios.get(`${apiBaseCoords}direct?q=${query}&appid=${apiKey}`);
    
  const getWeatherBasedOn = (coords) =>
    axios.get(
      `${apiBaseUrl}onecall?lat=${coords.data[0].lat}&lon=${coords.data[0].lon}&appid=${apiKey}`
    );

  const handleSubmission = async (event) => {
    if (event.key !== "Enter") {
      return;
    }

    try {
      const coords = await getCoordinatesBasedOn(query); // get coordinates based on city submitted by user
      const weather = await getWeatherBasedOn(coords); // get weather
      setWeather(weather.data.daily);
    } catch (e) {
      console.log(
        "An error occured while trying to get coordinates or the weather",
        e.message
      );
    }
  };

  // const datebuilder = (d) => {
  //   let months = [
  //     "January",
  //     "February",
  //     "March",
  //     "April",
  //     "May",
  //     "June",
  //     "July",
  //     "August",
  //     "September",
  //     "October",
  //     "November",
  //     "December",
  //   ];

  //   let days = [
  //     "Sunday",
  //     "Monday",
  //     "Tuesday",
  //     "Wednesday",
  //     "Thursday",
  //     "Friday",
  //     "Saturday",
  //   ];

  //   let day = days[d.getDay()];
  //   let date = d.getDate();
  //   let month = months[d.getMonth()];
  //   let year = d.getFullYear();

  //   return `${day} ${date} ${month} ${year}`;
  // };

  function setWeatherState () {
    
  }

  let daily;

  // console.log("WEATHER outside map", weather)

  if (weather) {
    // console.log("WEATHER inside map", weather)
    daily = weather.map((day, key) => {
      return (
        <div className="daily" key={key}>
          <SingleDay
            date={day.dt}
            type={day.weather[0].main}
            max={day.temp.max}
            min={day.temp.min}
          />
        </div>
      );
    });
  }

  return (
    <div className="app">
      <main>
        <Searchbox
          query={query}
          setQuery={setQuery}
          handleSubmission={handleSubmission}
        />
        {typeof weather != "undefined" ? (
          <div className="info-box">
            <div className="topBox">
              <LocationTimeType
                weather={weather}
                query={query}
              />
              <TopWeatherInfo weather={weather} />
            </div>
            <div className="daily-container">
              {daily}
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
