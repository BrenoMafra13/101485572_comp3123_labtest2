function Weather({ info }) {
  const icon =
    "http://openweathermap.org/img/wn/" +
    info.weather[0].icon +
    "@2x.png"

  return (
    <div className="weatherBlock">
      <h2>{info.name}, {info.sys.country}</h2>
      <p className="degreeNumber">{info.main.temp}°C</p>
      <img src={icon} alt="" />
      <p>{info.weather[0].description}</p>
      <p>Feels like: {info.main.feels_like}°C</p>
      <p>Humidity: {info.main.humidity}%</p>
      <p>Wind: {info.wind.speed} m/s</p>
    </div>
  )
}

export default Weather
