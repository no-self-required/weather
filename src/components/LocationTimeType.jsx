function locationTimeType( {weather, datebuilder}) {
  return (
    <div className="location-time-type">
    <div className="location">
      {weather.city.name}, {weather.city.country}
    </div>
    <div className="date">{datebuilder(new Date())}</div>
    <div className="weatherType">
      {weather.list[0].weather[0].main}
    </div>
  </div>
  );
}

export default locationTimeType;