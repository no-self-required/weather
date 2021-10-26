import "../styles/InfoBox.scss"

function TopWeatherInfo({ weather }) {
  return (
    <div className="weatherbox">
      <div>weather ico here</div>
      <div id="tempCFbox">
        <div className="temp">
          {(weather.list[0].main.temp - 273.15).toFixed()} 
        </div>
        <div id="CFswitch">°C | °F</div>
      </div>
      <div id="sum-box">
        <div>Preciptiation : xxx</div>
        <div>Humidity : xxx</div>
        <div>Wind : xxx</div>
      </div>
    </div>
  );
}

export default TopWeatherInfo;
