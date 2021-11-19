import "../styles/InfoBox.scss"

function TopWeatherInfo({ weather }) {
  return (
    <div className="weatherbox">
      <div>weather ico here</div>
      <div id="tempCFbox">
        <div className="temp">
          {(weather[0].temp.eve - 273.15).toFixed()} 
        </div>
        <div id="CFswitch">°C | °F</div>
      </div>
      <div id="sum-box">
        <div>Precipitation : {(weather[0].pop * 100).toFixed()}%</div>
        <div>Humidity : {weather[0].humidity}%</div>
        <div>Wind : {(weather[0].wind_speed * 3.6).toFixed()} km/h</div>
      </div>
    </div>
  );
}

export default TopWeatherInfo;
