import dayjs from "dayjs";

function locationTimeType( {weather, query}) {

  const formatedDate = dayjs(weather[0].dt * 1000).format("MMMM, DD YYYY");
  return (
    <div className="location-time-type">
    <div className="location">
      {query}
    </div>
    <div className="date">{formatedDate}</div>
    <div className="weatherType">
      {weather[0].weather[0].description}
    </div>
  </div>
  );
}

export default locationTimeType;