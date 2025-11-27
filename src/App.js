import { useState, useEffect } from "react"
import "./App.css"

function App() {
  const [city, setCity] = useState("")
  const [data, setData] = useState(null)

  useEffect(() => {
  if (city.length > 0) {
    localStorage.setItem("lastCity", city)
  }
}, [city])

function search() {
  if (city.length === 0) {
    return
  }

  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=0a10adc46976dbc8d0b4fcf5a1e0ce3c&units=metric"
  )
    .then((res) => res.json())
    .then((info) => {
      if (info.cod === 200) {
        setData(info)
      }
    })
}

  return (
    <div className="container">
      <div className="box">
        <h1 className="title">Breno Weather App</h1>

        <div className="search-area">
          <input
            className="input"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Search"
          />
          <button className="btn" onClick={search}>Search</button>
        </div>

        {!data && (
          <p className="hint">Type a city name</p>
        )}

        {data && (
          <div className="result">
            <h2>{data.name}</h2>
            <p className="temp">{data.main.temp}°C</p>
            <p>{data.weather[0].description}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
