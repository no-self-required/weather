function locationTimeType( {weather, datebuilder, query}) {
  return (
    <div className="location-time-type">
    <div className="location">
      {query}
    </div>
    <div className="date">{datebuilder(new Date())}</div>
    <div className="weatherType">
      {weather.data.current.weather[0].description}
    </div>
  </div>
  );
}

export default locationTimeType;