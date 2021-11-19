import dayjs from "dayjs";

function SingleDay(
  props
) {
  const currentDay = dayjs(props.date * 1000).format("dddd");
  return (
    <div className="singleDay">
      <div>
        {currentDay}
      </div>
      <div>
        {props.type}
      </div>
      <div>
        max: {(props.max - 273.15).toFixed()}°
      </div>
      <div>
        min: {(props.min - 273.15).toFixed()}°
      </div>
    </div>
  )
}

export default SingleDay;
