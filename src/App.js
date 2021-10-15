import "./App.css";
import React, { useState, useEffect } from "react";
import Searchbox from "./components/searchbox";
import axios from "axios";

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=${apiKey}`;

function App() {

  axios
    .get(apiUrl)
    .then(function (response) {
      console.log(response)
    })
    .catch(function (error) {
      console.error(error);
    });

  return (
    <div className="app">
      <main>
        <Searchbox></Searchbox>
      </main>  
    </div>
  );
}

export default App;
