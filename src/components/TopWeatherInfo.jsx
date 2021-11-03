import "../styles/InfoBox.scss"

function TopWeatherInfo({ weather }) {
  return (
    <div className="weatherbox">
      <div>weather ico here</div>
      <div id="tempCFbox">
        <div className="temp">
          {(weather.data.current.temp - 273.15).toFixed()} 
        </div>
        <div id="CFswitch">°C | °F</div>
      </div>
      <div id="sum-box">
        <div>Humidity : {weather.data.current.humidity}%</div>
        <div>Wind : {(weather.data.current.wind_speed * 3.6).toFixed()} km/h</div>
      </div>
    </div>
  );
}

export default TopWeatherInfo;
